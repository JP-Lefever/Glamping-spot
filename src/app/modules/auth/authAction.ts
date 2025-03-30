"use server";

import type { UserProps } from "@/app/assets/lib/definitions";
import authRepository from "./authRepository";
import { signIn, signOut } from "../../../../auth";

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
		await signIn("credentials", {
			redirect: false,
			email: user.email,
			password: user.password,
			role: user.role,
			firstname: user.firstname,
		});

		return {
			status: "authenticated",
			message: "Bienvenu chez Glamping spot",
		};
	} catch (error) {
		console.error(error);
	}
}

export async function logout() {
	await signOut({ redirect: false });

	return { status: "logOut", message: "A bientot" };
}
