import Image from "next/image";
import {  icon } from "../public/assets";
import styles, {layout} from "../constants/style";
import { features } from "../constants";
import Button from "./Button";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card-hover `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-primary  dark:text-white  text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-primary dark:text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Product = () =>  (
  <section id="product" className={layout.section}>
<div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-primary dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full" >
      
      Bank without borders, <br className="sm:block hidden" /> powered by blockchain
      </h2>

      <p className={`"font-poppins font-normal text-primary dark:text-dimWhite text-[18px] leading-[30.8px]" max-w-[470px] mt-5`}>
      Experience decentralized banking on a secure blockchain platform. Easily deposit, transfer, and withdraw money while managing your financial affairs in one place.
      </p>

      <Button styles={`mt-10`} />
</div>

<div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)
export default Product