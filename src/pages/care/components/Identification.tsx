import React, { useContext } from 'react';
import LeftNav from '../../../components/LeftNav';
import { DeviceContext } from '../../../layout/BasicLayout';
import { productInfo, pcooperationInfo } from './constants';
import QRCode from 'qrcode.react';

import LeftCircleImage from '../../../assets/images/left_cricle.png';
import LeftLogo from '../../../assets/images/left_logo.png';
import RightCircleImage from '../../../assets/images/right_circle.png';
import RightLogo from '../../../assets/images/right_logo.png';

export interface IdentificationItem {
  circleSrc: string,
  circleLogo: string,
  name: string,
  text: string
}

const Identification = React.forwardRef<HTMLDivElement,{onScrollHandler: Function, index: number, selectNumber: Function }>((props, ref) => {
  const { isMobile } = useContext(DeviceContext);

  const renderIdentificationItem = (params: IdentificationItem) =>  {
    let { circleSrc, circleLogo, name, text } = params

    return (
      <div className="render-item">
        <img src={circleSrc} alt="" />
        <img src={circleLogo} alt="" />
        <div className="identification-text">
          <div className="identification-name">{name}</div>
          <div className="identification-content-text">{text}</div>
          <div className="linker">查看详情</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={isMobile ? 'mobile-identification-container' : 'pc-identification-container'}
      ref={ref}
      onScroll={(e) => e.stopPropagation && props.onScrollHandler()}
    >
      <div className="identification-content">
        <div className="identification-group">
          <LeftNav navIndex={props.index} selectNumber={number => props.selectNumber(number)} />

          <div className="identification-item">
            <div className="identification-item--left">
              {
                renderIdentificationItem({
                  circleSrc: LeftCircleImage,
                  circleLogo: LeftLogo,
                  name: 'BCORP认证',
                  text: '爱照护养老服务公司通过共益实验室 （B Lab）的测试与考核，成为中国 大陆第十三家B Corp。'
                })
              }
            </div>

            <div className="identification-item--right">
              {
                renderIdentificationItem({
                  circleSrc: RightCircleImage,
                  circleLogo: RightLogo,
                  name: '中国慈展会社会企业认证金牌企业',
                  text: '爱照护养老服务公司通过共益实验室 （B Lab）的测试与考核，成为中国 大陆第十三家BCorp。'
                })
              }
            </div>
          </div>
        </div>

        <div className="identification-line" />

        <div className="code-info">
          <div className="code-info--left">
            {
              [productInfo, pcooperationInfo].map((item, index) =>
                <div className="product-service" key={index}>
                  <div className="title">{item.title}</div>
                  {
                    item.infoList.map((itm, idx) => <div className="service-item" key={idx}>{itm.title}</div>)
                  }
                </div>
              )
            }
          </div>

          <div className="code-info--right">
            <QRCode className="qrcode" value="http://facebook.github.io/react/" />
            <QRCode value="http://facebook.github.io/react/" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Identification;
