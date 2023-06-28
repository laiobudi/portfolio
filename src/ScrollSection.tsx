import { useEffect, useRef } from "react";
import useScrollEffect from "./hooks/useScrollEffect";

interface Props {
	onVisible: (content: string) => void;
}

const ScrollSection = ({ onVisible }: Props) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	useScrollEffect(() => onVisible("section visible"), sectionRef);

	return (
		<div ref={sectionRef} style={{ height: "50vh", border: "1px solid red" }}>
			Target Section
		</div>
	);
};

export default ScrollSection;
