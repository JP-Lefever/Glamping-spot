"use client";
import { useState } from "react";
import { Power } from "lucide-react";
import styles from "./navAdmin.module.css";
import Link from "next/link";
import { logout } from "../../modules/auth/authAction";
import { toast } from "react-toastify";

export default function NavAdmin() {
	const [openMenu, setOpenMenu] = useState(false);
	const handleClickMenuCamping = () => setOpenMenu(!openMenu);

	const [openMenuUser, setOpenMenuUser] = useState(false);
	const handleClickMenuUser = () => setOpenMenuUser(!openMenuUser);
	const handleLogout = async () => {
		const response = await logout();

		if (response?.status === "logOut") {
			toast.success(response.message);
			setTimeout(() => {
				location.reload();
			}, 1500);
		}
	};
	return (
		<>
			<nav className={styles.nav}>
				<button className={styles.logout} onClick={handleLogout} type="button">
					<Power size={32} />
				</button>
				<section>
					<button
						className={styles.button}
						type="button"
						onClick={handleClickMenuCamping}
					>
						Gestion des camping
					</button>
					{openMenu && (
						<ul className={styles.ul}>
							<Link href="/admin/addCamping" className={styles.addCamp}>
								Ajouter un camping
							</Link>
							<Link href="/admin/addMobilhome" className={styles.addCamp}>
								Ajouter un type d&apos;hébergement
							</Link>
							<Link href="/admin/addPitches" className={styles.addCamp}>
								Ajouter un type d&apos;emplacement
							</Link>
							<Link href="/admin/addInfra" className={styles.addCamp}>
								Ajouter une infrastructure
							</Link>
						</ul>
					)}
				</section>
				<section>
					<button
						className={styles.button}
						type="button"
						onClick={handleClickMenuUser}
					>
						Gestion des utilisateurs
					</button>
					{openMenuUser && (
						<ul className={styles.ul}>
							<li className={styles.li}>Comptes client</li>
							<li className={styles.li}>Messages</li>
							<li className={styles.li}>Mailing</li>
						</ul>
					)}
				</section>
			</nav>
		</>
	);
}
