import ProfilPage from "../../components/profilPage/ProfilPage";
import { fetchUserInfo } from "@/app/assets/data/userData";

export default async function profile(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;

	console.log(params.id);
	const userInfo = await fetchUserInfo(decodeURIComponent(params.id));
	console.log(userInfo);
	return (
		<>
			<ProfilPage userInfo={userInfo} />
		</>
	);
}
