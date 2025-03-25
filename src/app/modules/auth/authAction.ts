"use server";

import type { UserProps } from "@/app/assets/lib/definitions";
import authRepository from "./authRepository";
import { signIn, auth } from "../../../../auth";
import { getSession } from "next-auth/react";

export async function getUser(email: string) {
	const user = await authRepository.readUserEmail(email);

	if (!user) {
		return null;
	}
	return {
		id: user.id.toString(),
		firstname: user.firstname,
		lastname: user.lastname,
		email: user.email,
		password: user.password,
		role: user.role,
	};
}

export async function authenticate(user: UserProps) {
	try {
		const isLogged = await signIn("credentials", {
			redirect: false,
			email: user.email,
			password: user.password,
		});

		if (isLogged?.error) {
			console.error("erreur", isLogged.eror);
		}
	} catch (error) {
		console.error(error);
	}
}

export async function userSession() {
	const session = await auth();

	if (!session) {
		return new Response(JSON.stringify({ message: "Non authentifié" }), {
			status: 401,
		});
	}

	return new Response(JSON.stringify(session.user), { status: 200 });
}
