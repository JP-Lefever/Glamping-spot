import NavBar from "./components/navbar/navBar";
import { useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

export default function Home() {
	const [user, setUser] = useState(false);
	return (
		<>
			<NavBar setUser={setUser} user={user} />
			<Header />
			<Footer />
		</>
	);
}
