import App, {Container} from 'next/app'
import React from 'react'
import Header from 'next/head'
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
  .ui.menu {
    font-family: 'Oxygen', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', serif;
  }
`;

export default MibiciApp