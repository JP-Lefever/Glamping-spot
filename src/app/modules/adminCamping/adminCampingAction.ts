"use server";
import AdminCampingRepository from "./AdminCampingRepository";
import type {
	PitchesProps,
	ModelProps,
	InfraProps,
} from "../../assets/lib/definitions";
import { z } from "zod";

const validationSchemaLocation = z.object({
	labelLocation: z.string().min(1, { message: "champs requis" }),
});
const validationSchemaPitches = z.object({
	labelPitches: z.string().min(1, { message: "champs requis" }),
});
const validationSchemaInfra = z.object({
	labelInfra: z.string().min(1, { message: "champs requis" }),
});

export async function addPitchesType(data: PitchesProps) {
	const validateData = validationSchemaPitches.safeParse(data);
	if (validateData.success) {
		const { labelPitches } = validateData.data;

		const pitchId = await AdminCampingRepository.createPitches(labelPitches);

		return { success: true, message: pitchId.message };
	}
	if (!validateData.success) {
		return { message: "Un problème est survenu" };
	}
}

export async function addTypeLocation(data: ModelProps) {
	const validateData = validationSchemaLocation.safeParse(data);

	if (validateData.success) {
		const { labelLocation } = validateData.data;
		const LocationId =
			await AdminCampingRepository.createLocation(labelLocation);

		return { success: true, message: LocationId.message };
	}
	if (!validateData.success) {
		return { message: "Un problème est survenu" };
	}
}

export async function addInfrastructure(data: InfraProps) {
	const validateData = validationSchemaInfra.safeParse(data);

	if (validateData.success) {
		const { labelInfra } = validateData.data;

		const infraId = await AdminCampingRepository.createInfra(labelInfra);

		return { success: true, message: infraId.message };
	}
	if (!validateData.success) {
		return { message: "un problème est survenu" };
	}
}
