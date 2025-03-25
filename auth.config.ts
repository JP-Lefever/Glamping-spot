import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	callbacks: {
		authorized({ auth }) {
			const isLoggedIn = !!auth?.user;

			if (isLoggedIn) {
				return true;
			}
		},
	},
	providers: [],
} satisfies NextAuthConfig;
