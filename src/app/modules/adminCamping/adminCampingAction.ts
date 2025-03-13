"use server";
import AdminCampingRepository from "./AdminCampingRepository";
import type { PitchesProps } from "../../assets/lib/definitions";

export async function addPitchesType(data: PitchesProps) {
	const { labelPitches } = data;
	const pitchId = await AdminCampingRepository.createPitches(labelPitches);
}
