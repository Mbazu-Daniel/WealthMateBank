import Image from "next/image";
import { logo, bank } from "../../public/assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={bank}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain "
        />

        <p className={`font-poppins font-normal text-primary dark:text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px] `}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((footerLink, ) => (
          <div
            key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary dark:text-white ">
                  {footerLink.title}  </h4>

            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-primary dark:text-dimWhite hover:text-dimWhite  dark:hover:text-dimBlue cursor-pointer 
                  ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}
                
                `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-primary dark:text-white ">
      Made with <span className="text-red-500" >&#10084;</span>   by Daniel Mbazu
      </p>

      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            } `}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
