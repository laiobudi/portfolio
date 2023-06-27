import React from "react";
import HeroImage from "../assets/dummy.jpg";
import "./Hero.css";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

interface Props {
	screenSize: string;
}

const Hero = ({ screenSize }: Props) => {
	const intro =
		"I am a recent university graduate who bears the enthusiasm in creating different kinds of web applications. Through the process of coding I found myself incredibly happy as it is such a rewarding experience to create something out of nothing! Going into the industry, my goal is to learn new things everyday, and to become a proficient web developer who stands out amoung the majority.";

	console.log(screenSize);
	if (screenSize === "sm" || screenSize === "me")
		return (
			<div className="hero-container hero-container-sm" id="hero">
				<img src={HeroImage} alt="" className="hero-img-sm" />
				<div className="hero-text-container-sm">
					<h1 className="greeting-sm">Hi! I am Frank.</h1>
					<p className="intro-sm">{intro}</p>
				</div>
				<div className="contact-container">
					<div className="contact-item">
						<MdOutlineEmail className="contact-badge" />
						<a href="mailto: lrf261812@gmail.com">lrf261812@gmail.com</a>
					</div>
					<div className="contact-item">
						<AiFillLinkedin className="contact-badge" />
						<a href="https://www.linkedin.com/in/frank-leo-80490b1a5/">
							LinkedIn
						</a>
					</div>
					<div className="contact-item">
						<BsGithub
							className="contact-badge"
							style={{ transform: "scale(1.5)" }}
						/>
						<a href="https://github.com/laiobudi">/laiobudi</a>
					</div>
				</div>
			</div>
		);
	else if (screenSize === "lg")
		return (
			<div className="hero-container hero-container-lg" id="hero">
				<div className="hero-column-lg hero-text-container-lg">
					<h1 className="greeting-lg">Hi! I am Frank.</h1>
					<p className="intro-lg">{intro}</p>
					<div className="contact-container">
						<div className="contact-item">
							<MdOutlineEmail className="contact-badge" />
							<a href="mailto: lrf261812@gmail.com">lrf261812@gmail.com</a>
						</div>
						<div className="contact-item">
							<AiFillLinkedin className="contact-badge" />
							<a href="https://www.linkedin.com/in/frank-leo-80490b1a5/">
								LinkedIn
							</a>
						</div>
						<div className="contact-item">
							<BsGithub
								className="contact-badge"
								style={{ transform: "scale(1.15)" }}
							/>
							<a href="https://github.com/laiobudi">/laiobudi</a>
						</div>
					</div>
				</div>
				<div className="hero-column-lg hero-img-container-lg">
					<img src={HeroImage} alt="" className="hero-img-lg" id="hero" />
				</div>
			</div>
		);
	return (
		<div className="hero-container hero-container-xl" id="hero">
			<div className="hero-column-xl ">
				<div className="hero-text-container-xl">
					<h1 className="greeting-xl">Hi! I am Frank.</h1>
					<p className="intro-xl">{intro}</p>
					<div className="contact-container">
						<div className="contact-item">
							<AiFillLinkedin className="contact-badge" />
							<a href="https://www.linkedin.com/in/frank-leo-80490b1a5/">
								LinkedIn
							</a>
						</div>
						<div className="contact-item">
							<BsGithub
								className="contact-badge"
								style={{ transform: "scale(1.3)" }}
							/>
							<a href="https://github.com/laiobudi">/laiobudi</a>
						</div>
						<div className="contact-item">
							<MdOutlineEmail className="contact-badge" />
							<a href="mailto: lrf261812@gmail.com">lrf261812@gmail.com</a>
						</div>
					</div>
				</div>
			</div>
			<div className="hero-column-xl ">
				<div className="hero-img-container-xl">
					<img src={HeroImage} alt="" className="hero-img-xl" id="hero" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
