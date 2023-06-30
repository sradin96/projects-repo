import styled from 'styled-components';

export const HeaderBlock = styled.header`
    padding: 0 55px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
`

export const HeaderHolder = styled.div`

display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid #FFFFFF;
`

export const Nav = styled.nav`
    width: 100%;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const NavItem = styled.li`
    margin-left: 62px;
`

export const NavLink = styled.a`
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    &:hover {
        text-decoration: underline;
    }
`

export const NavButton = styled.button`
    padding: 6px 20px;
    color: #222;
    background-color: white;
    border-radius: 28px;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 14px;
    font-weight: 400;
`

export const CurrentUser = styled.span`
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
`