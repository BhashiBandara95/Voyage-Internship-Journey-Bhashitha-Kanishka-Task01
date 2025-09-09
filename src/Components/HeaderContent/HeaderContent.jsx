import React from "react";
import "./HeaderContent.css";
import MenuLink from "../MenuLink/MenuLink";
import logo from "../../assets/react.svg";

const HeaderContent = () => {
	return (
		<div id="navcontent">
			<a href="https://react.dev">
				<img src={logo} alt="React" />
			</a>
			<MenuLink linkname="Home" url="#home" />
			<MenuLink linkname="About" url="#about" />
			<MenuLink linkname="Contact" url="#contact" />
			<MenuLink linkname="Login" url="#login" />
		</div>
	);
};

export default HeaderContent;
