import { Power, SquareMenu, UserRound } from "lucide-react";

import styles from "./logButton.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { logout } from "../../modules/auth/authAction";

export default function LogButton() {
	const { data: session, update } = useSession();
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
	const handleOpenBurgerMenu = () => {
		setOpenBurgerMenu(!openBurgerMenu);
	};
	// const handleLogout = async () => {
	// 	await logout();
	// 	await update();
	// 	if(!session?.user){
	// 		location.reload()
	// 	}
	// };

	return (
		<>
			<section>
				{session?.user.role === "user" && (
					<button
						className={styles.button_logout}
						type="button"
						onClick={handleOpenBurgerMenu}
					>
						<SquareMenu size={48} color="#013134" />
					</button>
				)}
				{!session?.user.role && (
					<button type="button" className={styles.button}>
						<Link href={"/login"}>
							<UserRound size={38} color="#013134" />
						</Link>
					</button>
				)}

				{openBurgerMenu && (
					<ul className={styles.menu}>
						<Link
							onClick={() => setOpenBurgerMenu(false)}
							className={styles.link}
							href="/profil"
						>
							<UserRound className={styles.icon} />
							Mon profil
						</Link>
						<form action={logout}>
							<button type="submit" className={styles.link}>
								<Power className={styles.icon} />
								Se deconnecter
							</button>
						</form>
					</ul>
				)}
			</section>
		</>
	);
}
