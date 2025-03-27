import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isUserLoggedIn = auth?.user.role === "user";
			const isAdminLoggedIn = auth?.user.role === "admin";
			const isLoggedIn = !!auth?.user;
			const isOnAdmin = nextUrl.pathname.startsWith("/admin");

			if (isOnAdmin) {
				if (isUserLoggedIn) {
					return false;
				}
				if (!isLoggedIn) {
					return false;
				}
				return true;
			}
			if (isAdminLoggedIn) {
				return Response.redirect(new URL("/admin", nextUrl));
			}
		},
	},
	providers: [],
} satisfies NextAuthConfig;
