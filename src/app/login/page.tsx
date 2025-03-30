import ModalLogin from "../components/modalLogin/ModalLogin";
import styles from "./page.module.css";

export default function login() {
	return (
		<>
			<section className={styles.section}>
				<ModalLogin />
			</section>
		</>
	);
}
