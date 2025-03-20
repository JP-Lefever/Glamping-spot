import postgres from "postgres";
import type {
	ModelProps,
	InfraProps,
	PitchesProps,
	CampingProps,
	CampingDetailsProps,
} from "../lib/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

export async function fetchPitch() {
	try {
		const pitches = await sql<PitchesProps[]>`
    SELECT *
    FROM type_pitches
    `;
		return pitches as PitchesProps[];
	} catch (error) {
		console.error("dabase error:", error);
	}
}

export async function fetchInfra() {
	try {
		const infra = await sql<InfraProps[]>`
        SELECT * 
        FROM kind_infra
        `;
		return infra;
	} catch (err) {
		console.error("dabase error:", err);
	}
}

export async function fetchModel() {
	try {
		const model = await sql<ModelProps[]>`
        SELECT * 
        FROM model
        `;
		return model;
	} catch (err) {
		console.error("dabase error:", err);
	}
}

export async function fetchCamping5() {
	try {
		const camping5 = await sql<CampingDetailsProps[]>`
		SELECT c.*, p.opening AS openingPitch, p.closing AS closingPitch, p.photo AS photoPitch, p.size AS sizePitch, p.is_electrified, p.power, p.price_night, p.max_pers AS maxPersPitch, r.size AS sizeMh, r.max_pers AS maxPersMh, r.pricepernight, r.opening AS openingMh, r.closing AS closingMh, r.photo AS photoMh
		FROM camping AS c
		JOIN rental AS r ON r.camping_id = c.id
		JOIN infrastructure AS i ON i.camping_id = c.id
		JOIN pitches AS p ON p.camping_id = c.id
		WHERE stars = 5
		`;

		return camping5;
	} catch (e) {
		console.error(e);
	}
}
export async function fetchCamping4() {
	try {
		const camping5 = await sql<CampingDetailsProps[]>`
		SELECT c.*, p.opening AS openingPitch, p.closing AS closingPitch, p.photo AS photoPitch, p.size AS sizePitch, p.is_electrified, p.power, p.price_night, p.max_pers AS maxPersPitch, r.size AS sizeMh, r.max_pers AS maxPersMh, r.pricepernight, r.opening AS openingMh, r.closing AS closingMh, r.photo AS photoMh
		FROM camping AS c
		JOIN rental AS r ON r.camping_id = c.id
		JOIN infrastructure AS i ON i.camping_id = c.id
		JOIN pitches AS p ON p.camping_id = c.id
		WHERE stars = 4
		`;

		return camping5;
	} catch (e) {
		console.error(e);
	}
}

export async function fetchDetails(id: string) {
	try {
		const camping5 = await sql<CampingDetailsProps[]>`
		SELECT c.*, p.opening AS openingPitch, p.closing AS closingPitch, p.photo AS photoPitch, p.size AS sizePitch, p.is_electrified, p.power, p.price_night, p.max_pers AS maxPersPitch, r.size AS sizeMh, r.max_pers AS maxPersMh, r.pricepernight, r.opening AS openingMh, r.closing AS closingMh, r.photo AS photoMh
		FROM camping AS c
		JOIN rental AS r ON r.camping_id = c.id
		JOIN infrastructure AS i ON i.camping_id = c.id
		JOIN pitches AS p ON p.camping_id = c.id
		WHERE id= ${id}
		`;

		return camping5;
	} catch (e) {
		console.error(e);
	}
}
