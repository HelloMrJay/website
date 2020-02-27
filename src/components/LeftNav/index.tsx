import React, { useContext } from 'react';
import { DeviceContext } from '../../layout/BasicLayout';
import './index.scss';

export interface LeftNavProps {
  navIndex: number;
  selectNumber: (number: number) => void;
}

const pageArray = ['01', '02', '03'];

const LeftNav: React.FC<LeftNavProps> = props => {
  const { isMobile } = useContext(DeviceContext);
  const { selectNumber } = props;

  return (
    <div className={isMobile ? 'mobile-left-nav-container' : 'pc-left-nav-container'} style={{zIndex: 100}}>
      {pageArray.map((page, index) => (
        <div
          className="page-number-item ignore-font16"
          key={index}
          style={{ color: props.navIndex === Number(page) ? props.navIndex === 3 ? '#333333' : '#FFFFFF' : '#A2A2A2' }}
          onClick={() => selectNumber(Number(page))}
        >
          {page}
        </div>
      ))}
      <div className="line-bar-wrapper">
        <div className={ props.navIndex === 3 ? 'line white-bg' : 'line'}></div>
      </div>
      <div className={ props.navIndex === 3 ? 'home-tips white-bg' : 'home-tips'}>更便宜、更快捷、更专业、更愉悦</div>
    </div>
  );
};

export default LeftNav;
