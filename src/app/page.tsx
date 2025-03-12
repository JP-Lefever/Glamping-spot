import NavBar from "./components/navbar/navBar";
import { useState } from "react";

export default function Home() {
	const [user, setUser] = useState(false);
	return (
		<>
			<NavBar setUser={setUser} user={user} />
		</>
	);
}
