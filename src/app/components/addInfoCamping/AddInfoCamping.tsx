"use client";

import type { CampingProps } from "../../assets/lib/definitions";
import styles from "./addInfoCamping.module.css";

import type { FieldErrors, UseFormRegister } from "react-hook-form";

export default function AddInfoCamping({
	register,
	errors,
}: {
	register: UseFormRegister<CampingProps>;
	errors: FieldErrors<CampingProps>;
}) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}> Informations Générales</legend>
				<label className={styles.label} htmlFor="campingName">
					Nom
				</label>
				<div>
					<input
						className={styles.input}
						type="text"
						{...register("campingName", {
							required: "Champ requis",
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
					<p className={styles.error}>{errors.campingName?.message}</p>
				</div>
				<label className={styles.label} htmlFor="zipCode">
					Code postal
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("zipCode", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.zipCode?.message}</p>
				</div>
				<label className={styles.label} htmlFor="adress">
					Adresse
				</label>
				<div>
					<input
						className={styles.input}
						type="text"
						{...register("adress", {
							required: "Champ requis",
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
					<p className={styles.error}>{errors.adress?.message}</p>
				</div>
				<label className={styles.label} htmlFor="city">
					Ville
				</label>
				<div>
					<input
						className={styles.input}
						type="text"
						{...register("city", {
							required: "Champ requis",
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
					<p className={styles.error}>{errors.city?.message}</p>
				</div>
				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<div>
					<input
						className={styles.input}
						type="email"
						{...register("email", {
							required: "Champ requis",
							minLength: {
								value: 2,
								message: "*Le champs doit contenir au moins 2 caractères",
							},
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
								message: "Mail invalide",
							},
						})}
					/>
					<p className={styles.error}>{errors.email?.message}</p>
				</div>
				<label className={styles.label} htmlFor="tel">
					Téléphone
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("tel", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.tel?.message}</p>
				</div>
				<label className={styles.label} htmlFor="stars">
					Etoiles
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("stars", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.stars?.message}</p>
				</div>
				<label className={styles.label} htmlFor="opening">
					Date d'ouverture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("opening", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.opening?.message}</p>
				</div>
				<label className={styles.label} htmlFor="closing">
					Date de fermeture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("closing", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.closing?.message}</p>
				</div>
				<label className={styles.label} htmlFor="description">
					Description du camping
				</label>
				<div>
					<input
						className={styles.input}
						type="text"
						{...register("description", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.description?.message}</p>
				</div>
				<label className={styles.label} htmlFor="photoCamp">
					Photo
				</label>
				<div>
					<input
						className={styles.input}
						type="file"
						{...register("photoCamp", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.photoCamp?.message}</p>
				</div>
			</fieldset>
		</>
	);
}
