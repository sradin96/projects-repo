import React from 'react'
import { Container, Wrap } from '../../App.styled'
import { FooterBlock, FooterNav, FooterCopyright, FooterNavList, FooterNavItem, FooterNavLink, FooterLocations, FooterLocationsList, FooterLocationsItem, FooterLocationsLink } from './Footer.styled'

export default function Footer() {
    const footerLinks = [{link: 'Privacy & cookie policy', id:'f1'},
    {link: 'Annual Report 2020', id:'f2'},
    {link: 'Accessibility', id:'f3'},
    {link: 'Disclaimer', id:'f4'},
    {link: 'ISO 27001', id:'f5'}]

    const locationLinks = [{link: 'London', id:'fl1'},
    {link: 'Edinburgh', id:'fl2'},
    {link: 'Manchester', id:'fl3'},
    {link: 'Warwick', id:'fl4'},
    {link: 'Dubai', id:'fl5'}
]
  return (
    <FooterBlock>
        <Wrap>
            <Container>
                <FooterNav>
                    <FooterCopyright>© emperor</FooterCopyright>
                    <FooterNavList>
                        {/* <FooterNavItem>
                            <FooterNavLink>Privacy & cookie policy</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Annual Report 2020</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Accessibility</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Disclaimer</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>ISO 27001</FooterNavLink>
                        </FooterNavItem> */}
                        {
                            footerLinks.map((link) => (
                                <FooterNavItem key={link.id}>
                                    <FooterNavLink>{link.link}</FooterNavLink>
                                </FooterNavItem>
                            ))
                        }
                    </FooterNavList>
                </FooterNav>
                <FooterLocations>
                    <FooterLocationsList>
                        {/* <FooterLocationsItem>
                            <FooterLocationsLink>London</FooterLocationsLink>
                        </FooterLocationsItem>
                        <FooterLocationsItem>
                            <FooterLocationsLink>Edinburgh</FooterLocationsLink>
                        </FooterLocationsItem>
                        <FooterLocationsItem>
                            <FooterLocationsLink>Manchester</FooterLocationsLink>
                        </FooterLocationsItem>
                        <FooterLocationsItem>
                            <FooterLocationsLink>Warwick</FooterLocationsLink>
                        </FooterLocationsItem>
                        <FooterLocationsItem>
                            <FooterLocationsLink>Dubai</FooterLocationsLink>
                        </FooterLocationsItem> */}
                        {
                            locationLinks.map((link) => (
                                <FooterLocationsItem key={link.id}>
                                    <FooterLocationsLink>{link.link}</FooterLocationsLink>
                                </FooterLocationsItem>
                            ))
                        }
                    </FooterLocationsList>
                </FooterLocations>
            </Container>
        </Wrap>
    </FooterBlock>
  )
}
