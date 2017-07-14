import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import SVG from '../routes/svg';

import linkState from 'linkstate';

// import Editor from 'async!./editor';

export default class App extends Component {

	state = {
    width: 550,
    height: 550,
    wallHeight: 340,
    frameWidth: 10
  }

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	up = (e, key) => this.setState({ [key]: parseInt(e.target.value) })

	render() {
		// console.log(this.state)
		return (
			<div id="app">
				<Header />
				<main>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<SVG path="/svg" up={this.up} {...this.state} />
					</Router>
				</main>
			</div>
		);
	}
}
