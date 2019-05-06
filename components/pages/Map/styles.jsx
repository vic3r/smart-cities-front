import styled from 'styled-components';

export const Marker = styled.div `
  width: 10px;
  height: 10px;
  border-radius: 5px;
  cursor: pointer;

  &.red {
    background-color: #FF0000;
  }
  &.yellow {
    background-color: #FFFF00;
  }
  &.green {
    background-color: #00FF00;
  }
`
export const InfoBox = styled.div`
  font-size: 1rem;
  line-height: 1.8rem;
  width: 350px;
  background-color: white;
  position: absolute;
  top: 13%;
  left: 2%;
  z-index: 10;
  padding: 1rem;
  border: solid 1px #d6d3d3;
  -webkit-box-shadow: 3px 5px 32px -3px rgba(158,158,158,1);
  -moz-box-shadow: 3px 5px 32px -3px rgba(158,158,158,1);
  box-shadow: 3px 5px 32px -3px rgba(158,158,158,1);
`