import styled from 'styled-components'

export const Section = styled.section `
    
`

export const Container  = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;
    width: 80%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }

`

export const ColumnLeft = styled.div `
    width: calc(100% / 2);
    padding: 20px;

    h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        margin-bottom: 20px;
        line-height: 1;
    }

    p {
        font-size: clamp(0.8rem, 2.5vw, 1rem);
        margin-bottom: 20px;
    }

    @media screen and (max-width: 700px) {
        padding: 20px;
        width: 100%;
    }

`

export const ColumnRight = styled.div `
    width: calc(100% / 2);

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%
    }
`