function App() {
	// create variables
	const firstName = "Bhashitha";
	const middleName = "Kanishka";
	const surName = "Bandara";
	const age = "27  ";
	const country = "Sri Lanka";

	// create function
	const getFullname = (f, m, s) => {
		return `${f} ${m} ${s}`;
	};
	return (
		<>
			<div className="cont">
				<h1>Employee Details</h1>
				<p>
					Full name: {firstName} {middleName} {surName}
				</p>
				<p> Full Name function : {getFullname("Nike", "Steve", "Jobs")} </p>
				<p>Age : {age}</p>
				<p>Country :{country}</p>
			</div>
		</>
	);
}

export default App;
