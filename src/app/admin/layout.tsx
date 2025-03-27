"use client";
import { useSession } from "next-auth/react";
import NavAdmin from "../components/navAdmin/NavAdmin";
import "../globals.css";
import styles from "./layout.module.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data: session } = useSession();
	useEffect(() => {
		if (session?.user.role !== "admin") {
			redirect("/");
		}
	});
	return (
		<>
			<section className={styles.section}>
				<NavAdmin />
				<main>{children}</main>
			</section>
		</>
	);
}
