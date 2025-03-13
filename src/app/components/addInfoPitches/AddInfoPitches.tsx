import type { UseFormRegister } from "react-hook-form";
import type { CampingProps } from "../../assets/lib/definitions";
import styles from "./addInfoPitches.module.css";

export type RegisterProps = {
	register: UseFormRegister<CampingProps>;
};

export default function AddInfoPitches({ register }: RegisterProps) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}> Information emplacement</legend>
				<label className={styles.label} htmlFor="typePitche">
					Type d'emplacement
				</label>
				<select
					className={styles.input}
					{...register("typePitche", { required: "Champ requis" })}
				>
					<option value={0}>Séléctionnez une type d'emplacement</option>
					{/* {pitches
						? pitches.map((p) => (
								<option key={p.id} value={p.id}>
									{p.label}
								</option>
							))
						: ""} */}
				</select>
				<label className={styles.label} htmlFor="sizePitche">
					Taille (en m2)
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("sizePitche", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="pricePitche">
					Prix/nuit
				</label>
				<input
					className={styles.input}
					type="number"
					step="0.01"
					{...register("pricePitche", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="maxPersPitche">
					Max personnes
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("maxPersPitche", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="openingPitche">
					Date d'ouverture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("openingPitche", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="closingPitche">
					Date de fermeture
				</label>
				<input
					className={styles.input}
					type="date"
					{...register("closingPitche", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="electricity">
					Avec electricité
				</label>

				<select
					className={styles.input}
					{...register("electricity", { required: "Champ requis" })}
				>
					<option value="true">Oui</option>
					<option value="false">Non</option>
				</select>
				<label className={styles.label} htmlFor="power">
					Puissance (en A)
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("power", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="totalPitches">
					Nombre d'emplacement
				</label>
				<input
					className={styles.input}
					type="number"
					{...register("totalPitches", { required: "Champ requis" })}
				/>
				<label className={styles.label} htmlFor="photoPitche">
					Photo
				</label>
				<input
					className={styles.input}
					type="file"
					{...register("photoPitche")}
				/>
			</fieldset>
		</>
	);
}
