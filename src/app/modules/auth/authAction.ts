"use server";

import type { UserProps } from "@/app/assets/lib/definitions";
import authRepository from "./authRepository";
import { signIn } from "../../../../auth";

export async function getUser(email: string) {
	const user = await authRepository.readUserEmail(email);

	if (!user) {
		return null;
	}
	return {
		id: user.id.toString(),
		firstName: user.firstName,
		lastName: user.lastName,
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
		});
		console.log(signIn);
	} catch (error) {
		console.error(error);
	}
}
