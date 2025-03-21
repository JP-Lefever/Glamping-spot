"use server";

import type { UserProps } from "@/app/assets/lib/definitions";
import RegisterRepository from "./RegisterRepository";
import { hashPassword } from "@/app/helpers/argon.helpers";

export const createUser = async (data: UserProps) => {
	try {
		const { password } = data;
		const newPassword = await hashPassword(password);
		if (newPassword) {
			data.password = newPassword;
		}

		console.log(data);
		const insertUser = await RegisterRepository.createUser(data);
		console.log(insertUser);

		return { success: true, message: insertUser?.message };
	} catch (e) {
		console.log(e);
	}
};
