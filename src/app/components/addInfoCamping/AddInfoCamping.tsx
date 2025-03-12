"use client";

import type { CampingProps } from "../../assets/lib/definitions";
import styles from "./addInfoCamping.module.css";

import type { UseFormRegister } from "react-hook-form";

export type RegisterProps = {
	register: UseFormRegister<CampingProps>;
};

export default function AddInfoCamping({ register }: RegisterProps) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}> Informations Générales</legend>
				<label className={styles.label} htmlFor="campingName">
					Nom
				</label>
				<input
					className={styles.input}
					type="text"
					{...register("campingName", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="zipCode">
					Code postal
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("zipCode", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="adress">
					Adresse
				</label>
				<input
					className={styles.input}
					type="text"
					{...register("adress", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="city">
					Ville
				</label>
				<input
					className={styles.input}
					type="text"
					{...register("city", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<input
					className={styles.input}
					type="email"
					{...register("email", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="tel">
					Téléphone
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("tel", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="stars">
					Etoiles
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("stars", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="opening">
					Date d'ouverture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("opening", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="closing">
					Date de fermeture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("closing", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="description">
					Description du camping
				</label>
				<input
					className={styles.input}
					type="text"
					{...register("description", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="photoCamp">
					Photo
				</label>
				<input
					className={styles.input}
					type="file"
					{...register("photoCamp")}
				/>
			</fieldset>
		</>
	);
}
