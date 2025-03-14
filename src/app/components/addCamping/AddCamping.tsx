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
	const { register, handleSubmit, reset } = useForm<CampingProps>();

	const onSubmit = async (data: CampingProps) => {
		console.log(data);
		const response = await addCamping(data);

		if (response?.success) {
			toast.success(response.message);
		}
	};

	return (
		<>
			<section className={styles.add_form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AddInfoCamping register={register} />
					<AddInfoMh register={register} model={model} />
					<AddInfoPitches register={register} pitches={pitches} />
					<AddInfoInfra register={register} infra={infra} />
					<button className={styles.button} type="submit">
						Je valide les Informations
					</button>
				</form>
			</section>
		</>
	);
}
