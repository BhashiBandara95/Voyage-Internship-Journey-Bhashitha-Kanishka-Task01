/* --- App.jsx --- */

import BodyContent from "./Components/BodyContent/BodyContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {
	return (
		<>
			<div id="wrapper">
				<HeaderContent />
				<BodyContent>
					<button onClick="">Click Here</button>
					<a href="#">Google</a>
				</BodyContent>
				<BodyContent>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						libero, praesentium reiciendis temporibus nemo voluptatem, magni
						deleniti quisquam, debitis animi adipisci odit dolore vitae porro.
					</p>
				</BodyContent>
				<BodyContent />
				<BodyContent>
					<p>This is child components</p>
				</BodyContent>
			</div>
		</>
	);
}

export default App;

/* --- HeaderContent.jsx --- */

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

/* --- HeaderContent.css --- */

#navcontent {
	min-height: 12vh;
	background-color: black;
	display: flex;
	justify-content: center;
	padding: 20px;
}

/* --- MenuLink.jsx --- */

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

/* --- MenuLink.css --- */

.link {
	color: #d4d4d4;
	text-decoration: none;
	padding: 3px 16px;
	text-decoration: none;
}

.link:hover {
	background-color: #2d323b;
	padding: 3px 16px;
	text-decoration: none;
	border-radius: 13px;
}

/* --- BodyContent.jsx --- */

import React from "react";
import "./BodyContent.css";

const BodyContent = (props) => {
    return (
        <div className="content">
            <h3>Main Content</h3>
            {props.children}
        </div>
    );
};

export default BodyContent;

/* --- BodyContent.css --- */

.content {
	color: blue;
	margin-bottom: 3em;
}






