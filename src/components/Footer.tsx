import ContactForm from "./ContactForm";
import "./Footer.css";
interface Props {
	onVisible: (content: string) => void;
}

const Footer = ({ onVisible }: Props) => {
	return (
		<div className="footer-container">
			<ContactForm onVisible={onVisible} />
			<div className="copyright">
				<span>Copyright &copy; Frank Leo 2023</span>
			</div>
		</div>
	);
};

export default Footer;
