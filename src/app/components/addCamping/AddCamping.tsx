"use client";

import { useForm } from "react-hook-form";

import type { CampingProps } from "../../assets/lib/definitions";
import AddInfoCamping from "../addInfoCamping/AddInfoCamping";
import AddInfoIngra from "../addInfoInfra/AddInfoInfra";
import AddInfoMh from "../addInfoMh/AddInfoMh";
import AddInfoPitches from "../addInfoPitches/AddInfoPitches";
import styles from "./addCamping.module.css";

export default function FormAddCamping() {
	const { register } = useForm<CampingProps>();

	return (
		<>
			<section className={styles.add_form}>
				<form>
					<AddInfoCamping register={register} />
					<AddInfoMh register={register} />
					<AddInfoPitches register={register} />
					<AddInfoIngra register={register} />
					<button className={styles.button} type="submit">
						Je valide les Informations
					</button>
				</form>
			</section>
		</>
	);
}
