import { fetchCamping4, fetchCamping5 } from "@/app/assets/data/campingData";
import styles from "./main.module.css";
import CardCamping from "../cardCamping/CardCamping";

export default async function Main() {
	const camping5 = await fetchCamping5();
	const camping4 = await fetchCamping4();
	return (
		<>
			<main>
				<section className={styles.camp}>
					<h2 className={styles.h2}>Découvrez nos Glamping 5*</h2>
					<h3 className={styles.h3}>De la nature & bien plus encore</h3>
					<article className={styles.article}>
						{camping5
							? camping5.map((c) => (
									<CardCamping key={c.id} campingDetail={c} />
								))
							: ""}
					</article>
				</section>
				<section className={styles.camp}>
					<h2 className={styles.h2}>Découvrez nos Glamping 5*</h2>
					<h3 className={styles.h3}>De la nature & bien plus encore</h3>
					<article className={styles.article}>
						{camping4
							? camping4.map((c) => (
									<CardCamping key={c.id} campingDetail={c} />
								))
							: ""}
					</article>
				</section>
			</main>
		</>
	);
}
