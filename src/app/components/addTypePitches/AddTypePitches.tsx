"use client";

import { useForm } from "react-hook-form";
import type { PitchesProps } from "../../assets/lib/definitions";
import styles from "./addTypePitches.module.css";
import { addPitchesType } from "@/app/modules/adminCamping/adminCampingAction";
import { toast } from "react-toastify";

export default function AddTypePitches() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<PitchesProps>();

	const onSubmit = async (data: PitchesProps) => {
		const response = await addPitchesType(data);

		if (response?.success) {
			toast.success(response.message);
		}
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un Emplacement</legend>
					<label className={styles.label} htmlFor="labelPitches">
						Nom de l'emplacement
					</label>
					<input
						className={styles.inpit}
						type="text"
						{...register("labelPitches", {
							required: "*Champs requis",
							minLength: {
								value: 2,
								message: "*Le champs doit contenir au moins 2 caractères",
							},
							pattern: {
								value: /^[a-zA-Z0-9]/,
								message: "Seul les lettres et les chiffres sont autorisés",
							},
						})}
					/>
					<button className={styles.button} type="submit">
						Ajouter un emplacement
					</button>
				</fieldset>
				<p className={styles.error}>{errors.labelPitches?.message}</p>
			</form>
		</>
	);
}
