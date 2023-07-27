import { useEffect, useState } from "react";
import "./App.css";
import Back2TopPortal from "./components/Back2TopPortal";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	const [screenSize, setScreenSize] = useState("");
	const [selectedContent, setSelectedContent] = useState("about");

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) setScreenSize("sm");
			else if (window.innerWidth < 1024) setScreenSize("me");
			else if (window.innerWidth < 1400) setScreenSize("lg");
			else setScreenSize("xl");
		}

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const setNavbarActiveContent = (content: string) => {
		setSelectedContent(content);
	};

	return (
		<div>
			<NavBar
				selectedContent={selectedContent}
				onSelect={(content) => setSelectedContent(content)}
			/>
			<Hero
				screenSize={screenSize}
				onVisible={(content) => setNavbarActiveContent(content)}
			/>
			<Skills onVisible={(content) => setNavbarActiveContent(content)} />
			<Projects onVisible={(content) => setNavbarActiveContent(content)} />
			<Education
				screenSize={screenSize}
				onVisible={(content) => setNavbarActiveContent(content)}
			/>
			<Back2TopPortal onClick={() => setNavbarActiveContent("about")} />
			<Footer onVisible={(content) => setNavbarActiveContent(content)} />
		</div>
	);
}

export default App;
