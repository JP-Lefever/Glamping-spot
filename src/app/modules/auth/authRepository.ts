import type { UserProps } from "@/app/assets/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class AuthRepository {
	async readUserEmail(email: string): Promise<UserProps | null> {
		try {
			const user = await sql`
        SELECT * 
        FROM "user"
        WHERE email = ${email}
        `;

			return user[0] as UserProps | null;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}

export default new AuthRepository();
