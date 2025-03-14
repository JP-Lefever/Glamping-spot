"use client";

import { useForm } from "react-hook-form";

import type { InfraProps } from "../../assets/lib/definitions";
import styles from "./addInfra.module.css";
import { addInfrastructure } from "@/app/modules/adminCamping/adminCampingAction";
import { toast } from "react-toastify";

export default function AddInfra() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InfraProps>();

	const onSubmit = async (data: InfraProps) => {
		const response = await addInfrastructure(data);
		if (response?.success) {
			toast.success(response.message);
			reset();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>
						Ajouter une nouvelle infrastructure
					</legend>
					<label className={styles.label} htmlFor="labelInfra">
						Nom de l'infrastructure
					</label>
					<input
						className={styles.inpit}
						type="text"
						{...register("labelInfra", {
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
						Ajouter une infrastructure
					</button>
				</fieldset>
				<p className={styles.error}>{errors.labelInfra?.message}</p>
			</form>
		</>
	);
}
