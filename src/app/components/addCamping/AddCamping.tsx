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

export default function FormAddCamping({
	pitches,
	infra,
	model,
}: {
	pitches: PitchesProps[] | undefined;
	infra: InfraProps[] | undefined;
	model: ModelProps[] | undefined;
}) {
	const { register } = useForm<CampingProps>();

	return (
		<>
			<section className={styles.add_form}>
				<form>
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
