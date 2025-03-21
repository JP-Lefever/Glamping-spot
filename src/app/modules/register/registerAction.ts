"use server";

import type { UserProps } from "@/app/assets/lib/definitions";
import RegisterRepository from "./RegisterRepository";
import { hashPassword } from "@/app/helpers/argon.helpers";
import { z } from "zod";

const today = new Date();
const minBirthdate = new Date(
	today.getFullYear() - 18,
	today.getMonth(),
	today.getDate(),
);

const userSchema = z.object({
	firstName: z.string().min(1, "Veuillez renseigner au moins 1 caractère"),

	lastName: z.string(),

	email: z.string().email("Email invalide"),

	birthdate: z.coerce
		.date()
		.max(minBirthdate, "Vous devez avoir au moins 18ans"),

	city: z.string().min(5, "Veuillez renseigner au moins 1 caractère"),

	zipCode: z.coerce.number().min(1, "Veuillez renseigner au moins 5 chiffres"),

	tel: z.string().min(10).max(14),

	password: z
		.string()
		.min(8)
		.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/),
});

export const createUser = async (
	data: Omit<UserProps, "id" | "confirmpassword">,
) => {
	const validateData = userSchema.safeParse(data);
	try {
		if (validateData.success) {
			const { password } = validateData.data;
			const newPassword = await hashPassword(password);
			if (newPassword) {
				validateData.data.password = newPassword;
			}

			const insertUser = await RegisterRepository.createUser(validateData.data);
			console.log(insertUser);

			return { success: true, message: insertUser.message };
		}
		console.log(validateData.error);
	} catch (e) {
		console.log(e);
	}
};
