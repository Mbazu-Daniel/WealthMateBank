import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from "../constants/style"


export default function Home() {
  return (
    
    <div className="  bg-gray-300 text-primary  dark:text-white dark:bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header props={<Menu />}/>
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
