import React, { useContext } from 'react';
import { DeviceContext } from '../../../layout/BasicLayout';

const IzhaohuMap: React.FC = () => {
  const { isMobile } = useContext(DeviceContext);

  return (
    <div className={isMobile ? 'mobile-iacc-map-container' : 'pc-iacc-map-container'}>
      <iframe className="iacc-map" src="https://dolphin.izhaohu.com/portal/iacc-map/" title="izhaohu map"></iframe>
    </div>
  )
}

export default IzhaohuMap;
