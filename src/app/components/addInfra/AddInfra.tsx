"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { InfraProps } from "../../assets/lib/definitions";
import styles from "./addInfra.module.css";

export default function AddInfra() {
	const { register, handleSubmit, reset } = useForm<InfraProps>();
	// const onSubmit: SubmitHandler<InfraProps> = async (infoMh) => {
	//   const response = await fetch(
	//     `${import.meta.env.VITE_API_URL}/camping/new/infra`,
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
