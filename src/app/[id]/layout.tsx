import NavBar from "../components/navbar/navBar";
import Footer from "../components/footer/footer";

export default async function Home({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
