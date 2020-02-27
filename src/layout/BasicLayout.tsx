import React from 'react';
import HeaderComponent from '../components/Header';
import './index.scss';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const DeviceContext = React.createContext({ isMobile });
export interface BasicLayoutProps {
  children: React.ReactNode;
  pageIndex: number;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const selectIndexHandler = (index: number) => {
    console.log(index);
  };

  return (
    <div className={isMobile ? 'mobile-basic-container' : 'pc-basic-container'}>
      <HeaderComponent
        navIndex={props.pageIndex}
        selectIndexHandler={index => selectIndexHandler(index)}
      />
      <div className="basic-body">{props.children}</div>
    </div>
  );
};

export default BasicLayout;
