import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/global/button';
import Resume from '../types/tabs';

function TabNav({ items: any }) {
  const [activeTab, setActiveTab] = React.useState(items[3].id);
  const [activeContent, setActiveContent] = React.useState(items[3].content);
  const tabsRef = React.useRef(null);
  React.useEffect(() => {
    const currentItem = items.find((item) => item.id === activeTab);
    setActiveContent(currentItem.content);
  }, [items, activeTab]);
  const buttonClickHandler = (e) => {
    setActiveTab(e.target.dataset.id);

    // let elemCord = e.target.getBoundingClientRect();
    // NOTE: not working as expected
    // tabsRef.current.scrollTo({
    //   left: elemCord.left,
    //   top: 0,
    //   behavior: "smooth"
    // });

    // NOTE: Looks better if you don't have body horizontal scroll
    e.target.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };
  return (
    <div className="tabs">
      <div className="tabs-nav" ref={tabsRef}>
        {items &&
          items.map((item) => (
            <Button
              className={`tabs-button ${activeTab === item.id && 'active'}`}
              data-id={item.id}
              key={item.id}
              onClick={buttonClickHandler}
              disabled={item.disabled}
            >
              {item.title}
            </Button>
          ))}
      </div>
      {activeContent && <TabContent content={activeContent} />}
    </div>
  );
}
const TabContent = ({ content }) => {
  return <div className="tabs-content">{content}</div>;
};
export default TabNav;
