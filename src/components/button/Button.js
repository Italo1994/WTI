import styled from 'styled-components';
import { string } from 'prop-types';

export const Button = ( {children }) => {
    return <ButtonCustom>{children}</ButtonCustom>
}

Button.propTypes = {
    children: string
};

const ButtonCustom = styled.button`
    background: #DC872C;
    color: #FFF;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: #333 1px 2px;

    &:hover {
        background: #FFF;
        color: #DC872C;
        transition: all .5s;
    }
`;