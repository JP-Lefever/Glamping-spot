import Link from "next/link";
import styles from "./navBar.module.css";
import Image from "next/image";
import type { ConnectedProps } from "@/app/assets/lib/definitions";

export default function NavBar({ user, setUser }: ConnectedProps) {
	return (
		<>
			<nav className={styles.nav}>
				<Link href="/">
					<Image
						className={styles.logo}
						src="/images/logo-camp.jpg"
						alt="logo camping"
						width={1000}
						height={760}
					/>
				</Link>

				<ul className={styles.list}>
					<li>
						<Link className={styles.link} href="#">
							Glamping 5*
						</Link>
					</li>
					<li>
						<Link className={styles.link} href="#">
							Glamping 4*
						</Link>
					</li>
				</ul>
				{/* <LogButton user={user} setUser={setUser} /> */}
			</nav>
		</>
	);
}
