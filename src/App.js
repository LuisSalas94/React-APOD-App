import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Home />
			</div>
		</>
	);
}

export default App;
