"use client";

import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CampingProps, InfraProps } from "../../assets/lib/definitions";
import styles from "./addInfoInfra.module.css";

export default function AddInfoInfra({
	register,
	infra,
	errors,
}: {
	register: UseFormRegister<CampingProps>;
	infra: InfraProps[] | undefined;
	errors: FieldErrors<CampingProps>;
}) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}>Information infrastructure</legend>
				<label className={styles.label} htmlFor="infra">
					Infrastructure
				</label>
				<div>
					<select
						className={styles.input}
						{...register("infra", { required: "Champ requis" })}
					>
						<option value={0}>Séléctionnez une infrastructure</option>
						{infra
							? infra.map((i) => (
									<option key={i.id} value={i.id}>
										{i.label}
									</option>
								))
							: ""}
					</select>
					<p className={styles.error}>{errors.photoInfra?.message}</p>
				</div>
				<label className={styles.label} htmlFor="photoInfra">
					Photo
				</label>
				<div>
					<input
						className={styles.input}
						type="file"
						{...register("photoInfra", { required: "champs requis" })}
					/>
					<p className={styles.error}>{errors.photoInfra?.message}</p>
				</div>
			</fieldset>
		</>
	);
}
