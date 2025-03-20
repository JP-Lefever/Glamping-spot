import { MapPinHouse } from "lucide-react";
import { Phone } from "lucide-react";
import { AtSign } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import styles from "./page.module.css";
import { fetchDetails } from "@/app/assets/data/campingData";

export default async function DetailPage({
	params,
}: { params: { id: string } }) {
	const infoCamping = await fetchDetails(params.id);

	const formatedDate = (date: Date) => {
		const newDate = new Date(date);
		const year = newDate.getFullYear();
		const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
		const day = newDate.getDate().toString().padStart(2, "0");

		return `${day}/${month}/${year}`;
	};

	return (
		<>
			{infoCamping && (
				<section className={styles.section}>
					<article className={styles.header}>
						{/* <img
							className={styles.imgHeader}
							src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoCamp}`}
							alt={infoCamping.campingName}
						/> */}
					</article>
					<h2 className={styles.main_h2}>
						Camping club {infoCamping.campingName}
					</h2>
					<h3 className={styles.main_h3}>Destination {infoCamping.city}</h3>
					<div className={styles.info_generales}>
						<article className={styles.article_presentation}>
							<h2 className={styles.h2_info}>Informations générales</h2>
							<div className={styles.div_info}>
								<MapPinHouse color="#fc841c" size={32} />
								<div>
									<p>{infoCamping.adress}</p>
									<p>{infoCamping.city}</p>
									<p>{infoCamping.zipCode}</p>
								</div>
							</div>
							<div className={styles.div_info}>
								<Phone color="#fc841c" size={32} />
								<p>{infoCamping.tel}</p>
							</div>
							<div className={styles.div_info}>
								<AtSign color="#fc841c" size={32} />
								<p>{infoCamping.email}</p>
							</div>
							<div className={styles.div_info}>
								<CalendarCheck color="#fc841c" size={32} />
								<div>
									<p>{formatedDate(infoCamping.opening)}</p>
									<p>{formatedDate(infoCamping.closing)}</p>
								</div>
							</div>
						</article>
						<article className={styles.article_desc}>
							<h2 className={styles.h2_info}>Description</h2>
							<p>{infoCamping.description}</p>
						</article>
					</div>
					<article className={styles.article}>
						<h2 className={styles.h2}>Nos Cottages</h2>
						<div className={styles.cottage}>
							<img
								className={styles.imgMh}
								src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoMh}`}
								alt={infoCamping.modelMh}
							/>
							<div className={styles.info_cottage}>
								<div className={styles.divButton}>
									<h3>Découvrez nos tous nouveaux mobilhomes</h3>
									<p>{infoCamping.modelMh}</p>
									<p>{infoCamping.sizeMh}</p>
									<p>Jusqu'à {infoCamping.max_pers} personnes</p>
									<p>
										A partir de
										<strong> {infoCamping.pricePerNight} € / nuit</strong>
									</p>
								</div>
								<button className={styles.button} type="button">
									Réserver un de nos cottage
								</button>
							</div>
						</div>
					</article>
					<article className={styles.article}>
						<h2 className={styles.h2}>Nos emplacements</h2>
						<div className={styles.pitches}>
							<img
								className={styles.imgPitche}
								src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoPitche}`}
								alt={infoCamping.typePitche}
							/>
							<div className={styles.info_pitches}>
								<div className={styles.divButton}>
									<h3>Des emplacement spacieux et ensolleillé</h3>
									<p>Taille : {infoCamping.size} m2</p>
									<p>Des emplacements electrifiés</p>
									<p>Jusqu'à {infoCamping.maxPersPitche} personnes</p>
									<p>
										A partir de
										<strong> {infoCamping.price_night} € / nuit</strong>
									</p>
								</div>
								<button className={styles.button} type="button">
									Réserver un nos emplacements
								</button>
							</div>
						</div>
					</article>
					<article className={styles.article}>
						<h2 className={styles.h2}>Nos infrastructures</h2>
						<div className={styles.infra}>
							<img
								className={styles.imgInfra}
								src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoInfra}`}
								alt={infoCamping.typePitche}
							/>
							<div className={styles.info_infra}>
								<div className={styles.divButton}>
									<h3>Venez profitez nos infrastructures</h3>
									<p>{infoCamping.infra}</p>
									<p>{infoCamping.infra_name}</p>
								</div>
								<button className={styles.button} type="button">
									Voir toutes nos infrastructures
								</button>
							</div>
						</div>
					</article>
				</section>
			)}
		</>
	);
}
