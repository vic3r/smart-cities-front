import React, { PureComponent } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import Link from 'next/link';
import {
	LoginImg,
  LoginGrid,
  FormContainer,
  LogoImage,
  InputContainer,
  ForgotContainer,
  LoginButton,
  Footer,
  FooterLinks
} from './styles';

class Login extends PureComponent {
	state = {
		email: '',
		password: ''
	};

	onChange = (e, { name, value }) => {
    this.setState({ [[name]]: value });
  }

	render () {
		const { email, password } = this.state

		return (
			<LoginGrid columns={2}>
				<LoginImg />
				<Grid.Column>
					<FormContainer>
						<LogoImage src="../../../static/images/mibici_logo.png" />
						<Form>
							<InputContainer>
								<Form.Input
									label="Correo Electrónico"
									value={email}
									name="email"
									type="email"
									onChange={this.onChange}
									required
								/>
							</InputContainer>
							<InputContainer>
								<Form.Input
									label="Contraseña"
									type="password"
									value={password}
									name="password"
									onChange={this.onChange}
									required
								/>
							</InputContainer>
							<ForgotContainer>
								<Link href="/">
									<a>Forgot your password?</a>
								</Link>
							</ForgotContainer>
							<LoginButton className="login">Iniciar Sesión</LoginButton>
						</Form>
					</FormContainer>
				</Grid.Column>
      </LoginGrid>
		)
	}
}

Login.displayName = 'Login';

export default Login;
