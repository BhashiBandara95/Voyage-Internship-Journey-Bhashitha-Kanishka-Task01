function App() {
	// create variables
	const firstName = "Bhashitha";
	const middleName = "Kanishka";
	const surName = "Bandara";
	const age = "27  ";
	const country = "Sri Lanka";

	const lang = (
		<ul>
			<li> HTML </li>
			<li> CSS </li>
			<li> JS </li>
			<li> React </li>
		</ul>
	);

	// create function
	const getFullname = (f, m, s) => {
		return `${f} ${m} ${s}`;
	};

	// create array
	const arr = ["Apple", "Grapes", "Oranges"];

	// create object
	const pObj = {
		name: "John",
		age: 15,
	};
	return (
		<>
			<div className="cont">
				<h1>Employee Details</h1>
				<p>
					Full name: {firstName} {middleName} {surName}
				</p>
				<p> Full Name function : {getFullname("Nike", "Steve", "Jobs")} </p>
				<p>Age : {pObj.age}</p>
				<p>Country :{country}</p>
				<p>
					{" "}
					{firstName} likes to eat {arr[0]}
				</p>
				<p>Frontend languages: {lang} </p>
				<p>
					{" "}
					{pObj.name} is {pObj.age} years old.
				</p>
			</div>
		</>
	);
}

export default App;
