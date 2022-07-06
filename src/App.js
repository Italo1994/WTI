import React from 'react';
import styled from 'styled-components';
import worldMap from './images/world_map.jpg';
import { Quotes } from './components/quotes/Quotes';

export default function App() {
  return(
    <Content>
      <Quotes quote={'ok'} speaker={'speaker'} />
      {/* <WorldBackground src={worldMap} alt="plano de fundo do mapa mundi" /> */}
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorldBackground = styled.img`
  max-width: 50vw;
`;