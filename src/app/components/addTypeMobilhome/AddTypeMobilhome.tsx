"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { ModelProps } from "../../assets/lib/definitions";
import styles from "./addTypeMobilhome.module.css";

export default function AddTypeMobilhome() {
	const { register, handleSubmit, reset } = useForm<ModelProps>();
	// const onSubmit: SubmitHandler<ModelProps> = async (infoMh) => {
	//   const response = await fetch(
	//     `${import.meta.env.VITE_API_URL}/camping/new/mobilhome`,
	//     {
	//       method: "POST",
	//       credentials: "include",
	//       headers: { "Content-Type": "application/json" },
	//       body: JSON.stringify(infoMh),
	//     },
	//   );
	//   const data = await response.json();
	//   if (response.ok) {
	//     toast.success(data.message);
	//     reset();
	//   }
	// };
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
