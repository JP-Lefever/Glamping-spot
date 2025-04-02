"use server";
import AdminCampingRepository from "./AdminCampingRepository";
import type {
	PitchesProps,
	ModelProps,
	InfraProps,
	CampingProps,
	RentalProps,
	PhotoProps,
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
const validationSchemaCamping = z.object({
	campingName: z.string().min(1, "Le nom du camping est requis"),
	description: z.string().min(1, "La description est requise"),
	opening: z.coerce.date(),
	closing: z.coerce.date(),
	email: z.string().email("Email invalide"),
	tel: z.string().min(10, "Veuillez entrer un numéro téléphone valide"),

	stars: z.coerce
		.number()
		.int()
		.min(1)
		.max(5, "Les étoiles doivent être entre 1 et 5"),
	city: z.string().min(1, "La ville est requise"),
	zipCode: z.coerce.number().int().min(0).max(99999, "Code postal invalide"),
	adress: z.string().min(1, "L'adresse est requise"),
	infra: z.string(),
	modelMh: z.string(),
	sizeMh: z.coerce.number().positive(),
	maxPers: z.coerce.number().int().positive(),
	pricePerNight: z.coerce.number().positive(),
	openingMh: z.coerce.date(),
	closingMh: z.coerce.date(),
	linear: z.coerce.number().positive(),
	typePitche: z.string().min(1, "Le type d'emplacement est requis"),
	sizePitche: z.coerce.number().positive(),

	electricity: z.coerce.boolean(),
	power: z.coerce.number().int().positive(),
	pricePitche: z.coerce.number().positive(),
	maxPersPitche: z.coerce.number().int().positive(),
	openingPitche: z.coerce.date(),
	closingPitche: z.coerce.date(),

	totalPitches: z.coerce.number().int().positive(),
});
const formatedDate = (date: Date) => {
	return date.toISOString().split("T")[0];
};
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

export async function addCamping(formData: FormData, dataPhoto: PhotoProps) {
	const data = formData.get("info") as string;

	const infoCamping = JSON.parse(data);

	const { photoCampName, photoMhName, photoPitchName, photoInfraName } =
		dataPhoto;

	const validateData = validationSchemaCamping.safeParse(infoCamping);

	if (validateData.success) {
		const {
			campingName,
			opening,
			closing,
			email,
			tel,
			stars,
			city,
			zipCode,
			adress,
			description,
			modelMh,
			sizeMh,
			maxPers,
			pricePerNight,
			openingMh,
			closingMh,
			linear,
			typePitche,
			sizePitche,
			electricity,
			power,
			pricePitche,
			maxPersPitche,
			openingPitche,
			closingPitche,
			totalPitches,
			infra,
		} = validateData.data;
		const openingCamp = formatedDate(opening);
		const closingCamp = formatedDate(closing);
		const campingInfo = {
			campingName,
			openingCamp,
			closingCamp,
			email,
			tel,
			stars,
			city,
			zipCode,
			adress,
			description,
			photoCampName,
		};
		const formattedOpeningMh = formatedDate(openingMh);
		const formattedclosingMh = formatedDate(closingMh);
		const rentalInfo = {
			modelMh,
			sizeMh,
			maxPers,
			pricePerNight,
			formattedOpeningMh,
			formattedclosingMh,
			linear,
			photoMhName,
		};
		const formattedOpeningPitch = formatedDate(openingPitche);
		const formattedclosingPitch = formatedDate(closingPitche);
		const pitchInfo = {
			typePitche,
			sizePitche,
			electricity,
			power,
			pricePitche,
			maxPersPitche,
			formattedOpeningPitch,
			formattedclosingPitch,
			totalPitches,
			photoPitchName,
		};

		const campingId = await AdminCampingRepository.createCamping(campingInfo);

		const rentalId = await AdminCampingRepository.createRental(
			rentalInfo,
			campingId,
		);
		const pitchId = await AdminCampingRepository.createPitch(
			pitchInfo,
			campingId,
		);

		console.log(infra);
		const infraId = await AdminCampingRepository.createInfrastructure(
			infra,
			campingId,
			photoInfraName,
		);

		return {
			success: true,
			message: `Le camping ${campingName} a bien été ajouté`,
		};
	}
	if (validateData.success === false) {
		return { message: "un problème est survenu" };
	}
}
