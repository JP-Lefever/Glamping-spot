"use client";

import { useForm } from "react-hook-form";

import type { PitchesProps } from "../../assets/lib/definitions";
import styles from "./addTypePitches.module.css";

export default function AddTypePitches() {
	const { register } = useForm<PitchesProps>();

	return (
		<>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un Emplacement</legend>
					<label className={styles.label} htmlFor="label">
						Nom de l'emplacement
					</label>
					<input className={styles.inpit} type="text" {...register("label")} />
					<button className={styles.button} type="submit">
						Ajouter un emplacement
					</button>
				</fieldset>
			</form>
		</>
	);
}
