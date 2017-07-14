import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<Link activeClassName={style.active} href="/">3D Editor</Link>
          <Link activeClassName={style.active} href="/svg">SVG Editor</Link>
				</nav>
			</header>
		);
	}
}
