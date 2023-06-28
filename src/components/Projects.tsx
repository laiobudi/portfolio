import { BsBoxArrowInRight, BsGithub } from "react-icons/bs";
import ProjectGH from "../assets/proj_gh_outline.png";
import ProjectKV from "../assets/proj_kv_outline.png";
import ProjectMoshify from "../assets/proj_moshify_outline.png";
import "./Projects.css";
import { useRef } from "react";
import useScrollEffect from "../hooks/useScrollEffect";

interface Props {
	onVisible: (content: string) => void;
}

const Projects = ({ onVisible }: Props) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	useScrollEffect(() => onVisible("proj"), sectionRef);

	return (
		<div ref={sectionRef} className="projects-master-container" id="projects">
			<h1 className="projects-banner">My Projects</h1>
			<div className="project-item">
				{window.innerWidth <= 768 ? null : (
					<div className="project-img">
						<img src={ProjectKV} alt="" />
					</div>
				)}
				<div className="project-content">
					<div className="project-title">
						<h2>KV Audit: Project Violet</h2>
						<span className="project-badge project-badge-primary">
							uni project
						</span>
					</div>
					<span className="brief-description">
						An auditing app for the Australian Clinical Dosimetry Service (ACDS)
						to store and access data recorded from clinics, with some custom
						filtering and calculation logic built-in.
					</span>
					<ul>
						<span>My contribution:</span> Implement calculation logic for
						K-closed-cone data values in Python; hosting weekly meetings and
						maintain Confluence board.
					</ul>
					<div className="link-to-site">
						<a
							href="https://github.com/laiobudi/comp90082-project-violet"
							target="_blank"
						>
							Link to GitHub
						</a>
						<BsGithub />
					</div>
				</div>
				{/* conditionally render the image afterwards for mobile */}
				{window.innerWidth <= 768 && (
					<div className="project-img">
						<img src={ProjectKV} alt="" />
					</div>
				)}
			</div>

			<div className="project-item">
				<div className="project-content">
					<div className="project-title">
						<h2>GameHub</h2>
						<span className="project-badge project-badge-secondary">
							case study
						</span>
					</div>
					<span className="brief-description">
						A practice app built in React 18 utilizing the Chakra UI library for
						browsing games. TypeScript was used.
					</span>
					<ul>
						<li>Libraries & Frameworks: React 18, Chakra UI, RAWG API</li>
						<li>Language: TypeScript</li>
					</ul>
					<div className="link-to-site">
						<a href="https://game-hub-plum.vercel.app/" target="_blank">
							Link to Site
						</a>
						<BsBoxArrowInRight />
					</div>
				</div>
				<div className="project-img">
					<img src={ProjectGH} alt="" />
				</div>
			</div>

			<div className="project-item">
				{window.innerWidth <= 768 ? null : (
					<div className="project-img">
						<img src={ProjectMoshify} alt="" />
					</div>
				)}
				<div className="project-content">
					<div className="project-title">
						<h2>Moshify</h2>
						<span className="project-badge project-badge-secondary">
							case study
						</span>
					</div>
					<span className="brief-description">
						A practice app built on top of Bootstrap using Plain HTML/CSS with
						custom fonts and styles.
					</span>
					<ul>
						<li>Library: Bootstrap</li>
						<li>Languages: HTML, CSS, JavaScript</li>
					</ul>
					<div className="link-to-site">
						<a
							href="https://moshified-by-applepie.netlify.app/"
							target="_blank"
						>
							Link to Site
						</a>
						<BsBoxArrowInRight />
					</div>
				</div>
				{window.innerWidth <= 768 && (
					<div className="project-img">
						<img src={ProjectMoshify} alt="" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
