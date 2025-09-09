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
