import styled from 'styled-components';
import { Grid, Card } from 'semantic-ui-react';

export const MainContainer = styled(Grid)`
  &.ui.grid {
    margin-top: 0;
    height: 100vh;
    min-height: 100%;
  }

  &.ui.grid>.column:not(.row) {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
  }

  & .ui.grid, &.ui.grid {
    margin-left: 0;
    margin-right: 0;
  }
`
export const DataContainer = styled(Grid.Column)`
  & {
    background-color: #EBEBEB;
  }
`
export const DataCard = styled(Card)`
  &.ui.card {
    margin: 1rem;
    width: 100%;
  }
`
export const IconContainer = styled.div`
  & {
    float: right;
    padding: 1rem;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 1.5rem;
  }

  &.green {
    background-color: #7FAD41;
  }

  &.yellow {
    background-color: #F0AF2A;
  }
`
export const NumContainer = styled(Card.Content)`
  &&.content {
    text-align: center;
    font-size: 3rem;
  }
`
export const HeaderContainer = styled(Grid.Column)`
  {
    padding: 1.4rem 2rem;
    font-weight: 600;
    color: #383737;
    margin-top: 0.8rem;
    font-size: 1.3rem;
  }

  &.gray-bg {
    background-color: #4e4e4e4a;
  }
`
export const SideBar = styled(Grid.Column)`
  {
    background-color: #B12429;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  >div {
    padding: 1rem;
  }
`
export const LocationName = styled.div`
  {
    background-color: #861D1E;
    margin-top: 0.8rem;
  }
`
export const NegihborhoodItem = styled.div`
  {
    cursor: pointer;
  }

  &:hover, &.sidebar-active {
    background-color: #90161b;
  }
`