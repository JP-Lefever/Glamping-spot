"use client";

import type { UseFormRegister } from "react-hook-form";
import type { CampingProps, InfraProps } from "../../assets/lib/definitions";
import styles from "./addInfoInfra.module.css";

export type RegisterProps = {
	register: UseFormRegister<CampingProps>;
};
export default function AddInfoInfra({
	register,
	infra,
}: {
	register: UseFormRegister<CampingProps>;
	infra: InfraProps[] | undefined;
}) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}>Information infrastructure</legend>
				<label className={styles.label} htmlFor="infra">
					Infrastructure
				</label>
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
				<label className={styles.label} htmlFor="photoInfra">
					Photo
				</label>
				<input
					className={styles.input}
					type="file"
					{...register("photoInfra")}
				/>
			</fieldset>
		</>
	);
}
