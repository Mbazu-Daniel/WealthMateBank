import styles from "../constants/style";
import { bank, mockups,wealthmate } from "../public/assets";
import xStyle from "./hero.module.css";
import Image from "next/image";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}  `}
    >
      <div className={`flex-1 flex-row items-center xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary dark:text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text__gradient"> Generation </span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-primary dark:text-white ss:leading-[100px] leading-[75px] w-full">
          Banking System
        </h1>

        <p className={`font-poppins font-normal dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-primary mb-10 `}>
          {" "}
          We are a bank that is setting the pace to give back power to the
          people who ought to possess it.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0  `}>
        {/* <div
          className={`${xStyle.bgIntro} mx-auto order-last md:order-3  overflow-hidden `}
        > */}
          <div className="w-[90%] flex justify-center m-0 p-0 ">
            <Image
              className="object-contain w-[100%] h-[100%] z-[5]"
              src={wealthmate}
              alt="banking"
            />

<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40  white__gradient " />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
          </div>
        {/* </div> */}

        {/* <div className={`hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
