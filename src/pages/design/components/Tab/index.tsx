import React, { useRef, useState, useEffect } from 'react';
import anime from 'animejs';
import './index.scss';

const tabConfigs = [
  {
    title: '1.需求',
    subTitle: '更便宜'
  },
  {
    title: '2.在哪',
    subTitle: '更快速'
  },
  {
    title: '3.服务',
    subTitle: '更专业'
  },
  {
    title: '4.个性化',
    subTitle: '更便宜'
  },
  {
    title: '5.预定',
    subTitle: '更放心'
  }
]

export interface TabProps {
  clickTabItemHandler: (tabItem: number) => void;
  tabIndex: number;
}

const Tab: React.FC<TabProps> = (props) => {
  const { tabIndex } = props;
  const commonItemRef = useRef<HTMLDivElement>(null);
  const bodyWidth = document.body.clientWidth

  const clickTabItemHandler = (idx: number) => {
    if (commonItemRef.current?.clientWidth) {
      anime({
        targets: '.tab-item-underline',
        translateX: (commonItemRef.current?.clientWidth + 96 * bodyWidth / 1920) * idx
      });

      props.clickTabItemHandler(idx);
    }
  }

  useEffect(() => {
    clickTabItemHandler(tabIndex);
  }, [tabIndex])

  return (
    <div className="tab-container">
      <div className="tab-group">
        {
          tabConfigs.map((itm, idx) =>
            <div className="tab-item" key={idx} onClick={() => {clickTabItemHandler(idx)}} ref={commonItemRef}>
              <span className="title">{itm.title}</span>
              <span className="sub-title">{itm.subTitle}</span>
            </div>
          )
        }
        <div className="tab-item-underline" />
      </div>
    </div>
  )
}

export default Tab;
