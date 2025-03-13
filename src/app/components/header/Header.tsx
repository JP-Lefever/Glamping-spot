import styles from "./header.module.css";

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<section className={styles.title}>
					<h1 className={styles.h1}>Glamping Spot</h1>
					<h2 className={styles.h2}>Et si on Glam &apos;der ensemble ?</h2>
				</section>
			</header>
		</>
	);
}
