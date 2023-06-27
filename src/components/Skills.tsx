import React from "react";
import "./Skills.css";
import reactIcon from "../assets/React-icon.svg";

const Skills = () => {
	return (
		<div className="skills-container" id="skills">
			<div className="skills-banner">
				<h1>My Skills</h1>
			</div>
			<div className="skill-items-container">
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>Front-end Dev</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>React.js</li>
							<li>HTML 5</li>
							<li>CSS 3</li>
						</ul>
					</div>
				</div>
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>Collaboration</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>Git</li>
							<li>Confluence</li>
							<li>JIRA</li>
						</ul>
					</div>
				</div>
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>Security</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>Penetration testing</li>
							<li>Traffic analysis</li>
						</ul>
					</div>
				</div>
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>Tools</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>VS Code </li>
							<li>WireShark </li>
							<li>Splunk</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="skill-items-container">
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>Think as a developer</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>Write clean, maintainable code</li>
							<li>Separate concerns through encapsualation</li>
						</ul>
					</div>
				</div>
				<div className="skill-item">
					<div className="skill-item-headline">
						<h2>I also have experience in...</h2>
					</div>
					<div className="skill-item-content">
						<ul>
							<li>Programming with Java and Python</li>
							<li>ML model training and optimization</li>
							<li>Building High Integrity systems with Spark and Ada</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
