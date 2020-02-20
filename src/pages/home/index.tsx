import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './index.scss';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Home: React.FC = () => {
  useEffect(() => {
    const headerSwiper: Swiper = new Swiper('.swiper-container', {
      autoplay: true,
      direction: 'horizontal'
    });

    return () => {
      headerSwiper && headerSwiper.destroy(true, true);
    };
  });

  return (
    <div className={isMobile ? 'mobile-home-container' : 'pc-home-container'}>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ height: '300px', background: 'red' }}>
            Slide 1
          </div>
          <div className="swiper-slide" style={{ height: '300px', background: 'green' }}>
            Slide 2
          </div>
          <div className="swiper-slide" style={{ height: '300px', background: 'yellow' }}>
            Slide 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
