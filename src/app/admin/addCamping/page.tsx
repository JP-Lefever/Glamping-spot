import AddCamping from "@/app/components/addCamping/AddCamping";
import {
	fetchInfra,
	fetchModel,
	fetchPitch,
} from "@/app/assets/data/campingData";

export default async function AddCampingPage() {
	const pitches = await fetchPitch();
	const infra = await fetchInfra();
	const model = await fetchModel();
	return (
		<>
			<AddCamping pitches={pitches} infra={infra} model={model} />
		</>
	);
}
