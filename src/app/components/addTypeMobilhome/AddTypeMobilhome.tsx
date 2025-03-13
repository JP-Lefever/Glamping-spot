"use client";

import { useForm } from "react-hook-form";

import type { ModelProps } from "../../assets/lib/definitions";
import styles from "./addTypeMobilhome.module.css";

export default function AddTypeMobilhome() {
	const { register } = useForm<ModelProps>();

	return (
		<>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un héberement</legend>
					<label className={styles.label} htmlFor="label">
						Nom de l'hébergement
					</label>
					<input className={styles.inpit} type="text" {...register("label")} />
					<button className={styles.button} type="submit">
						Ajouter un héberement
					</button>
				</fieldset>
			</form>
		</>
	);
}
