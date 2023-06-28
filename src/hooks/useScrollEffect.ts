import { useEffect } from "react";

// callback onVisible() when 'threshold' part of the page is in view

const useScrollEffect = (
	onVisible: () => void,
	sectionRef: React.RefObject<HTMLDivElement>
) =>
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onVisible(); // Call the provided callback when the section becomes visible
				}
			},
			{ threshold: 0.3 } // Adjust the threshold as per your requirement
		);
		const currentRef = sectionRef.current;
		if (currentRef) observer.observe(sectionRef.current);

		return () => {
			if (currentRef) observer.unobserve(sectionRef.current);
		};
	}, [onVisible]);

export default useScrollEffect;
