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
			zipcode,
			tel,
			password,
		} = data;

		try {
			await sql`
    INSERT INTO "user" (email, firstname, lastname, birthdate, city, zipcode, tel, password)
    VALUES (${email},${firstname},${lastname},${birthdate},${city},${zipcode},${tel},${password})
    `;

			return { message: "Le compte a bien été créé" };
		} catch (error) {
			return {
				message: "Une erreur est survenu, veuillez verifier les champs",
			};
		}
	}
	async updateUser(
		user: Omit<UserProps, "id" | "confirmpassword" | "role" | "password">,
	) {
		const { firstname, lastname, email, birthdate, city, zipcode, tel } = user;
		try {
			await sql`
			UPDATE "user"
			SET firstname = ${firstname}, lastname= ${lastname}, email=${email}, birthdate= ${birthdate}, city = ${city}, zipcode =${zipcode}, tel = ${tel}
			WHERE email = ${email}
			`;
			return { message: "Le profil a été modifié avec succès" };
		} catch (e) {
			console.error(e);
		}
	}
}

export default new RegisterRepository();
