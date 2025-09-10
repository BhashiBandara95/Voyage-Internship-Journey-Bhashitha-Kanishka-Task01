import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {
	// Normal Function
	function hello1() {
		console.log("Hello 1");
	}

	// Arrow function

	const hello2 = () => {
		console.log("Hello 2");
	};
	// parameterized function

	function hello3(name) {
		console.log("Hello 3 " + name);
	}

	// Arrow function

	const hello4 = (name) => {
		console.log("Hello 4 " + name);
	};

	return (
		<>
			<div id="wrapper">
				<button onClick={hello1}>Click1</button>
				<button onClick={hello2}>Click2</button>
				<button
					onClick={() => {
						hello3("Bhashitha");
					}} // wrap from anonymous function
				>
					Click3
				</button>
				<button
					onClick={() => {
						hello4("Kasun");
					}}
				>
					Click4
				</button>
			</div>
		</>
	);
}

export default App;
