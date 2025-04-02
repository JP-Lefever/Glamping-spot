"use client";
import { FilePenLine } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserProps } from "../../assets/lib/definitions";
import styles from "./profilPage.module.css";
import { updateUser } from "@/app/modules/register/registerAction";
import Link from "next/link";
import Image from "next/image";

export default function ProfilPage({
	userInfo,
}: { userInfo: UserProps | undefined }) {
	const formatedDate = (date: Date) => {
		const newDate = new Date(date);
		const year = newDate.getFullYear();
		const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
		const day = newDate.getDate().toString().padStart(2, "0");

		return `${day}/${month}/${year}`;
	};

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<UserProps>({
		defaultValues: {
			firstname: userInfo?.firstname,
			lastname: userInfo?.firstname,
			city: userInfo?.city,

			zipcode: userInfo?.zipcode,
			email: userInfo?.email,
			tel: userInfo?.tel,
		},
	});

	const [editForm, setEditForm] = useState(true);
	const handleClickEdit = () => setEditForm(!editForm);

	const onSubmit = async (userUpdate: UserProps) => {
		const response = await updateUser(userUpdate);

		if (response?.success) {
			toast.success(response.message);
			setEditForm(true);
		}
		console.log(response);
	};

	return (
		<>
			<section className={styles.section}>
				<div className={styles.div}>
					<Link className={styles.linkLogo} href="/">
						<Image
							className={styles.logo}
							src="/images/logo-camp.jpg"
							alt="Logo camping"
							width={1000}
							height={760}
						/>
					</Link>
					<button
						className={styles.editButton}
						onClick={handleClickEdit}
						type="button"
					>
						<FilePenLine color="#013134" size={42} />
					</button>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<h2 className={styles.h2}>Mes informations personnelles</h2>
						<div>
							<label htmlFor="firstName" className={styles.label}>
								Prénom
							</label>
							<input
								type="text"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								{...register("firstname", {
									minLength: {
										value: 2,
										message: "Le prénom doit contenir au minimum 2 caractères",
									},
								})}
							/>
							{errors.firstname && (
								<p className={styles.role}>
									{errors.firstname?.message as ReactNode}
								</p>
							)}
						</div>
						<div>
							<label htmlFor="lastName" className={styles.label}>
								Nom
							</label>
							<input
								type="text"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								{...register("lastname", {
									minLength: {
										value: 2,
										message: "Le nom doit contenir au minimum 2 caractères",
									},
								})}
							/>
							{errors.lastname && (
								<p className={styles.role}>
									{errors.lastname?.message as ReactNode}
								</p>
							)}
						</div>
						<div>
							<label htmlFor="email" className={styles.label}>
								Email
							</label>
							<input
								type="email"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								{...register("email", {
									pattern: {
										value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
										message: "L'email n'est pas valide",
									},
								})}
							/>
							{errors.email?.message && (
								<p className={styles.role}>
									{errors.email.message as ReactNode}
								</p>
							)}
						</div>

						<div>
							<label htmlFor="birthdate" className={styles.label}>
								Date de naissance
							</label>
							<input
								type="text"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								defaultValue={formatedDate(userInfo?.birthdate as Date)}
								{...register("birthdate", {})}
							/>
							{errors.birthdate && (
								<p className={styles.role}>
									{errors.birthdate.message as ReactNode}
								</p>
							)}
						</div>
						<div>
							<label htmlFor="city" className={styles.label}>
								Ville
							</label>
							<input
								type="text"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								{...register("city")}
							/>
						</div>
						<div>
							<label htmlFor="zipcode" className={styles.label}>
								Code postal
							</label>
							<input
								type="number"
								readOnly={editForm}
								disabled={editForm}
								className={styles.input}
								{...register("zipcode")}
							/>
						</div>
						<div>
							<label htmlFor="tel" className={styles.label}>
								Téléphone
							</label>
							<input
								type="tel"
								className={styles.input}
								readOnly={editForm}
								disabled={editForm}
								{...register("tel")}
							/>
							{errors.tel && (
								<p className={styles.role}>{errors.tel.message as ReactNode}</p>
							)}
						</div>
						{!editForm && (
							<button className={styles.button} type={"submit"}>
								Valider
							</button>
						)}
					</form>
				</div>
			</section>
		</>
	);
}
