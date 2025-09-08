/* --- App.jsx --- */

import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {
	return (
		<>
			<div id="wrapper">
				<HeaderContent />

				<BodyContent />

				<FooterContent />
			</div>
		</>
	);
}

export default App;

/* --- BodyContent.jsx --- */

import React from "react";
import "./BodyContent.css";

const BodyContent = () => {
    return <div id="bodycontent">BodyContent</div>;
};

export default BodyContent;

/* --- BodyContent.css--- */

#bodycontent {
	min-height: 60vh;
	background-color: #d2ebe4;
}

// ----------------------------------------------------------- //



/* --- FooterContent.jsx --- */

import React from "react";
import "./FooterContent.css";

const FooterContent = () => {
    return <div id="footercontent">FooterContent</div>;
};

export default FooterContent;

/* --- FooterContent.css--- */

#footercontent {
	min-height: 20vh;
	background-color: #00604e;
}


// ----------------------------------------------------------- //

/* --- HeaderContent.jsx --- */

import React from "react";
import "./HeaderContent.css";

const HeaderContent = () => {
    return <div id="headercontent">HeaderContent</div>;
};

export default HeaderContent;

/* --- HeaderContent.css--- */
#headercontent {
	min-height: 20vh;
	background-color: #2dffd6;
}
