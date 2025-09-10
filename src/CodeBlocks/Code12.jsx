import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {
	// Normal Function
	function hello1(e) {
		// event object
		console.log("Hello 1", e.target);
	}

	// Arrow function

	const hello2 = (e) => {
		// event object
		console.log("Hello 2", e);
	};
	// parameterized function

	function hello3(name, e) {
		console.log("Hello 3 " + name, e);
	}

	// Arrow function

	const hello4 = (name, e) => {
		console.log("Hello 4 " + name, e);
	};

	return (
		<>
			<div id="wrapper">
				<button onClick={hello1}>Click1</button>
				<button onClick={hello2}>Click2</button>

				<button
					onClick={(e) => {
						// access to event object
						hello3("Bhashitha", e.target);
					}} // wrap from anonymous function
				>
					Click3
				</button>
				<button
					onClick={(e) => {
						hello4("Kasun", e);
					}}
				>
					Click4
				</button>
			</div>
		</>
	);
}

export default App;
