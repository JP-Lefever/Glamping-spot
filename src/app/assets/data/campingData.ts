import postgres from "postgres";
import type { ModelProps, InfraProps, PitchesProps } from "../lib/definitions";

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
