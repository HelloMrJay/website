import React, { useContext } from 'react';
import { DeviceContext } from '../../../layout/BasicLayout';
import './index.scss';
import IzhaohuLogo from '../../../assets/images/izhaohu_logo.png';
import { useHistory } from 'react-router-dom';

const Introduce: React.FC = () => {
  const { isMobile } = useContext(DeviceContext);
  const history = useHistory();

  return (
    <div className={isMobile ? 'mobile-page-one-container' : 'pc-page-one-container'}>
      <div className="page-one-content">
        <div className="page-one-content-wrapper">
          <img src={IzhaohuLogo} alt="" />
          <div className="tab-title">家庭照护</div>
          <div className="font20">面向成效的健康服务</div>
          <div className="font20">让每位失能失智老人可以与家人生活更长</div>
        </div>
        <div className="btn-group">
          <div className="service-customize-btn" onClick={() => history.push('/design')}>定制服务</div>
          <div className="service-learn-btn">了解家庭照护</div>
        </div>
        <div className="page-one-tips">您可在三日内免费体验</div>
      </div>
    </div>
  );
};

export default Introduce;
