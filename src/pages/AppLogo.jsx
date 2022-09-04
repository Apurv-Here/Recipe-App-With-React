import {BrowserRouter, Link} from 'react-router-dom';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi';

function AppLogo() {
  return (
    
    
    <Nav to={"/"}>
        <GiKnifeFork />
        <Logo > 
            Foodie
        </Logo>
    </Nav>
  )
}

const Logo = styled.div`
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 900;
    font-family: 'Lobster Two', cursive;
    margin-left: 2rem;
    margin-right: 1rem;
    underline: none;
`;

const Nav = styled(Link)`
    padding: 2rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;


    svg {
        font-size: 2rem;
    }
`;

export default AppLogo