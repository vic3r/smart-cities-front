import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
const HomePage = () => <Title>MiBici </Title>;

HomePage.displayName = 'HomePage';

export default HomePage;
