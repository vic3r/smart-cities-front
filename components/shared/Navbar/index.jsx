import React, { PureComponent } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavMenu, NavItem } from './styles';
import { withRouter } from 'next/router';
import Link from 'next/link';

class Navbar extends PureComponent {
	state = {};
	
	render() {
		const { router } = this.props;
		const route = router.route;

		return (
			<NavMenu className='top fixed' pointing secondary>
				<Menu.Menu position='right'>
					<Link href="/">
						<NavItem
							name='home'
							className="mb-nav"
							active={route === '/'}
						>
							Home
						</NavItem>
					</Link>
					<Link href="/">
						<NavItem 
							name='map' 
							className="mb-nav"
							active={route === '/map'} 
						>
							Map
						</NavItem>
					</Link>
					<Link href="/">
						<NavItem
							name='about'
							className="mb-nav"
							active={route === '/about'}
						>
							About
						</NavItem>
					</Link>
				</Menu.Menu>
			</NavMenu>
		)
	}
};

Navbar.displayName = 'Navbar';

export default withRouter(Navbar);