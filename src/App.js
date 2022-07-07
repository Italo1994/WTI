import React from 'react';
import styled from 'styled-components';
import worldMap from './images/world_map.jpg';
import { Quotes } from './components/quotes/Quotes';

export default function App() {
  return(
    <Content>
      <Quotes country={'country'} quote={'quote'} />
      {/* <WorldBackground src={worldMap} alt="plano de fundo do mapa mundi" /> */}
    </Content>
  );
}

const Content = styled.div`
  background-color: rgba(0, 0, 0, .7);
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorldBackground = styled.img`
  max-width: 50vw;
`;