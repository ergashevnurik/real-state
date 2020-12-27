import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterSection = styled.section `
    width: 100%;
    background: #000;
`

export const FooterContainer = styled.div `
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;


    @media screen and (max-screen: 768px) {
        width: 100%;
    }

`

export const FooterRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const FooterColumn = styled.div `
    margin: 25px;
`

export const FooterCard = styled.div `
    padding: 15px;
    text-align: center;
    color: #fff;
`

export const FooterUnOrderList = styled.ul `
    list-style: none;
`

export const FooterListItem = styled.li `
    padding: 2px;
`

export const FooterLink = styled(Link) `
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
`

export const FooterWrapBottom = styled.div `
    color: white;
    padding-bottom: 10px;
`