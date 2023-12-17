import React,{useState} from 'react'
import './style.scss'

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);


    //for changing the value of left,from 0 to 100 and 100 to 0
    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index)
    }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab, index) => (
            <span key={index} className={`tabItem ${selectedTab === index ? "active" : ""}`} onClick={() => activeTab(tab, index)}>
                {tab}
            </span>
        ))}
        <span className="movingBg" style={{left : left}} />
      </div>
    </div>
  )
}

export default SwitchTabs
