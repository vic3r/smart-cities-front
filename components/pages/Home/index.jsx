import React, { PureComponent } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Navbar from '../../shared/Navbar';
import { MainContainer, Locations, LocationButton } from './styles'

class Home extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<MainContainer>
					<Grid columns={1}>
						<Grid.Column mobile={15} tablet={8} computer={6}>
							<Image src='../../static/images/mibici_logo.png' />
						</Grid.Column>
					</Grid>
				</MainContainer>
				<Locations centered columns={1}>
					<Grid.Row>
						<h1>
							Locations
						</h1>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column mobile={15} computer={15}>
							<Grid centered columns={4}>
								<Grid.Column textAlign="center" mobile={15} computer={4}>
									<LocationButton primary>
										Guadalajara
									</LocationButton>
								</Grid.Column>
								<Grid.Column textAlign="center" mobile={15} computer={4}>
									<LocationButton primary>
										Zapopan
									</LocationButton>
								</Grid.Column>
								<Grid.Column textAlign="center" mobile={15} computer={4}>
									<LocationButton primary>
										Tonalá
									</LocationButton>
								</Grid.Column>
								<Grid.Column textAlign="center" mobile={15} computer={4}>
									<LocationButton primary>
										Tlaquepaque
									</LocationButton>
								</Grid.Column>
							</Grid>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className="next-bike">
						<h1>The next bike near to you</h1>
					</Grid.Row>
					<Grid.Row centered columns={1}>
						<Grid.Column textAlign="center" computer={15}>
							<LocationButton primary>
								<i className="fas fa-bicycle"></i>
							</LocationButton>
						</Grid.Column>
					</Grid.Row>
				</Locations>
			</React.Fragment>
		)
	}
};

Home.displayName = 'Home';

export default Home;