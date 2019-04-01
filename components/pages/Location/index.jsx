import React, { PureComponent } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Navbar from '../../shared/Navbar';
import { SideBar, LocationName, MainContainer, NegihborhoodItem, DataContainer, TimeContainer,
  DataCard, IconContainer, NumContainer } from './styles';

const neighborhoods = ['Providencia', 'Puerta de Hierro', 'La Estancia', 'Jardín Real', 'Colinas de San Javier',
  'La Calma', 'Arboledas', 'Loma Bonita', 'Ciudad del Sol'];

class Location extends PureComponent {
	render() {
		return (
			<React.Fragment>
        <Navbar />
        <MainContainer>
          <SideBar mobile={16} tablet={5} computer={3}>
            <LocationName>
              <h2>
                Zapopan
              </h2>
            </LocationName>
            { neighborhoods.map(item => (
              <NegihborhoodItem>
                {item}
              </NegihborhoodItem>
            )) }
          </SideBar>
          <DataContainer mobile={16} tablet={11} computer={13}>
            <Grid.Row centered columns={1}>
              <TimeContainer mobile={16} computer={3}>
                Monday at 2:34 pm
              </TimeContainer>
            </Grid.Row>
            <Grid columns={2}>
              <Grid.Column mobile={15} computer={7}>
                <DataCard>
                  <Card.Content>
                    <Card.Header>
                      Available
                      <IconContainer className="green">
                        <i className="fas fa-bicycle"></i>
                      </IconContainer>
                    </Card.Header>
                  </Card.Content>
                  <NumContainer>
                    6/12
                  </NumContainer>
                </DataCard>
              </Grid.Column>
              <Grid.Column mobile={15} computer={7}>
                <DataCard>
                  <Card.Content>
                    <Card.Header>
                      Free Spots
                      <IconContainer className="yellow">
                        <i className="fas fa-plug"></i>
                      </IconContainer>
                    </Card.Header>
                  </Card.Content>
                  <NumContainer>
                    6/12
                  </NumContainer>
                </DataCard>
              </Grid.Column>
            </Grid>
          </DataContainer>
        </MainContainer>
      </React.Fragment>
    )
  }
}

Location.displayName = 'Location';

export default Location;