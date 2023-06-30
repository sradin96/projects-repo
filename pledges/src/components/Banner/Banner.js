import React from 'react'
import { Container, Wrap } from '../../App.styled'
import { BannerBlock, BannerImgBlock, BannerImgSticker, BannerImgSticker2, BannerContent, BannerSupHeader, BannerHeader, BannerText, BannerArrow, BannerImgHolder } from './Banner.styled'
import ArrowDown from '../../assets/images/arrow-down.png'

export default function Banner({onClick}) {
  return (
    <BannerBlock>
        <Wrap>
            <Container className='banner__container'>
                <BannerContent>
                    <BannerSupHeader>our greatest ambition strategy</BannerSupHeader>
                    <BannerHeader>Sticking to new habits</BannerHeader>
                    <BannerText>We’ve formed lots of new habits while working from home. The best ones reduce our environmental impact. So let’s stick to them.</BannerText>
                </BannerContent>
                <BannerImgBlock>
                    <BannerImgHolder></BannerImgHolder>
                    <BannerImgSticker></BannerImgSticker>
                    <BannerImgSticker2></BannerImgSticker2>
                </BannerImgBlock>
                <BannerArrow onClick={onClick}>
                    <img src={ArrowDown} alt='arrow-down-img'/>
                </BannerArrow>
            </Container>
        </Wrap>
    </BannerBlock>
  )
}
