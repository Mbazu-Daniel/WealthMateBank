import React from "react";
import styles from "../constants/style";

import feature from "./feature.module.css";

const Feature = ({ title, content }) => {
  return (
    <div className={`${styles.flexCenter} flex-col mt-10 sm:mt-0`}>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
      >
        <div
          className={`${styles.flexCenter} flex-row bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <h1 className="font-poppins font-medium text-[18px] leading-[23px]  text__gradient">
              {title}
            </h1>
          </div>
        </div>
      </div>

<div className={`${feature.feature_title_div} mt-10 `} > </div>
<div className={`${feature.feature_text} flex justify-center items-center `}>
        <p
          className={` font-poppins  leading-3.5 flex justify-center items-center w-[75%] text-justify`}
        >
          {content}
        </p>
      </div>

</div>
      
   
  
  );
};

export default Feature;
