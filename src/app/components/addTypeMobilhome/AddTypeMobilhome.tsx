"use client";

import { useForm } from "react-hook-form";

import type { ModelProps } from "../../assets/lib/definitions";
import styles from "./addTypeMobilhome.module.css";
import { addTypeLocation } from "@/app/modules/adminCamping/adminCampingAction";
import { toast } from "react-toastify";

export default function AddTypeMobilhome() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ModelProps>();

	const onSubmit = async (data: ModelProps) => {
		const response = await addTypeLocation(data);
		if (response?.success) {
			toast.success(response.message);
			reset();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un héberement</legend>
					<label className={styles.label} htmlFor="labelLocation">
						Nom de l'hébergement
					</label>

					<input
						className={styles.input}
						type="text"
						{...register("labelLocation", {
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
						Ajouter un héberement
					</button>
				</fieldset>
				<p className={styles.error}>{errors.labelLocation?.message}</p>
			</form>
		</>
	);
}
