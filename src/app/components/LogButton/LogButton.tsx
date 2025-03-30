"use client";
import { Power, SquareMenu, UserRound } from "lucide-react";
import styles from "./logButton.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { logout } from "../../modules/auth/authAction";
import { toast } from "react-toastify";

export default function LogButton() {
	const { data: session } = useSession();
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
	const handleOpenBurgerMenu = () => {
		setOpenBurgerMenu(!openBurgerMenu);
	};

	const handleLogout = async () => {
		const response = await logout();

		console.log(response?.status);
		if (response?.status === "logOut") {
			toast.success(response.message);
			location.reload();
		}
	};

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
							href={`/profile/${session?.user.email}`}
						>
							<UserRound className={styles.icon} />
							Mon profil
						</Link>

						<button
							type="button"
							className={styles.link}
							onClick={handleLogout}
						>
							<Power className={styles.icon} />
							Se deconnecter
						</button>
					</ul>
				)}
			</section>
		</>
	);
}
