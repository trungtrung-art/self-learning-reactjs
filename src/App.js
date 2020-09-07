import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>

function App (){
	return(
		<Router>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<h1>đây là test về router</h1>
				<Route path="/" exact component={Home}></Route>
				<Route path="/about" exact component={About}></Route>
			</div>

		</Router>
	)
}
export default App;