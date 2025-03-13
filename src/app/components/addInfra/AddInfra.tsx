"use client";

import { type SubmitHandler, useForm } from "react-hook-form";

import type { InfraProps } from "../../assets/lib/definitions";
import styles from "./addInfra.module.css";

export default function AddInfra() {
	const { register } = useForm<InfraProps>();

	return (
		<>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>
						{" "}
						Ajouter une nouvelle infrastructure
					</legend>
					<label className={styles.label} htmlFor="label">
						Nom de l'infrastructure
					</label>
					<input className={styles.inpit} type="text" {...register("label")} />
					<button className={styles.button} type="submit">
						Ajouter une infrastructure
					</button>
				</fieldset>
			</form>
		</>
	);
}
