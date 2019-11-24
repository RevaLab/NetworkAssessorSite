import React from 'react'

import {
  Heading,
  Hero,
} from 'react-bulma-components'
import network from '../img/icons8-network-64.png'

export default () => {
  return (
    <Hero renderAs="header">
      <Hero.Body>
        <img src={network} alt="Network Icon"></img>
        <Heading>
          Network Assessor
        </Heading>
        <Heading renderAs="h2" subtitle size={4}>
          A Project by RevaLab
        </Heading>
      </Hero.Body>
    </Hero>
  )
}
