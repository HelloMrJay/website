/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from 'react';
import { DeviceContext } from '../../layout/BasicLayout';
import { Introduce, IzhaohuMap, Identification } from './components';
import Swiper from 'swiper';
import ToBottomImage from '../../assets/images/to_bottom.png';
import LeftNav from '../../components/LeftNav';
import './index.scss';
import 'swiper/swiper.scss';

export interface CarePageProps {
  setPageIndex: (page: number) => void;
}

const CarePage: React.FC<CarePageProps> = props => {
  const { setPageIndex } = props;
  const { isMobile } = useContext(DeviceContext);
  const [index, setIndex] = useState<number>(1);
  const [currentSwiper, setCurrentSwiper] = useState<Swiper>();
  const [showBottomIcon, setShowBottomIcon] = useState<boolean>(true);
  const IdentificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSwiper = () => {
      const mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        effect: 'coverflow',
        mousewheel: true,
        passiveListeners: false,
        autoHeight: true,
        speed: 1000,
        on: {
          slideChange: () => {
            const currentIndex = mySwiper.activeIndex + 1;
            setPageIndex(currentIndex);
            setIndex(currentIndex);
          }
        }
      });

      setCurrentSwiper(mySwiper);
    };
    initSwiper();
  }, []);

  useEffect(() => {
    setShowBottomIcon(index !== 3);

    if (index === 3) {
      currentSwiper?.mousewheel?.disable();
      IdentificationRef && IdentificationRef.current && (IdentificationRef.current.scrollTop = 1)
    }
  }, [index]);

  const onScrollHandler = () => {
    let { scrollTop = 0 } = IdentificationRef?.current || {}
    if (scrollTop) {
      currentSwiper?.mousewheel?.disable();
    } else {
      currentSwiper?.mousewheel?.enable();
      currentSwiper?.slidePrev();
    }
  }

  const setIndexHander = (index: number) => {
    if (index < 3) {
      setIndex(index + 1);
      currentSwiper?.mousewheel?.enable();
      currentSwiper?.slideTo(index);
    }
  };

  return (
    <div className={isMobile ? 'mobile-care-container' : 'pc-care-container'}>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Introduce />
          </div>
          <div className="swiper-slide">
            <IzhaohuMap />
          </div>
          <div className="swiper-slide">
            <Identification
              ref={IdentificationRef}
              index={index}
              onScrollHandler={() => onScrollHandler()}
              selectNumber={(number?: number) => number && setIndexHander(number - 1)}
            />
          </div>
        </div>
      </div>
      {
        showBottomIcon && <LeftNav
         navIndex={index}
         selectNumber={number => setIndexHander(number - 1)}
        />
      }

      {
        showBottomIcon && <img
          src={ToBottomImage}
          className="to-bottom-image"
          alt=""
          style={{ zIndex: 100 }}
          onClick={() => setIndexHander(index)}
        />
      }
    </div>
  );
};

export default CarePage;
