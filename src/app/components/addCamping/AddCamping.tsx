"use client";

import { useForm } from "react-hook-form";

import type {
	CampingProps,
	InfraProps,
	ModelProps,
	PitchesProps,
} from "../../assets/lib/definitions";
import AddInfoCamping from "../addInfoCamping/AddInfoCamping";
import AddInfoInfra from "../addInfoInfra/AddInfoInfra";
import AddInfoMh from "../addInfoMh/AddInfoMh";
import AddInfoPitches from "../addInfoPitches/AddInfoPitches";
import styles from "./addCamping.module.css";
import { addCamping } from "@/app/modules/adminCamping/adminCampingAction";
import { toast } from "react-toastify";

export default function FormAddCamping({
	pitches,
	infra,
	model,
}: {
	pitches: PitchesProps[] | undefined;
	infra: InfraProps[] | undefined;
	model: ModelProps[] | undefined;
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CampingProps>();

	const onSubmit = async (data: CampingProps) => {
		const { photoCamp, photoMh, photoPitche, photoInfra, ...rest } = data;
		const formData = new FormData();
		formData.append("photoCamp", photoCamp[0]);
		formData.append("photoMh", photoMh[0]);
		formData.append("photoPitche", photoPitche[0]);
		formData.append("photoInfra", photoInfra[0]);
		formData.append("info", JSON.stringify(rest));

		const responseUpload = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});
		const dataPhoto = await responseUpload.json();
		if (responseUpload.ok) {
			console.log("photo uploaded");
		} else {
			console.log("Un problem est survenu");
		}

		const response = await addCamping(formData, dataPhoto);
		console.info(response);

		if (response?.success) {
			toast.success(response.message);
		}
	};

	return (
		<>
			<section className={styles.add_form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AddInfoCamping register={register} errors={errors} />
					<AddInfoMh register={register} model={model} errors={errors} />
					<AddInfoPitches
						register={register}
						pitches={pitches}
						errors={errors}
					/>
					<AddInfoInfra register={register} infra={infra} errors={errors} />
					<button className={styles.button} type="submit">
						Je valide les Informations
					</button>
				</form>
			</section>
		</>
	);
}
