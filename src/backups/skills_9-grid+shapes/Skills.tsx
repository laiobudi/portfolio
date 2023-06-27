import React from "react";
import "./Skills.css";
import reactIcon from "../assets/React-icon.svg";

const Skills = () => {
	return (
		<div className="skills-master-container">
			<img className="react-logo" src={reactIcon} alt="" />
			<div className="triangle"></div>
			<div className="circle circle-center"></div>
			<div className="circle circle-A"></div>
			<div className="circle circle-B"></div>
			<div className="circle circle-C"></div>
			<div className="circle circle-D"></div>
			<div className="skills-grid-container">
				<div className="skills-grid-item">
					<h2>Front-end Dev</h2>
					<ul>
						<li>React.js</li>
						<li>HTML 5</li>
						<li>CSS 3</li>
					</ul>
				</div>
				<div className="skills-grid-item">
					<h2>Collaboration</h2>
					<ul>
						<li>Git</li>
						<li>Confluence</li>
						<li>JIRA</li>
					</ul>
				</div>
				<div className="skills-grid-item">
					<h2>Tools</h2>
					<ul>
						<li>VS Code</li>
					</ul>
				</div>
				<div className="skills-grid-item"></div>
				<div className="skills-grid-item">
					<h1>My Skill Set</h1>
				</div>
				<div className="skills-grid-item"></div>
				<div className="skills-grid-item">
					<h2>Security</h2>
					<ul>
						<li>Penetration testing</li>
						<li>Traffic monitoring</li>
					</ul>
				</div>
				<div className="skills-grid-item">
					<h2>Think as a developer</h2>
					<ul>
						<li>Write clean, maintainable code</li>
						<li>Separate concerns through encapsualation</li>
					</ul>
				</div>
				<div className="skills-grid-item">
					<h2>I also have experience in...</h2>
					<ul>
						<li>Programming with Java and Python</li>
						<li>ML model training and optimization</li>
						<li>Building High Integrity systems with Spark and Ada</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
