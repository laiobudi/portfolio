import React from "react";
import "./Skills.css";
import reactIcon from "../assets/React-icon.svg";

const Skills = () => {
	return (
		<div className="skills-grid-container">
			<div className="skills-grid">
				<div className="skills-grid-item item-A">
					<h2>Front-end Dev</h2>
					<ul>
						<li>React.js</li>
						<li>HTML 5</li>
						<li>CSS 3</li>
					</ul>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-B">
					<h2>Collaboration</h2>
					<ul>
						<li>Git</li>
						<li>Confluence</li>
						<li>JIRA</li>
					</ul>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-C">
					<h2>Tools</h2>
					<ul>
						<li>VS Code</li>
					</ul>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-D"></div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-E">
					<h1>My Skill Set</h1>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-F"></div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-G">
					<h2>Security</h2>
					<ul>
						<li>Penetration testing</li>
						<li>Traffic monitoring</li>
					</ul>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-H">
					<h2>Think as a developer</h2>
					<ul>
						<li>Write clean, maintainable code</li>
						<li>Separate concerns through encapsualation</li>
					</ul>
				</div>
			</div>
			<div className="skills-grid">
				<div className="skills-grid-item item-I">
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
