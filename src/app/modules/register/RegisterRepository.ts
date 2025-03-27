import type { UserProps } from "@/app/assets/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class RegisterRepository {
	async createUser(
		data: Omit<UserProps, "id" | "confirmpassword" | "role">,
	): Promise<Record<string, string>> {
		const {
			email,
			firstname,
			lastname,
			birthdate,
			city,
			zipCode,
			tel,
			password,
		} = data;

		try {
			await sql`
    INSERT INTO "user" (email, firstname, lastname, birthdate, city, zipcode, tel, password)
    VALUES (${email},${firstname},${lastname},${birthdate},${city},${zipCode},${tel},${password})
    `;

			return { message: "Le compte a bien été créé" };
		} catch (error) {
			return {
				message: "Une erreur est survenu, veuillez verifier les champs",
			};
		}
	}
}

export default new RegisterRepository();
