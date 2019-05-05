import React, { PureComponent } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Navbar from '../../shared/Navbar';
import { withRouter } from 'next/router';
import moment from 'moment';
import { SideBar, LocationName, MainContainer, NegihborhoodItem, DataContainer, HeaderContainer, IconContainer,
  DataCard, NumContainer } from './styles';

const neighborhoods = ['Providencia', 'Puerta de Hierro', 'La Estancia', 'Jardín Real', 'Colinas de San Javier',
  'La Calma', 'Arboledas', 'Loma Bonita', 'Ciudad del Sol'];

class Location extends PureComponent {

  state = {
    currentNeighborhood: -1,
    date: ''
  };

  componentDidMount() {
    this.updateTime();
    this.interval = setInterval(this.updateTime, 30000)
  };

  componentWillUnmount() {
    clearInterval(this.interval)
  };

  updateTime = () => {
    const date = moment().format('LLLL');
    this.setState({ date })
  };

  handleItemClick = index => this.setState({ currentNeighborhood: index })

	render() {
    const { currentNeighborhood, date } = this.state;
    const { router } = this.props;
    const locationName = router.asPath.substring(1);

		return (
			<React.Fragment>
        <Navbar />
        <MainContainer>
          <SideBar mobile={16} tablet={5} computer={3}>
            <LocationName>
              <h2>
                {locationName}
              </h2>
            </LocationName>
            { neighborhoods.map((item, index) => (
              <NegihborhoodItem 
                key={index} name={item} 
                value={index} 
                onClick={() => this.handleItemClick(index)}
                className={currentNeighborhood == index ? 'sidebar-active' : ''}
              >
                {item}
              </NegihborhoodItem>
            )) }
          </SideBar>
          <DataContainer mobile={16} tablet={11} computer={13}>
            <Grid.Row centered columns={1}>
              <HeaderContainer className="gray-bg" mobile={16} computer={3}>
                { date }
              </HeaderContainer>
            </Grid.Row>
            {
              currentNeighborhood >= 0 ? ( 
                <React.Fragment>
                  <Grid.Row>
                    <HeaderContainer>
                      { neighborhoods[currentNeighborhood] }
                    </HeaderContainer>
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
                </React.Fragment>
               ) : (
                <Grid columns={1}>
                  <Grid.Column mobile={15} computer={15}>
                    <DataCard>
                      <Card.Content>
                        <Card.Header>
                          Select a neighborhood.
                        </Card.Header>
                      </Card.Content>
                    </DataCard>
                  </Grid.Column>
                </Grid>
              )
            }
          </DataContainer>
        </MainContainer>
      </React.Fragment>
    )
  }
}

Location.displayName = 'Location';

export default withRouter(Location);