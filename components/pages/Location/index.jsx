import React, { PureComponent } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Navbar from '../../shared/Navbar';
import { withRouter } from 'next/router';
import moment from 'moment';
import { SideBar, LocationName, MainContainer, NegihborhoodItem, DataContainer, HeaderContainer, IconContainer,
  DataCard, NumContainer } from './styles';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

class Location extends PureComponent {

  state = {
    currentStationIdx: -1,
    currentStation: {},
    locationStations: [],
    locationName: '',
    date: ''
  };

  componentDidMount() {
    this.updateTime();
    this.interval = setInterval(this.updateTime, 30000)
    const { router } = this.props;
    const locationName = capitalize(router.asPath.substring(1));

    fetch(`${process.env.API_URL}stations/zone/${locationName}`)
      .then(response => response.json())
      .then(data => this.setState({ locationName, locationStations: data[`stations in ${locationName}`] }));
  };

  componentWillUnmount() {
    clearInterval(this.interval)
  };

  updateTime = () => {
    const date = moment().format('LLLL');
    this.setState({ date })
  };

  handleItemClick = index => {
    const { locationStations } = this.state;
    this.setState({ currentStationIdx: index, currentStation: locationStations[index] });
  }

	render() {
    const { currentStationIdx, date, locationName, locationStations, currentStation } = this.state;

		return (
			<React.Fragment>
        <Navbar />
        <MainContainer>
          <SideBar mobile={16} tablet={5} computer={4}>
            <LocationName>
              <h2>
                {locationName}
              </h2>
            </LocationName>
            { locationStations.map((item, index) => (
              <NegihborhoodItem 
                key={item.station_id}
                onClick={() => this.handleItemClick(index)}
                className={currentStationIdx == index ? 'sidebar-active' : ''}
              >
                {item.name}
              </NegihborhoodItem>
            )) }
          </SideBar>
          <DataContainer mobile={16} tablet={11} computer={12}>
            <Grid.Row centered columns={1}>
              <HeaderContainer className="gray-bg" mobile={16} computer={3}>
                { date }
              </HeaderContainer>
            </Grid.Row>
            {
              currentStationIdx >= 0 ? ( 
                <React.Fragment>
                  <Grid.Row>
                    <HeaderContainer>
                      { currentStation.name }
                    </HeaderContainer>
                  </Grid.Row>
                  <Grid columns={2}>
                    <Grid.Column mobile={15} computer={7}>
                      <DataCard>
                        <Card.Content>
                          <Card.Header>
                            Bikes Available
                            <IconContainer className="green">
                              <i className="fas fa-bicycle"></i>
                            </IconContainer>
                          </Card.Header>
                        </Card.Content>
                        <NumContainer>
                          {currentStation.bikes_available}/{currentStation.capacity}
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
                        {currentStation.docks_available}/{currentStation.capacity}
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