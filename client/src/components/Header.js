import React from 'react';

import {
  Heading,
  Hero,
} from 'react-bulma-components';
import network from '../img/icons8-network-64.png'

export default () => {
  return (
    <Hero renderAs="header">
      <Hero.Body style={{ padding: '1rem 1rem' }}>
        <img src={network} alt="Network Icon"></img>
        <Heading>
          Network Assessor
        </Heading>
        <Heading subtitle size={4}>
          A Project by RevaLab
        </Heading>
      </Hero.Body>
    </Hero>
  );
}