import { MapPinHouse } from "lucide-react";
import { Phone } from "lucide-react";
import { AtSign } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import styles from "./page.module.css";
import { fetchDetails } from "@/app/assets/data/campingData";
import Image from "next/image";

export default async function DetailPage({
	params,
}: { params: { id: string } }) {
	const infoCamping = await fetchDetails(params.id);
	console.info(infoCamping);

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
						<Image
							className={styles.imgHeader}
							src={`/uploads/${infoCamping.photo}`}
							alt={infoCamping.label}
							width={1000}
							height={760}
						/>
					</article>
					<h2 className={styles.main_h2}>Camping club {infoCamping.label}</h2>
					<h3 className={styles.main_h3}>Destination {infoCamping.city}</h3>
					<div className={styles.info_generales}>
						<article className={styles.article_presentation}>
							<h2 className={styles.h2_info}>Informations générales</h2>
							<div className={styles.div_info}>
								<MapPinHouse color="#fc841c" size={32} />
								<div>
									<p>{infoCamping.adress}</p>
									<p>{infoCamping.city}</p>
									<p>{infoCamping.zipcode}</p>
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
							<Image
								className={styles.imgMh}
								src={`/uploads/${infoCamping.photomh}`}
								alt={infoCamping.typemh}
								width={1000}
								height={760}
							/>
							<div className={styles.info_cottage}>
								<div className={styles.divButton}>
									<h3>Découvrez nos tous nouveaux hébergement</h3>
									<p>{infoCamping.typemh}</p>
									<p>{infoCamping.sizemh} m2</p>
									<p>Jusqu'à {infoCamping.maxpersmh} personnes</p>
									<p>
										A partir de
										<strong> {infoCamping.pricepernight} € / nuit</strong>
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
							<Image
								className={styles.imgPitche}
								src={`/uploads/${infoCamping.photopitch}`}
								alt={infoCamping.typepitch}
								width={1000}
								height={760}
							/>
							<div className={styles.info_pitches}>
								<div className={styles.divButton}>
									<h3>Des emplacement spacieux et ensolleillé</h3>
									<p>Taille : {infoCamping.sizepitch} m2</p>
									<p>Des emplacements electrifiés</p>
									<p>Jusqu'à {infoCamping.maxperspitch} personnes</p>
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
							<Image
								className={styles.imgInfra}
								src={`/uploads/${infoCamping.photoinfra}`}
								alt={infoCamping.labelinfra}
								width={1000}
								height={760}
							/>
							<div className={styles.info_infra}>
								<div className={styles.divButton}>
									<h3>Venez profitez nos infrastructures</h3>
									<p>{infoCamping.labelinfra}</p>
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
