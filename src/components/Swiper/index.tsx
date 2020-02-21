import React, { useEffect } from 'react';
import Swiper from 'swiper';

export interface SwiperSlideProps {
  src: string;
}

export interface WSwiperProps {
  sildeList: Array<SwiperSlideProps>;
}

const WSwiper: React.FC<WSwiperProps> = props => {
  const { sildeList = [] } = props
  useEffect(() => {
    const commonSwiper: Swiper = new Swiper('.swiper-container', {
      autoplay: true,
      direction: 'horizontal'
    });

    return () => {
      commonSwiper && commonSwiper.destroy(true, true);
    };
  }, [sildeList]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {sildeList.map((slide, idx) => (
          <div className="swiper-slide" key={idx}>
            <img src={slide.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WSwiper;
