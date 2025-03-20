"use client";

import type { CampingProps, ModelProps } from "../../assets/lib/definitions";
import styles from "./addInfoMh.module.css";

import type { UseFormRegister, FieldErrors } from "react-hook-form";

export default function AddInfoCamping({
	register,
	model,
	errors,
}: {
	register: UseFormRegister<CampingProps>;
	errors: FieldErrors<CampingProps>;
	model: ModelProps[] | undefined;
}) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}>Information hébergement</legend>
				<label className={styles.label} htmlFor="modelMh">
					Type d'hébergement
				</label>
				<div>
					<select
						className={styles.input}
						{...register("modelMh", { required: "Champ requis" })}
					>
						<option value={0}>Séléctionnez une type d'hébergement</option>
						{model
							? model.map((m) => (
									<option key={m.id} value={m.id}>
										{m.label}
									</option>
								))
							: ""}
					</select>
					<p className={styles.error}>{errors.modelMh?.message}</p>
				</div>
				<label className={styles.label} htmlFor="sizeMh">
					Taille(en m2)
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("sizeMh", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.sizeMh?.message}</p>
				</div>
				<label className={styles.label} htmlFor="pricePerNight">
					Prix/nuit
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						step="0.01"
						{...register("pricePerNight", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.pricePerNight?.message}</p>
				</div>
				<label className={styles.label} htmlFor="maxPers">
					Max personnes
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("maxPers", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.pricePerNight?.message}</p>
				</div>
				<label className={styles.label} htmlFor="openingMh">
					Date d'ouverture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("openingMh", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.openingMh?.message}</p>
				</div>
				<label className={styles.label} htmlFor="closingMh">
					Date de fermeture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("closingMh", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.closingMh?.message}</p>
				</div>
				<label className={styles.label} htmlFor="linear">
					Nombre de linéaire
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("linear", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.linear?.message}</p>
				</div>

				<label className={styles.label} htmlFor="photoMh">
					Photo
				</label>
				<div>
					<input
						className={styles.input}
						type="file"
						{...register("photoMh", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.linear?.message}</p>
				</div>
			</fieldset>
		</>
	);
}
