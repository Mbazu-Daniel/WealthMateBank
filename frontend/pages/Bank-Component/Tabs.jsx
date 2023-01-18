import React, {useState} from 'react'
import TabContent from './TabContent';
import TabItems from './TabItems';
import tab from "./tabs.module.css"
// import "./tabs.css"
const Tabs = (tabItems) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    

  return (
    <div>
        
        <div className={`${tab.container} text-white dark:bg-gray-400 bg-primary dark:text-primary font-bold font-poppins `} >
        <button
          className={` ${tab.tabs} ${toggleState === 1 ? tab.active_tabs  : tab.tabs}`}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={` ${tab.tabs} ${toggleState === 2 ? tab.active_tabs  : tab.tabs}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={` ${tab.tabs} ${toggleState === 3 ? tab.active_tabs  : tab.tabs}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
        <button
          className={` ${tab.tabs} ${toggleState === 4 ? tab.active_tabs  : tab.tabs}`}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </button>
      </div>

      {/* CONTENT */}
      <div className={` ${tab.content_tabs}  bg-gray-300`} >

<div
          className={` ${tab.content} ${toggleState === 1 ? tab.active_content  : tab.content}`}
        >
<TabItems  />
            </div>
<div
          className={` ${tab.content} ${toggleState === 2 ? tab.active_content  : tab.content}`}
        >
<TabContent/>
            </div>
<div
          className={` ${tab.content} ${toggleState === 3 ? tab.active_content  : tab.content}`}
        >
<TabContent/>
            </div>
<div
          className={` ${tab.content} ${toggleState === 4 ? tab.active_content  : tab.content}`}
        >
<TabContent/>
            </div>
        


    </div>

    </div>
  )
}

export default Tabs