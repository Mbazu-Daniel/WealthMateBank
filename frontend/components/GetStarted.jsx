import Image from "next/image";
import Link from "next/link";
import {  arrowUp } from "../public/assets";
import styles from "../constants/style";

const GetStarted = () => (

  <Link href="/bank/dashboard">
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full box__gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text__gradient">Get</span>
          
        </p>
        <Image
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text__gradient">Started</span>
        
      </p>
    </div>
  </div>
  </Link>
);

export default GetStarted;
