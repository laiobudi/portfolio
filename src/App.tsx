import React, { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Back2TopPortal from "./components/Back2TopPortal";
import { RiUpload2Line } from "react-icons/ri";
import Footer from "./components/Footer";

function App() {
	const [screenSize, setScreenSize] = useState("");

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

	return (
		<div>
			<NavBar />
			<Hero screenSize={screenSize} />
			<Skills />
			<Projects />
			<Education screenSize={screenSize} />
			<div className="back2top-portal-container">
				<a href="#navbar">
					<RiUpload2Line className="back2top-icon" />
				</a>
			</div>
			<Footer />
		</div>
	);
}

export default App;
