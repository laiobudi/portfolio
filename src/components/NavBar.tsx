import icon from "../assets/icon.png";
import "./NavBar.css";

interface Props {
	selectedContent: string;
	onSelect: (content: string) => void;
}

const NavBar = ({ selectedContent, onSelect }: Props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={icon} alt="" className="nav-icon" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className={`nav-link ${
									selectedContent === "about" && "active"
								}`}
								onClick={() => onSelect("about")}
								href="#hero"
							>
								About Me
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${
									selectedContent === "skill" && "active"
								}`}
								onClick={() => onSelect("skill")}
								aria-current="page"
								href="#skills"
							>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${selectedContent === "proj" && "active"}`}
								onClick={() => onSelect("proj")}
								aria-current="page"
								href="#projects"
							>
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${
									selectedContent === "quali" && "active"
								}`}
								onClick={() => onSelect("quali")}
								href="#educations"
							>
								Qualifications
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
