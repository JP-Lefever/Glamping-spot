import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "@/app/modules/auth/authAction";
import argon from "argon2";

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z.object({
					email: z.string().email(),
					password: z.string().min(8),
				});

				const validCredential = parsedCredentials.safeParse(credentials);
				if (!validCredential.success) {
					throw new Error("Une erreur est survenue");
				}

				const { email, password } = validCredential.data;
				const user = await getUser(email);
				if (!user) return null;
				const passwordMatch = await argon.verify(user.password, password);

				if (!passwordMatch) return null;

				return {
					id: user.id.toString(),
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					role: user.role,
				};
			},
		}),
	],
});
