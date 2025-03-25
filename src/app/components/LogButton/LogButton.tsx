import { Power, SquareMenu, UserRound } from "lucide-react";

import ModalLogin from "../../components/modalLogin/ModalLogin";
import styles from "./logButton.module.css";

export default function LogButton() {
	return (
		<>
			<section>
				{/* <button className={styles.button_logout} type="button">
					<SquareMenu size={48} color="#013134" />
				</button> */}

				<p className={styles.button}>
					<UserRound size={38} color="#013134" />
				</p>

				{/* {openBurgerMenu && (
					<ul className={styles.menu}>
						<NavLink
							onClick={() => setOpenBurgerMenu(false)}
							className={styles.link}
							to="/profil"
						>
							<UserRound className={styles.icon} />
							Mon profil
						</NavLink>
						<button className={styles.link} onClick={logout} type="button">
							<Power className={styles.icon} />
							Se deconnecter
						</button>
					</ul>
				)} */}
			</section>
		</>
	);
}
