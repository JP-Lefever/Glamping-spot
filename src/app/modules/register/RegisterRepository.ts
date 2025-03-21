import type { UserProps } from "@/app/assets/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class RegisterRepository {
	async createUser(data: UserProps) {
		const {
			email,
			firstName,
			lastName,
			birthdate,
			city,
			zipCode,
			tel,
			password,
		} = data;

		try {
			const result = await sql`
    INSERT INTO "user" (email, firstname, lastname, birthdate, city, zipcode, tel, password)
    VALUES (${email},${firstName},${lastName},${birthdate},${city},${zipCode},${tel},${password})
    `;
			console.log(result);
			return { message: "Le compte a bien été créé" };
		} catch (e) {
			console.log(e);
		}
	}
}

export default new RegisterRepository();
