import NextAuth, { User } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "@/app/modules/auth/authAction";
import argon from "argon2";
import type { UserProps } from "@/app/assets/lib/definitions";
import { JWT } from "next-auth/jwt";

export const { handlers, auth, signIn, signOut } = NextAuth({
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
					firstname: user.firstname,
					email: user.email,
					role: user.role,
				} as UserProps;
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			session.user = {
				id: token.id as string,
				emailVerified: null,
				firstname: token.firstName as string,
				email: token.email as string,
				role: token.role as string,
			};

			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.firstName = user.firstname;
				token.email = user.email;
				token.role = user.role;
			}

			return token;
		},
	},
});
