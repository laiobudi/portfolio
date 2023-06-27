import { createBrowserRouter } from "react-router-dom";
import App from "./App";

interface Props {
	screenSize: string;
}

const router = createBrowserRouter([
	{
		index: true,
		element: <App />,
		// children: [
		// 	{ index: true, element: <App /> },
		// 	{ path: "/qualifications", element: <Education screenSize="lg" /> },
		// ],
	},
]);

export default router;
