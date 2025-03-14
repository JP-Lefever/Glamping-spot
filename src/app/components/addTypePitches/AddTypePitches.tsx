"use client";

import { useForm } from "react-hook-form";
import type { PitchesProps } from "../../assets/lib/definitions";
import styles from "./addTypePitches.module.css";
import { addPitchesType } from "@/app/modules/adminCamping/adminCampingAction";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function AddTypePitches() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<PitchesProps>();

	const onSubmit = async (data: PitchesProps) => {
		const response = await addPitchesType(data);

		if (response.success) {
			toast.success(response.message);
		}
		reset();
	};

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={6000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Ajouter un Emplacement</legend>
					<label className={styles.label} htmlFor="label">
						Nom de l'emplacement
					</label>
					<input
						className={styles.inpit}
						type="text"
						{...register("labelPitches", { required: "champs requis" })}
					/>
					<p>{errors.labelPitches?.message}</p>
					<button className={styles.button} type="submit">
						Ajouter un emplacement
					</button>
				</fieldset>
			</form>
		</>
	);
}
