import React, { useEffect, useState, useMemo } from 'react';
import Swiper, { SwiperSlideProps } from '../../components/Swiper';
import './index.scss';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Home: React.FC = () => {
  const [urls, setUrls] = useState<SwiperSlideProps[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUrls([
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582265478013&di=4bed43d6f6aadb9b4782f11fad383f49&imgtype=0&src=http%3A%2F%2Fimage.huahuibk.com%2Fuploads%2F20190222%2F23%2F1550850387-MFLyASvKBD.jpg'
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582265835594&di=d2262d7790f50525e97daf92361f1f94&imgtype=0&src=http%3A%2F%2F2.zol-img.com.cn%2Fproduct%2F74_500x2000%2F416%2Fce2ETxk6sCzZ6.jpg'
        }
      ]);
    }, 1000);
  }, []);

  return (
    <div className={isMobile ? 'mobile-home-container' : 'pc-home-container'}>
      {
        useMemo(() => <Swiper sildeList={urls} />, [urls])
      }
    </div>
  );
};

export default Home;
