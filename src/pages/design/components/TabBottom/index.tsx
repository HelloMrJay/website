import React from 'react';
import { Button } from 'antd';
import './index.scss';

export interface TabBottomProps {
  children?: React.ReactNode,
  linkToNextTab: () => void;
  tabIndex: number
}

const TabBottom: React.FC<TabBottomProps> = (props) => {
  const { children, linkToNextTab, tabIndex } = props
  return (
    <div className="tab-bottom-container">
      <div className="tab-bottom-container__left">
        <div className="can-get-title">爱照护为您带来</div>
        <div className="current-tab-tips">{children}</div>
        <div className="less-price-text">
          <div className="price">￥1000/月起</div>
          <div className="tips">实际价格</div>
        </div>
        <div className="less-price--unit-text">
          <div className="price">￥500/月</div>
          <div className="tips">相比传统机构的节省</div>
        </div>
      </div>

      <div className="tab-bottom-container__right">
        <div className="btn-wrapper">
          <Button type="primary" shape="round" block onClick={() => linkToNextTab()}>{tabIndex === 4 ? '提交预约/订单' : '下一步'}</Button>
        </div>
      </div>
    </div>
  )
}

export default TabBottom;
