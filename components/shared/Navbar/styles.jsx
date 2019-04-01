import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

export const NavMenu = styled(Menu)`
	&.ui.secondary.pointing.menu {
		padding: 0 10%;
		-webkit-box-shadow: 0px 1px 4px 0px rgba(8,8,8,1);
		-moz-box-shadow: 0px 1px 4px 0px rgba(8,8,8,1);
		box-shadow: 0px 1px 4px 0px rgba(8,8,8,1);
		background-color: #071620;s
	}

	&.ui.secondary.pointing.menu a.mb-nav.item:hover {
		color: #FFFFFF;
		border-bottom-color: #FFFFFF;
	}
`
export const NavItem = styled(Menu.Item)`
	&&&&.item {
		font-size: 1em;
		border-bottom: 2px solid rgba(0,0,0,0);
		padding: 1.25em 1.5em;
		color: #FFFFFF;
		text-transform: uppercase;
		font-weight: 500;
		letter-spacing: 1px;
	}

	&&&.item:hover,
	&&&.item:focus,
	&&&.item.active.mb-nav {
		border-bottom-color: #FFFFFF;
		color: #FFFFFF;
	}
`