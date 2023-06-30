import styled from 'styled-components';
import yellowWipe from '../../assets/images/yellow-wipe.png'

export const SignupHolder = styled.div`
    padding-top: 140px;
    height: 100vh;
    background-color: #222222;
    box-shadow: 0px 30px 42px -16px rgba(0, 0, 0, 0.08);
`

export const SignupTitle = styled.h1`
    font-size: 80px;
    line-height: 96px;
    color: #fff;
    font-weight: 600;
    position: relative;
    z-index: 2;
    letter-spacing: -1px;
    max-width: 430px;
    width: 100%;
    margin: 0 auto 54px;
    &::after {
        content: url(${yellowWipe});
        position: absolute;
        left: -10px;
        bottom: 0;
        transform: translateY(35%);
        z-index: -1;
    }
`