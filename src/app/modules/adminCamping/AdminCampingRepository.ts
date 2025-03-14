import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class AdminCampingRepository {
	async createPitches(labelPitches: string) {
		try {
			const result = await sql`
        INSERT INTO type_pitches(label)
        VALUES(${labelPitches})
		
        `;

			return { message: `l'emplacement ${labelPitches} a bien été ajouté` };
		} catch (errors) {
			return { message: "Une erreur est survenu" };
		}
	}
}

export default new AdminCampingRepository();
