import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class AdminCampingRepository {
	async createPitches(labelPitches: string) {
		const [result] = await sql`
        INSERT INTO type_pitches(label)
        VALUES(${labelPitches})
        `;
		return result;
	}
}

export default new AdminCampingRepository();
