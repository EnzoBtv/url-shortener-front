import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Route exact path='/' />
		</BrowserRouter>
	);
}

export default App;
