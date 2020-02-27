import React, { useContext, useState } from 'react';
import './index.scss';
import BasicLayout, { DeviceContext } from '../../layout/BasicLayout';
import Care from '../care';
import Design from '../design';
import { Route } from 'react-router-dom';

const Home: React.FC = () => {
  const { isMobile } = useContext(DeviceContext);
  const [ pageIndex, setPageIndex ] = useState<number>(1);
  const setPageIndexHandler = (page: number) => {
    setPageIndex(page);
  }

  return (
    <div className={isMobile ? 'mobile-home-container' : 'pc-home-container'}>
      <Route path="/" exact>
        <BasicLayout pageIndex={pageIndex}>
          <Care setPageIndex={(page: number) => { setPageIndexHandler(page) }} />
        </BasicLayout>
      </Route>
      <Route path="/design">
        <Design />
      </Route>
    </div>
  );
};

export default Home;
