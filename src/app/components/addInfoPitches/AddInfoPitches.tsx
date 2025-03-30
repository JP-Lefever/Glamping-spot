import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CampingProps, PitchesProps } from "../../assets/lib/definitions";
import styles from "./addInfoPitches.module.css";

export default function AddInfoPitches({
	register,
	pitches,
	errors,
}: {
	register: UseFormRegister<CampingProps>;
	pitches: PitchesProps[] | undefined;
	errors: FieldErrors<CampingProps>;
}) {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}> Information emplacement</legend>
				<label className={styles.label} htmlFor="typePitche">
					Type d'emplacement
				</label>
				<div>
					<select
						className={styles.input}
						{...register("typePitche", { required: "Champ requis" })}
					>
						<option value={0}>Séléctionnez une type d'emplacement</option>
						{pitches
							? pitches.map((p) => (
									<option key={p.id} value={p.id}>
										{p.label}
									</option>
								))
							: ""}
					</select>
					<p className={styles.error}>{errors.typePitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="sizePitche">
					Taille (en m2)
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("sizePitche", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.sizePitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="pricePitche">
					Prix/nuit
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						step="0.01"
						{...register("pricePitche", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.pricePitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="maxPersPitche">
					Max personnes
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("maxPersPitche", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.maxPersPitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="openingPitche">
					Date d'ouverture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("openingPitche", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.openingPitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="closingPitche">
					Date de fermeture
				</label>
				<div>
					<input
						className={styles.input}
						type="date"
						{...register("closingPitche", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.closingPitche?.message}</p>
				</div>
				<label className={styles.label} htmlFor="electricity">
					Avec electricité
				</label>
				<div>
					<select
						className={styles.input}
						{...register("electricity", { required: "Champ requis" })}
					>
						<option>Veuillez séléctionner une option</option>
						<option value="true">Oui</option>
						<option value="false">Non</option>
					</select>
					<p className={styles.error}>{errors.electricity?.message}</p>
				</div>
				<label className={styles.label} htmlFor="power">
					Puissance (en A)
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("power", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.power?.message}</p>
				</div>
				<label className={styles.label} htmlFor="totalPitches">
					Nombre d'emplacement
				</label>
				<div>
					<input
						className={styles.input}
						type="number"
						{...register("totalPitches", { required: "Champ requis" })}
					/>
					<p className={styles.error}>{errors.totalPitches?.message}</p>
				</div>
				<label className={styles.label} htmlFor="photoPitche">
					Photo
				</label>
				<div>
					<input
						className={styles.input}
						type="file"
						{...register("photoPitche")}
					/>
					<p className={styles.error}>{errors.photoPitche?.message}</p>
				</div>
			</fieldset>
		</>
	);
}
