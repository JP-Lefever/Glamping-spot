import postgres from "postgres";
import type { UserProps } from "../lib/definitions";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

export async function fetchUserInfo(email: string) {
	try {
		const userInfo = await sql<UserProps[]>`
SELECT firstname, lastname, city, birthdate, zipcode, email, tel
FROM "user"
WHERE email = ${email}
`;
		return userInfo[0];
	} catch (e) {
		console.error(e);
	}
}
