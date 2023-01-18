import CTA from "./components/CTA";
import {
  Services, Footer, Hero, Navbar, Product,Header, Menu
} from "./components/import";
import styles from "./style";

export default function Home() {
  return (
    <div className="  bg-gray-300 text-primary  dark:text-white dark:bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header props={<Menu/>}/>
        </div>
      </div>

      <div className={` bg-gray-300 dark:bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`dark:bg-primary bg-gray-300  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

        <Product /> 
        <Services /> 
        
        <CTA/>
        <Footer />


        </div>
      </div>
    </div>
  );
}
