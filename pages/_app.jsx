import App, {Container} from 'next/app';
import React from 'react';
import Header from 'next/head';
import { createGlobalStyle } from 'styled-components';

class MibiciApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Header>
          <title>Mi Bici</title>
        </Header>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}

MibiciApp.displayName = 'MibiciApp';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oxygen', sans-serif;
  }
`;

export default MibiciApp