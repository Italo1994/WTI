import styled from 'styled-components';
import { string, func } from 'prop-types';

import { Button } from '../button';

export const Quotes = ( {country, quote, onUpdate } ) => {
    return(
        <Wrapper>
            <Title>{country}</Title>
            <Quote>{quote}</Quote>
            <Button onClick={onUpdate} children="Informações" />
        </Wrapper>
    );
}

Quotes.propTypes = {
    country: string,
    quote: string,
    onUpdate: func
};

const Wrapper = styled.div`
    background: rgba(0, 0, 0, .2);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    max-width: 700px;
    height: 70vh;
    margin: 0 auto;
`;

const Title = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Quote = styled(Title)`
    text-align: center;
    margin-bottom: 50px;
`;