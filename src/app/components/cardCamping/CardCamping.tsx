import type {
	CampingDetailsProps,
	CampingInfo,
	CampingProps,
} from "@/app/assets/lib/definitions";
import styles from "./cardCamping.module.css";
import Image from "next/image";

export default function CardCamping({
	campingDetail,
}: { campingDetail: CampingDetailsProps }) {
	return (
		<>
			<section className={styles.card}>
				<Image
					className={styles.img}
					src={`/uploads/${campingDetail.photo}`}
					alt={campingDetail.label}
					width={1000}
					height={760}
				/>

				<h2>{campingDetail.label}</h2>
				<p>{campingDetail.city}</p>
			</section>
		</>
	);
}
