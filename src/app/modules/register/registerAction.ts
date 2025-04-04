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
	firstname: z.string().min(1, "Veuillez renseigner au moins 1 caractère"),

	lastname: z.string(),

	email: z.string().email("Email invalide"),

	birthdate: z.coerce
		.date()
		.max(minBirthdate, "Vous devez avoir au moins 18ans"),

	city: z.string().min(5, "Veuillez renseigner au moins 1 caractère"),

	zipcode: z.coerce.number().min(1, "Veuillez renseigner au moins 5 chiffres"),

	tel: z.string().min(10).max(14),

	password: z
		.string()
		.min(8)
		.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/),
});

export const createUser = async (
	data: Omit<UserProps, "id" | "confirmpassword" | "role">,
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

			return { success: true, message: insertUser.message };
		}
	} catch (e) {
		console.error(e);
	}
};

export const updateUser = async (
	user: Omit<UserProps, "id" | "confirmpassword" | "role" | "password">,
) => {
	const parseDate = (date: string | Date) => {
		if (typeof date === "string") {
			const [day, month, year] = date.split("/").map(Number);
			return new Date(year, month - 1, day);
		}
		return date;
	};

	const { birthdate, ...rest } = user;
	const validBirthDate = parseDate(birthdate);

	const userToValidate = { ...rest, birthdate: validBirthDate };

	const updateUserSchema = userSchema.omit({ password: true });
	const validateData = updateUserSchema.safeParse(userToValidate);

	if (validateData.success) {
		const userUpdated = await RegisterRepository.updateUser(validateData.data);

		return { success: true, message: userUpdated?.message };
	}
};
