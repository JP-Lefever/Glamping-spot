import type { User as NextAuthUser } from "next-auth";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			firstname: string;

			email: string;
			role: string;
		} & DefaultSession["user"];
	}

	interface User extends NextAuthUser {
		firstname: string;

		email: string;
		role: string;
	}
}
