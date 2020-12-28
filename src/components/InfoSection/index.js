import React from 'react'
import { ColumnLeft, Container, Section, ColumnRight } from './InfoSectionElements'
import {Button} from '../Navbar/Button.js'

const InfoSection = ({heading, paragraph, paragraphTwo, image, reverse, bottomLabel}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft  reverse={reverse}>
                    <h1>{heading}</h1>
                        <p>{paragraph}</p>
                            <p>{paragraphTwo}</p>
                            <Button to="/home" primary="true" >{bottomLabel}</Button>
                </ColumnLeft>
                <ColumnRight  reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
