import styled from 'styled-components';
import { Grid, Button } from 'semantic-ui-react';

export const MainContainer = styled.div`
	{
		min-height: 110vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('../../../static/images/home_bg.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 60%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;	
  }
  
  > .ui.one.column.grid {
    margin-left: 0;
    margin-right: 0;
  }
`
export const Locations = styled(Grid)`
	&.ui.grid {
    padding: 4em 6em;
  }
  
  &.column:not(.aligned):not(.justified):not(.row) {
    text-align: center;
  }

  &.ui.grid h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &.ui.grid .next-bike {
    margin-top: 4rem;
  }

  &.ui.grid .fas {
    font-size: 3rem;
  }
`
export const LocationButton = styled(Button)`
  &.ui.button {
    height: 150px;
    width: 150px;
    border-radius: 80px;
    background-color: #1DA289;
    font-size: 1.3rem;
  }

  &.ui.button:hover, &.ui.button:focus {
    background-color: #177967;
  }
`