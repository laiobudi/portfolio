import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useScrollEffect from "../hooks/useScrollEffect";
import "./ContactForm.css";

interface Props {
	onVisible: (content: string) => void;
}

const ContactForm = ({ onVisible }: Props) => {
	const [valid, setValid] = useState(false);

	const form = useRef<HTMLFormElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	useScrollEffect(() => onVisible("contact"), sectionRef);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			if (!valid) {
				alert("Captcha failed.");
				return;
			}
			emailjs
				.sendForm(
					"service_psl2paw",
					"template_z8cpmwr",
					form.current,
					"CjuSNIEKnf0n_X1zy"
				)
				.then(
					(result) => {
						console.log(result.text);
						alert("You message was successfully sent. :)");
					},
					(error) => {
						console.log(error.text);
						alert("Captcha failed.");
					}
				);
		}

		form.current?.reset();
	};

	return (
		<div className="contact-form-container" id="contact" ref={sectionRef}>
			<h1>Contact me</h1>
			<form ref={form} onSubmit={(e) => sendEmail(e)}>
				<div className="horizontal-stack">
					<div className="form-group">
						<input
							name="sender_name"
							type="string"
							className="form-control"
							placeholder="Name"
							required
						></input>
					</div>
					<div className="form-group">
						<input
							name="sender_email"
							type="email"
							className="form-control"
							placeholder="Email"
							required
						></input>
					</div>
				</div>
				<div className="form-group">
					<input
						name="subject"
						type="string"
						className="form-control"
						placeholder="Subject"
						required
					></input>
				</div>
				<div className="form-group">
					<textarea
						name="message"
						className="form-control"
						rows={14}
						placeholder="Type your message here..."
					></textarea>
				</div>
				<div className="form-action">
					<ReCAPTCHA
						theme="dark"
						sitekey="6LfImlUnAAAAAC-Qyub6e2BVVZFz-kpKJxpO79s6"
						onChange={() => setValid(true)}
						onErrored={() => setValid(false)}
						onExpired={() => setValid(false)}
						className="g-recaptcha"
					/>
					<div className="form-btn">
						<button
							id="btn-submit"
							type="submit"
							className="btn btn-secondary btn-submit-email"
							disabled={!valid}
						>
							Submit
						</button>
						{!valid && <label>Please complete Captcha.</label>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
