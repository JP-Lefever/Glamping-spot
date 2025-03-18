import type {
	CampingInfo,
	PitchProps,
	RentalProps,
} from "@/app/assets/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class AdminCampingRepository {
	async createPitches(labelPitches: string) {
		try {
			await sql`
        INSERT INTO type_pitches(label)
        VALUES(${labelPitches})
		
        `;

			return { message: `l'emplacement ${labelPitches} a bien été ajouté` };
		} catch (errors) {
			return { message: "Une erreur est survenu" };
		}
	}
	async createLocation(label: string) {
		try {
			await sql`
	INSERT INTO model (label)
	VALUES (${label})
	`;
			return { message: `Le modèle ${label} a bien été ajouté` };
		} catch (errors) {
			return { message: "Un problème est survenu" };
		}
	}

	async createInfra(labelInfra: string) {
		try {
			await sql`
			INSERT INTO kind_infra (label)
			VALUES (${labelInfra})
			`;
			return { message: `l'infrastructure ${labelInfra} a bien été ajouté` };
		} catch (errors) {
			return { message: "Un problème est survenu" };
		}
	}

	async createCamping({
		campingName,
		openingCamp,
		closingCamp,
		email,
		tel,
		stars,
		city,
		zipCode,
		adress,
		description,
		photoCampName,
	}: Omit<CampingInfo, "id">) {
		try {
			const openingDate = new Date(openingCamp);
			const closingDate = new Date(closingCamp);
			const result = await sql`
			INSERT INTO camping(label, opening, closing, email, tel, stars, city, zipcode, adress, description, photo)
			VALUES(${campingName},${openingDate},${closingDate},${email},${tel},${stars},${city},${zipCode},${adress},${description},${photoCampName})
			RETURNING id
			`;

			return result[0].id;
		} catch (err) {
			return { message: err };
		}
	}

	async createRental(
		{
			modelMh,
			sizeMh,
			maxPers,
			pricePerNight,
			formattedOpeningMh,
			formattedclosingMh,
			linear,
			photoMhName,
		}: Omit<RentalProps, "id">,
		camping_id: number,
	) {
		try {
			const openingDate = new Date(formattedOpeningMh);
			const closingDate = new Date(formattedclosingMh);
			const result = await sql`
		INSERT INTO rental(model_id, size, max_pers,pricePerNight,opening,closing,total,camping_id, photo)
		VALUES (${modelMh}, ${sizeMh}, ${maxPers}, ${pricePerNight},${openingDate},${closingDate},${linear},${camping_id},${photoMhName})
		RETURNING id
		`;

			return result[0].id;
		} catch (err) {
			return { message: err };
		}
	}

	async createPitch(
		{
			typePitche,
			sizePitche,
			electricity,
			power,
			pricePitche,
			maxPersPitche,
			formattedOpeningPitch,
			formattedclosingPitch,
			photoPitchName,
			totalPitches,
		}: Omit<PitchProps, "id" | "photoPitche">,
		camping_id: number,
	) {
		try {
			const openingDate = new Date(formattedOpeningPitch);
			const closingDate = new Date(formattedclosingPitch);
			const result = await sql`
				INSERT INTO pitches (type_pitches_id, size, is_electrified, power, price_night, max_pers, opening, closing, total, camping_id, photo)
				VALUES (${typePitche},${sizePitche},${electricity},${power},${pricePitche},${maxPersPitche},${openingDate},${closingDate},${totalPitches},${camping_id},${photoPitchName})
				RETURNING id
				`;

			return result[0].id;
		} catch (err) {
			return { message: err };
		}
	}
	async createInfrastructure(
		infra: string,
		camping_id: number,
		photoInfraName: string,
	) {
		try {
			const result = await sql`
			INSERT INTO infrastructure(label, camping_id,photo)
			VALUES (${infra}, ${camping_id}, ${photoInfraName})
			RETURNING id
			`;

			return result[0].id;
		} catch (err) {
			return { message: "database error" };
		}
	}
}
export default new AdminCampingRepository();
