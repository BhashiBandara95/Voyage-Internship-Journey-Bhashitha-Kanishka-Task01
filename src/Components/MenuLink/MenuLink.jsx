import React from "react";
import "./MenuLink.css";

const MenuLink = (props) => {
	return (
		<>
			<a href={props.url} className="link">
				{props.linkname}
			</a>
		</>
	);
};

export default MenuLink;
