"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { CampingProps } from "../../assets/lib/definitions";
import AddInfoCamping from "../addInfoCamping/AddInfoCamping";
import AddInfoIngra from "../addInfoInfra/AddInfoInfra";
import AddInfoMh from "../addInfoMh/AddInfoMh";
import AddInfoPitches from "../addInfoPitches/AddInfoPitches";
import styles from "./addCamping.module.css";

export default function FormAddCamping() {
	const { register, handleSubmit, watch, reset } = useForm<CampingProps>();

	const infraId = watch("infra");
	const modelId = watch("modelMh");
	const pitcheId = watch("typePitche");

	// const onSubmit: SubmitHandler<CampingProps> = async (data) => {
	//   const { photoCamp, photoMh, photoPitche, photoInfra, ...rest } = data;

	//   const formData = new FormData();
	//   formData.append("photoCamp", photoCamp[0]);
	//   formData.append("photoMh", photoMh[0]);
	//   formData.append("photoPitche", photoPitche[0]);
	//   formData.append("photoInfra", photoInfra[0]);
	//   formData.append("modelId", modelId);
	//   formData.append("infraId", infraId);
	//   formData.append("pitcheId", pitcheId);
	//   formData.append("data", JSON.stringify(rest));
	//   const response = await fetch(
	//     `${import.meta.env.VITE_API_URL}/camping/new`,
	//     {
	//       method: "POST",
	//       body: formData,
	//     },
	//   );
	//   if (response.ok) {
	//     const data = await response.json();
	//     toast.success(data.message);
	//     reset();
	//   }
	// };

	return (
		<>
			<section className={styles.add_form}>
				<form>
					<AddInfoCamping register={register} />
					<AddInfoMh register={register} />
					<AddInfoPitches register={register} />
					<AddInfoIngra register={register} />
					<button className={styles.button} type="submit">
						Je valide les Informations
					</button>
				</form>
			</section>
		</>
	);
}
