import React, { useContext, useState } from 'react';
import { DeviceContext } from '../../layout/BasicLayout';
import Header from '../../components/Header';
import Tab from './components/Tab';
import TabBottom from './components/TabBottom';
import './index.scss';

const renderList = [1, 2, 3, 4, 5];

const Design: React.FC = () => {
  const { isMobile } = useContext(DeviceContext);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const getRenderContent = (tabIndex: number) => {
    return (
      <div>{renderList[tabIndex]}</div>
    )
  }

  const getBottomTips = (tabIndex: number) => {
    switch (tabIndex) {
      case 0: return '解决XX问题，满足YY需求，解放ZZ双手';
      case 1: return '享受到社区周边各类护理、健康资源';
      case 2: return '把家变成机构，享受专业护理服务获得自由和效果';
      case 3: return '根据长者个性化需求，针对性服务，获得更好效果'
      default: return '根据长者个性化需求，针对性服务，获得更好效果';
    }
  }

  return (
    <div className={isMobile ? 'mobile-design-container' : 'pc-design-container'}>
      <Header navIndex={3}>
        <Tab clickTabItemHandler={(idx) => setTabIndex(idx)} tabIndex={tabIndex}/>
      </Header>
      <div className="design-content">
        {
          getRenderContent(tabIndex)
        }
      </div>
      <TabBottom tabIndex={tabIndex} linkToNextTab={() => tabIndex < (renderList.length - 1) && setTabIndex(tabIndex + 1)}>
        <span className="bottom-tips-content">{getBottomTips(tabIndex)}</span>
      </TabBottom>
    </div>
  );
};

export default Design;
