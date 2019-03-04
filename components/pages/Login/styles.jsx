import styled from 'styled-components';
import media from 'styled-media-query';
import { Grid, Button, Image } from 'semantic-ui-react';

export const LoginImg = styled(Grid.Column)`
  & {
    min-height: 100vh;
    margin: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('../../../static/images/login_bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  ${media.lessThan('large')`
		&&&&& {
			display: none;
		}
  `}
`
export const FormColumn = styled(Grid.Column)`
  ${media.lessThan('large')`
    &&&&& {
      width: 100%;
    }
  `}
`
export const LoginGrid = styled(Grid)`
  &.ui.grid {
    min-height: 100vh;
    margin: 0;
  }
`;
export const FormContainer = styled.div`
  & {
    margin: 10% 15%;
  }
`;
export const LogoImage = styled(Image)`
  &.ui.image {
    max-width: 50%;
    margin: 5% 25%;
  }
`;
export const InputContainer = styled.div`
  & {
    width: 100%;
    margin-bottom: 1.5em;
    
    && .required.field > label {
      color: #8C7461;
      font-size: 1rem;
      font-weight: 400;
    }

    && .required.field > label:after {
      display: none;
    }
  }
`;
export const ForgotContainer = styled(Grid.Column)`
  & {
    text-align: right;
  }

  & a {
    cursor: pointer;
    color: #8C7461;
  }

  ${media.lessThan('medium')`
		& a {
			font-size: 13px;
		}
	`}
`;
export const LoginButton = styled(Button)`
  &&.ui.button,
  &&.ui.button:hover {
    width: 100%;
    margin-top: 1em;
    text-transform: uppercase;
    padding: 1em;
    border-radius: 0;
    color: #ffff;
    background-color: #B12429;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &&.ui.button.login:hover,
  &&.ui.button.login:focus {
    background-color: #861D1E;
  }
`;
export const Footer = styled.div`
  & {
    text-align: center;
    font-size: 12px;
    line-height: 1.5rem;
    color: #ffff;
    margin-bottom: 10%;
  }
`;
export const FooterLinks = styled.div`
  & {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    padding: 0 3em;
  }

  ${media.lessThan('medium')`
		& {
			padding: 0;
		}
  `}
`;
