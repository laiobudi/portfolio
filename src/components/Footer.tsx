import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<p className="education-annotation">
				*Link to {<a href="https://www.myequals.edu.au/">My eQuals</a>} provided
				upon request
			</p>
			<div className="copyright">
				<span>Copyright &copy; Frank Leo 2023</span>
			</div>
		</div>
	);
};

export default Footer;
