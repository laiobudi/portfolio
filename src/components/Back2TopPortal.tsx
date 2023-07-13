import { PiControlBold } from "react-icons/pi";
import "./Back2TopPortal.css";

interface Props {
	onClick: () => void;
}

const Back2TopPortal = ({ onClick: onClick }: Props) => {
	return (
		<div className="back2top-portal-container">
			<a href="#hero" onClick={onClick}>
				<PiControlBold />
			</a>
		</div>
	);
};

export default Back2TopPortal;
