import NavAdmin from "../components/navAdmin/NavAdmin";
import "../globals.css";
import styles from "./layout.module.css";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<section className={styles.section}>
				<NavAdmin />
				<main>{children}</main>
			</section>
		</>
	);
}
