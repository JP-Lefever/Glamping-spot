import Link from "next/link";
import style from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={style.footerMain}>
			<section className={style.section}>
				<div className={style.footerRight}>
					<p>CONTACT US</p>
					<p>glamping@contact.com</p>
					<p>01 39 35 42 29</p>
				</div>
				<div className={style.footerMiddle}>
					<h3>GLAMPING CLUB</h3>
					<Image
						className={style.logoClass}
						src="/images/logo-camp.jpg"
						alt="Logo Boarder Line"
						width={280}
						height={160}
					/>
				</div>
				<div className={style.footerLeft}>
					<p>FOLLOW US</p>
					<div className={style.social}>
						<Image
							className={style.miniLogoAnimation}
							src="/images/logo-linkedin.png"
							alt="Logo LinkedIn"
							width={45}
							height={45}
						/>
						<Image
							className={style.miniLogoAnimation}
							src="/images/logo-instagram.png"
							alt="Logo Instagram"
							width={45}
							height={45}
						/>
						<Image
							className={style.miniLogoAnimation}
							src="/images/logo-youtube.png"
							alt="Logo YouTube"
							width={45}
							height={45}
						/>
					</div>
				</div>
			</section>
			<section className={style.footerBottom}>
				<p>Mentions légales et CGU • Données personnelles et cookies</p>
				<p>
					Images from&nbsp;
					<Link
						className={style.link}
						href="https://unsplash.com/fr/@foxandhyde"
						rel="noreferrer"
						target="_blank"
					>
						Unsplash
					</Link>
					&nbsp;,&nbsp;
					<Link
						target="_blank"
						rel="noreferrer"
						className={style.link}
						href={"https://fr.freepik.com/"}
					>
						Freep!k
					</Link>
					&nbsp;&&nbsp;
					<Link
						className={style.link}
						rel="noreferrer"
						href="https://fr.pngtree.com/"
						target="_blank"
					>
						PNG Tree
					</Link>
				</p>
			</section>
		</footer>
	);
}
