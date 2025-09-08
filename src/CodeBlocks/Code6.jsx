
/* --- App.jsx --- */

import Student from "./Components/Student";

function App() {
	return (
		<>
			<h1>Hello React App</h1>
			<Student />
			<Student />
			<Student />
			<Student />
		</>
	);
}

export default App;

/* --- Student.jsx --- */

import React from "react";

const Student = () => {
    return (
        <div>
            <h3>Student Details</h3>
            <ul>
                <li>Name: Bhashitha Kanishka</li>
                <li>Age: 25</li>
                <li>Grade: 12 </li>
            </ul>
        </div>
    );
};

export default Student;
