import {BrowserRouter, Link} from 'react-router-dom';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi';

function AppLogo() {
  return (
    
    <Nav >
        <GiKnifeFork />
        <Logo to={"/"}> 
            Foodie
        </Logo>
    </Nav>
  )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 900;
    font-family: 'Lobster Two', cursive;
    margin-left: 2rem;
    margin-right: 1rem;
`;

const Nav = styled.div`
    padding: 2rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        font-size: 2rem;
    }
`;

export default AppLogo