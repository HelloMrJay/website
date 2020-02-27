import React, { useState, useContext } from 'react';
import { DeviceContext } from '../../layout/BasicLayout';
import { useHistory } from 'react-router-dom';
import './index.scss';
import IzhaohuImage from '../../assets/images/izhaohu_name.png';
import LanguageImage from '../../assets/images/language.png';
import IzhaohuNameWhite from '../../assets/images/izhaohu_name_white.png';

const menus = ['家庭照护', '爱照护联盟', '医养结合'];

export interface HeaderProps {
  selectIndexHandler?: (index: number) => void;
  navIndex: number;
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = props => {
  const { isMobile } = useContext(DeviceContext);
  const { selectIndexHandler, children, navIndex } = props;

  const [selectIndex, setSelectIndex] = useState<number>(0);
  const setMenuIndex = (idx: number) => {
    setSelectIndex(idx);
    selectIndexHandler && selectIndexHandler(idx);
  };

  const history = useHistory();

  return (
    <div
      className={
        isMobile ? 'mobile-header-container': `pc-header-container ${navIndex === 3 ? ' bg-white' : 'bg-gray'}`
      }
      style={{ zIndex: 100 }}
    >
      {
        props.navIndex === 3 && <div className="abs-line"></div>
      }
      <div className="header-left__wrapper">
        <img
          className="image"
          src={props.navIndex === 3 ? IzhaohuNameWhite : IzhaohuImage}
          alt=""
          onClick={() => history.push('/')}
        />
      </div>
      <div className="header-center__wrapper">
        {
          !children && menus.map((menu, idx) => (
            <span
              key={menu}
              className="menu-item pointer"
              style={{
                opacity: idx === selectIndex ? '1' : '0.63'
              }}
              onClick={() => setMenuIndex(idx)}
            >
              {menu}
            </span>
          ))
        }
        {
          children
        }
      </div>
      <div className="header-right__wrapper ignore-font16">
        <span className="izhaohu-mobile pointer">400-006-3300</span>
        <span className="split pointer" style={{background: props.navIndex === 3 ? 'rgba(0, 0, 0, 0.75)' : ''}}></span>
        <span className="izhaohu-login pointer">登录</span>
        <span className="language-text pointer">中文</span>
        <img src={LanguageImage} className="language-image" alt="" />
      </div>
    </div>
  );
};

export default Header;
