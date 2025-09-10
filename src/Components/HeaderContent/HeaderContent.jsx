import React from "react";
import "./HeaderContent.css";
import MenuLink from "../MenuLink/MenuLink";
import logo from "../../assets/react.svg"; // import React Logo

const HeaderContent = () => {
	return (
		<div id="navcontent">
			<img src="vite.svg" alt="Vite Logo" /> {/*access to Vite Logo */}
			<img src={logo} alt="React Logo" />
		</div>
	);
};

export default HeaderContent;
