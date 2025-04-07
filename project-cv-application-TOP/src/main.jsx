import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Questions } from "./components/questions";
import "./style.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Questions />
	</StrictMode>
);
