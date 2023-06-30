import styled from 'styled-components'
import yellowWipe from '../../assets/images/yellow-wipe.png'
import bannerImg from '../../assets/images/banner-main-sticker.png'
import stickerImg from '../../assets/images/banner-sticker.png'
import stickerImg2 from '../../assets/images/banner-sticker-2.png'

export const BannerBlock = styled.section`
    background-color: #222222;
    padding: 235px 0 164px;
`

export const BannerContent = styled.div`
    max-width: 433px;
    width: 100%;
`

export const BannerImgBlock = styled.div`
    position: relative;
`

export const BannerSupHeader = styled.h2`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 17px;
    font-weight: 400;
    margin-bottom: 32px;
`

export const BannerHeader = styled.h1`
    font-size: 80px;
    line-height: 96px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 64px;
    position: relative;
    z-index: 2;
    letter-spacing: -1px;
    &::after {
        content: url(${yellowWipe});
        position: absolute;
        left: -10px;
        bottom: 0;
        transform: translateY(35%);
        z-index: -1;
    }
`

export const BannerText = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
`

export const BannerArrow = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(200px);
    outline: none;
    background: transparent;
    border: none;
`
export const BannerImgHolder = styled.div`
    background-image: url(${bannerImg});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 552px;
    height: 277px;
`
export const BannerImgSticker = styled.div`
    background-image: url(${stickerImg});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 249px;
    height: 247px;
    position: absolute;
    left: 40px;
    bottom: 0;
    transform: translateY(260px);
`
export const BannerImgSticker2 = styled.div`
    background-image: url(${stickerImg2});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 199px;
    height: 212px;
    position: absolute;
    right: 20px;
    bottom: 0;
    transform: translateY(160px);
`