import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Controls from './controls';

import Home from '../routes/home';
import SVG from '../routes/svg';
// import Editor from 'async!./editor';

export default class App extends Component {

	state = {
    width: 550,
    height: 550,
    length: 1000,
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

	up = (e, key, wrapper=()=>{} ) => this.setState({ [key]: wrapper(e.target.value) })

	render() {
		return (
			<div id="app">
				<Header />
				<main>
					<Router onChange={this.handleRoute}>
						<Home path="/" {...this.state} />
						<SVG path="/svg" {...this.state} />
					</Router>
				</main>
				<Controls up={this.up} {...this.state} />
			</div>
		);
	}
}
