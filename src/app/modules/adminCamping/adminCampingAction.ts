"use server";
import AdminCampingRepository from "./AdminCampingRepository";
import type { PitchesProps } from "../../assets/lib/definitions";

export async function addPitchesType(data: PitchesProps) {
	const { labelPitches } = data;
	try {
		const pitchId = await AdminCampingRepository.createPitches(labelPitches);
		console.log(pitchId.message);
		return { success: true, message: pitchId.message };
	} catch (errors) {
		return { message: "Problème dans la création du type d'emplacement" };
	}
}
