import styled from 'styled-components'

export const FooterBlock = styled.footer`
    background-color: #222;
    padding: 20px 0;
`

export const FooterNav = styled.div`
    display: flex;
    align-items: center;
`

export const FooterCopyright = styled.span`
    color: #fff;
    font-weight: 600;
    font-size: 14px;
`

export const FooterNavList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const FooterNavItem = styled.li`
    margin-left: 10px;
`

export const FooterNavLink = styled.a`
    font-size: 12px;
    color: #fff;
    &:hover {
        text-decoration: underline;
    }
`

export const FooterLocations = styled.div``

export const FooterLocationsList = styled.ul`
    display: flex;
    align-items: center;
`

export const FooterLocationsItem = styled.li`
    margin-left: 10px;
`

export const FooterLocationsLink = styled.a`
    font-size: 12px;
    color: #fff;
    &:hover {
        text-decoration: underline;
    }
`