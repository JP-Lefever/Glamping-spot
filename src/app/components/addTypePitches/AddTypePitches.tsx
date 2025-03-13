"use client";

import { useForm } from "react-hook-form";
import type { PitchesProps } from "../../assets/lib/definitions";
import styles from "./addTypePitches.module.css";
import { addPitchesType } from "@/app/modules/adminCamping/adminCampingAction";

export default function AddTypePitches() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<PitchesProps>();

	const onSubmit = (data: PitchesProps) => {
		addPitchesType(data);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un Emplacement</legend>
					<label className={styles.label} htmlFor="label">
						Nom de l'emplacement
					</label>
					<input
						className={styles.inpit}
						type="text"
						{...register("labelPitches", { required: "champs requis" })}
					/>
					<p>{errors.labelPitches?.message}</p>
					<button className={styles.button} type="submit">
						Ajouter un emplacement
					</button>
				</fieldset>
			</form>
		</>
	);
}
