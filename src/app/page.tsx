import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default async function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<Main />

			<Footer />
		</>
	);
}
