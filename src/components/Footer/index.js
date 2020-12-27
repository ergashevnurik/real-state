import React from 'react'
import { FooterData } from '../../data/FooterData'
import {FooterSection, FooterContainer, FooterRow, FooterColumn, FooterCard, FooterUnOrderList, FooterListItem, FooterLink, FooterWrapBottom} from './FooterElements'

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterRow>
                    <FooterColumn>
                        <FooterCard>
                            <h3>About</h3>
                            <FooterUnOrderList>
                                {FooterData.map((footerData, index) => (
                                    <FooterListItem key={index}>
                                        <FooterLink to={footerData.link}>{footerData.title}</FooterLink>
                                    </FooterListItem>
                                ))}
                            </FooterUnOrderList>
                        </FooterCard>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterCard>
                            <h3>Discover</h3>
                            <FooterUnOrderList>
                                {FooterData.map((footerData, index) => (
                                    <FooterListItem key={index}>
                                        <FooterLink to={footerData.link}>{footerData.title}</FooterLink>
                                    </FooterListItem>
                                ))}
                            </FooterUnOrderList>
                        </FooterCard>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterCard>
                            <h3>Contact</h3>
                            <FooterUnOrderList>
                                {FooterData.map((footerData, index) => (
                                    <FooterListItem key={index}>
                                        <FooterLink to={footerData.link}>{footerData.title}</FooterLink>
                                    </FooterListItem>
                                ))}
                            </FooterUnOrderList>
                        </FooterCard>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterCard>
                            <h3>Subscribe</h3>
                            <FooterUnOrderList>
                                {FooterData.map((footerData, index) => (
                                    <FooterListItem key={index}>
                                        <FooterLink to={footerData.link}>{footerData.title}</FooterLink>
                                    </FooterListItem>
                                ))}
                            </FooterUnOrderList>
                        </FooterCard>
                    </FooterColumn>
                </FooterRow>

                <FooterWrapBottom>
                    <h5>All rights are copied and reserved</h5>
                </FooterWrapBottom>

            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
