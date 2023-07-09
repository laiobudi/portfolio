import "./Education.css";
import testamurA from "../assets/Testamur.png";
import testamurB from "../assets/TestamurB.png";
import contentLead from "../assets/css-line.svg";
import { useRef } from "react";
import useScrollEffect from "../hooks/useScrollEffect";

interface Props {
	screenSize: string;
	onVisible: (content: string) => void;
}

const Education = ({ screenSize, onVisible }: Props) => {
	if (screenSize === "sm" || screenSize === "me")
		return (
			<div className="education-container-sm">
				<h1 className="education-intro-sm" id="educations">
					My Qualifications
				</h1>
				<div className="testamur-text-sm">
					<h2 className="testamur-title-sm">
						Master of Information Technology
					</h2>
					<ul className="testamur-description-sm">
						<li>At The University of Melbourne, Parkville</li>
						<li>From July 2020 to January 2022</li>
					</ul>
				</div>
				<img src={testamurA} alt="" className="testamur-img-sm" />

				<div className="testamur-text-sm">
					<h2 className="testamur-title-sm">
						Bachelor of Information Technology
					</h2>
					<ul className="testamur-description-sm">
						<li>At Deakin University, Burwood</li>
						<li>From July 2019 to July 2020</li>
					</ul>
				</div>
				<img src={testamurB} alt="" className="testamur-img-sm" />
			</div>
		);

	const sectionRef = useRef<HTMLDivElement>(null);
	useScrollEffect(() => onVisible("quali"), sectionRef);

	return (
		<div ref={sectionRef} className="education-container-lg" id="educations">
			<div className="education-column column-A-lg">
				<div className="testamur-text-lg">
					<h2 className="testamur-title-lg">
						Master of Information Technology
					</h2>
					<ul className="testamur-description-lg">
						<li>At The University of Melbourne, Parkville</li>
						<li>From July 2020 to January 2022</li>
					</ul>
				</div>
				<div className="testamur-img-container-lg">
					<img src={testamurA} alt="" className="testamur-img-lg" />
				</div>
			</div>
			<div className="column-center-lg">
				<img src={contentLead} alt="" className="content-lead-upper" />
				<img src={contentLead} alt="" className="content-lead-lower" />
				<div className="education-intro-container-lg">
					<h1 className="education-intro-lg">My Qualifications</h1>
				</div>
			</div>
			<div className="education-column column-B-lg">
				<div className="testamur-img-container-lg">
					<img src={testamurB} alt="" className="testamur-img-lg" />
				</div>
				<div className="testamur-text-lg">
					<h2 className="testamur-title-lg">
						Bachelor of Information Technology
					</h2>
					<ul className="testamur-description-lg">
						<li>At Deakin University, Burwood</li>
						<li>From July 2019 to July 2020</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Education;

// *** Deprecated lg layout rendering *** //
//
// else if (screenSize === "lg")
// 	return (
// 		<div className="education-container-lg">
// 			<div className="education-column column-A-lg">
// 				<div className="testamur-text-lg">
// 					<h2 className="testamur-title-lg">
// 						Master of Information Technology
// 					</h2>
// 					<ul className="testamur-description-lg">
// 						<li>At The University of Melbourne, Parkville</li>
// 						<li>From July 2020 to January 2022</li>
// 					</ul>
// 				</div>
// 				<div className="testamur-img-container-lg">
// 					<img src={testamurA} alt="" className="testamur-img-lg" />
// 				</div>
// 			</div>
// 			<div className="column-center-lg">
// 				<div className="education-intro-container-lg">
// 					<h1 className="education-intro-lg" id="educations">
// 						My Qulifications
// 					</h1>
// 				</div>
// 			</div>
// 			<div className="education-column column-B-lg">
// 				<div className="testamur-img-container-lg-B">
// 					<img src={testamurB} alt="" className="testamur-img-lg" />
// 				</div>
// 				<div className="testamur-text-lg">
// 					<h2 className="testamur-title-lg">
// 						Bachelor of Information Technology
// 					</h2>
// 					<ul className="testamur-description-lg">
// 						<li>At Deakin University, Burwood</li>
// 						<li>From July 2019 to July 2020</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
