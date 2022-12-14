import '@fortawesome/fontawesome-free/js/all';
import "./styles/globalStyles.css";
import "./styles/buttons.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import "./styles/modal.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

document.querySelector("#app").insertAdjacentHTML(
  "beforeend", `
    ${Navbar()}
    ${Home()}
  `
);
