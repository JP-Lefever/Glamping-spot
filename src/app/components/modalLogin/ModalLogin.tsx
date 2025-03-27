"use client";

import { useEffect, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { UserProps } from "../../assets/lib/definitions";
import styles from "./modalLogin.module.css";
import Link from "next/link";
import { authenticate } from "@/app/modules/auth/authAction";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ModalLogin() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<UserProps>();

	const { data: session } = useSession();

	const onSubmit = async (user: UserProps) => {
		const response = await authenticate(user);

		if (response?.status === "authenticated") {
			location.reload();
		}
	};
	useEffect(() => {
		if (session?.user.role === "admin") {
			redirect("/admin");
		}
		if (session?.user.role === "user") {
			redirect("/");
		}
	}, [session]);

	return (
		<>
			<section className={styles.section}>
				<Link className={styles.linkLogo} href="/">
					<Image
						className={styles.logo}
						src="/images/logo-camp.jpg"
						alt="Logo camping"
						width={1000}
						height={760}
					/>
				</Link>
				<div className={styles.div}>
					<h2 className={styles.h2}>Login</h2>

					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<div>
							<label htmlFor="email" className={styles.label}>
								Email
							</label>
							<input
								type="email"
								className={styles.input}
								placeholder="your@email.com"
								{...register("email", {
									required: "L'email est obligatoire",
									pattern: {
										value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
										message: "L'email n'est pas valide",
									},
								})}
							/>
							{errors.email?.message && (
								<p className="text-red-500 text-sm mt-2">
									{errors.email.message as ReactNode}
								</p>
							)}
						</div>

						<div>
							<label htmlFor="password" className={styles.label}>
								Password
							</label>
							<input
								type="password"
								className={styles.input}
								placeholder="••••••••"
								{...register("password", {
									required: "Le mot de passe est obligatoire",
									pattern: {
										value:
											/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
										message:
											"Le mot de passe doit contenir entre 8 et 16 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
									},
								})}
							/>
							{errors.password?.message && (
								<p className={styles.role}>
									{errors.password.message as ReactNode}
								</p>
							)}
						</div>

						<button type="submit" className={styles.button}>
							Login
						</button>
						<Link className={styles.link} href="/register">
							Créer un compte
						</Link>
					</form>
				</div>
			</section>
		</>
	);
}
