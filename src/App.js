import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/contactus" component={ContactUs}/>
			</Switch>
		</Router>
	);
}

export default App;
