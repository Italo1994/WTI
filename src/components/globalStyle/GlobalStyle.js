import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/world_map.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${bgImg}) center no-repeat;
        background-size: cover;
        /*color: #332c35;*/
        color: #FFF;
        padding: 0;
        margin: 0;
        font-family: 'Times New Roman', serif;
    }
`;