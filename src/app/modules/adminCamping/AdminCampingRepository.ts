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
}
export default new AdminCampingRepository();
