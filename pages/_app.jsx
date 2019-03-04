import App, {Container} from 'next/app'
import React from 'react'
import Header from 'next/head'

class RoommatesApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Header>
          <title>Mi Bici</title>
        </Header>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default RoommatesApp