import "./Back2TopPortal.css";
import { RiUpload2Line } from "react-icons/ri";

interface Props {
	onClick: () => void;
}

const Back2TopPortal = ({ onClick: onClick }: Props) => {
	return (
		<div className="back2top-portal-container">
			<a href="#hero" onClick={() => onClick()}>
				<RiUpload2Line className="back2top-icon" />
			</a>
		</div>
	);
};

export default Back2TopPortal;
