import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav `
    height: 80px;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 1rem 2rem;
    z-index: 100;
    position: absolute;
    width: 100%;
`; 

export const NavLink = css `
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

export const Logo = styled(Link) `
    ${NavLink}
    font-style: italic;
`;

export const MenuBars = styled(FaBars) `
    display: none;

    @media screen and (max-width: 700px) {
        display: block;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }
`;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -40px;

    @media screen and (max-width: 700px) {
        display: none;
    }

`;

export const NavMenuLinks = styled(Link) `
    ${NavLink}
`;

export const NavBtn = styled.div `
    display: flex;
    align-items: center;
    margin-right: 20px;

    @media screen and (max-width: 700px) {
        display: none;
    }
`