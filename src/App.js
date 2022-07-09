import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Quotes } from './components/quotes/Quotes';
import { getCountryService } from './services/countryService/countryService';

export default function App() {
  
  /*
  * info recebe o objeto com as informações de nome e detalhes do país
  */
  const [info, setInfo] = useState( {country: 'country', quote: 'quote'} );

  useEffect( () => {
    onUpdate();
  }, []);

  const onUpdate = async () => {
    const quote = await getCountryService();
    
    setInfo(quote);
  };

  return(
    <Content>
      <Quotes {...info} /*country={info.country} quote={info.quote}*/ onUpdate={onUpdate} />
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