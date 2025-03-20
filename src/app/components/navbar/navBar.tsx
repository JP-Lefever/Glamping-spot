import Link from "next/link";
import styles from "./navBar.module.css";
import Image from "next/image";

export default function NavBar() {
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
