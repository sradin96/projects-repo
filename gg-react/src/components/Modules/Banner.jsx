import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import GameSlide from '../Partials/GameSlide';
import GamesContext from '../Context/GamesContext';

function Banner() {
    const GamesCtx = useContext(GamesContext)
    const randomGames = GamesCtx.suggested;

  return (
    <section className='banner'>
        <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        loop={true}
        autoplay= {{
            delay: 5000,
        }}
        centeredSlides={true}
        pagination={{
            clickable: true
            }}
        navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        }}
        >
            <button type='button' className="swiper-prev banner__swiper-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.1 4.3c0 .2-.1.3-.2.4L6.6 7l2.3 2.3c.1.1.2.2.2.4s-.1.3-.2.4c-.1.1-.3.2-.4.2-.2 0-.3-.1-.4-.2L5.4 7.4s-.1-.1-.1-.2c-.1-.1-.1-.3 0-.4 0-.1.1-.1.1-.2l2.7-2.7c.1-.1.2-.2.4-.2s.3.1.4.2c.1.1.2.3.2.4z"/></svg>
            </button>
                {
                    randomGames?.map((random, i) => {
                        return <SwiperSlide key={i}>
                        <GameSlide key={i}
                        image={random.image}
                        name={random.name}
                        genre={random.genre}
                        />
                        </SwiperSlide>
                    })
                }
            <button type='button' className="swiper-next banner__swiper-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor"><path d="M5.425 3.908a.553.553 0 0 1 .408-.16c.166 0 .302.053.409.16l2.683 2.684c.058.058.1.121.124.19a.65.65 0 0 1-.007.444.535.535 0 0 1-.117.182l-2.683 2.684a.553.553 0 0 1-.409.16.553.553 0 0 1-.408-.16.553.553 0 0 1-.16-.409c0-.165.053-.301.16-.408L7.7 7 5.425 4.725a.553.553 0 0 1-.16-.408c0-.166.053-.302.16-.409Z"/></svg>
            </button>
        </Swiper>
    </section>
  )
}

export default Banner