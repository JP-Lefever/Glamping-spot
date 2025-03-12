"use client";

import { useEffect, useState } from "react";
import type { CampingProps, ModelProps } from "../../assets/lib/definitions";
import styles from "./addInfoMh.module.css";

import type { UseFormRegister } from "react-hook-form";

export type RegisterProps = {
	register: UseFormRegister<CampingProps>;
};

export default function AddInfoCamping({ register }: RegisterProps) {
	const [mobilHome, setMobilHome] = useState<ModelProps[]>();
	// useEffect(() => {
	//   fetch(`${import.meta.env.VITE_API_URL}/camping/mobilhome`)
	//     .then((res) => res.json())
	//     .then((data) => setMobilHome(data));
	// }, []);
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}>Information hébergement</legend>
				<label className={styles.label} htmlFor="modelMh">
					Type d'hébergement
				</label>
				<select
					className={styles.input}
					{...register("modelMh", { required: "Champ requis" })}
				>
					<option value={0}>Séléctionnez une type d'hébergement</option>
					{mobilHome
						? mobilHome.map((m) => (
								<option key={m.id} value={m.id}>
									{m.label}
								</option>
							))
						: ""}
				</select>
				<label className={styles.label} htmlFor="sizeMh">
					Taille(en m2)
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("sizeMh", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="pricePerNight">
					Prix/nuit
				</label>
				<input
					className={styles.input}
					type="number"
					step="0.01"
					{...register("pricePerNight", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="maxPers">
					Max personnes
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("maxPers", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="openingMh">
					Date d'ouverture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("openingMh", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="closingMh">
					Date de fermeture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("closingMh", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="linear">
					Nombre de linéaire
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("linear", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="photoMh">
					Photo
				</label>
				<input className={styles.input} type="file" {...register("photoMh")} />
			</fieldset>
		</>
	);
}
