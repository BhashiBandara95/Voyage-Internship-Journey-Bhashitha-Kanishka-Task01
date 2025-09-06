function App() {
	// create a variable
	const a = 30;
	return (
		<>
			<div className="cont">
				<h1>React App</h1>
				<p> {20 / 20}% for jsx</p> {/* arithmetic operation*/}
				<p> {a}</p> {/* access to variable */}
				<p> {a > 50 ? "Greater" : "Lesser"}</p> {/* If statement */}
			</div>
		</>
	);
}

export default App;
