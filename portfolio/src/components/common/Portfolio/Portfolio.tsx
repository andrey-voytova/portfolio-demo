import MainTitle from "../MainTitle/MainTitle"
import { useState } from "react"
import PortfolioTabControl from "./PortfolioTabControl"
import { portfolioItems, portfolioItemsAll, portfolioItemsInterface, portfolioItemsUi, portfolioItemsWeb } from "./portfolioTabsContent"
import PortfolioTabContent from "./PortfolioTabContent"
import { AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks"
import PortfolioSlider from "./PortfolioSlider"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "../../../styles/portfolio.module.scss"

const Portfolio = () => {

    const isMobile = useMediaQuery(1080)

    const [tabWeb , setTabWeb] = useState(true)
    const [tabUi , setTabUi] = useState(false)
    const [tabInterface , setTabInterface] = useState(false)
    const [tabAllProducts , setTabAllProducts] = useState(false)
    const [hiddenPortfolioItems , setHiddenPortfolioItems] = useState(false)

    const toggleHiddenPortfolioItem = () => setHiddenPortfolioItems(!hiddenPortfolioItems)

    const handleShowTabWeb = () => {
        setTabWeb(true);
        setTabUi(false);
        setTabInterface(false);
        setTabAllProducts(false);
    }
    const handleShowTabUi = () => {
        setTabWeb(false);
        setTabUi(true);
        setTabInterface(false);
        setTabAllProducts(false);
    }
    const handleShowTabInterface = () => {
        setTabWeb(false);
        setTabUi(false);
        setTabInterface(true);
        setTabAllProducts(false);
    }
    const handleShowTabAllProducts = () => {
        setTabWeb(false);
        setTabUi(false);
        setTabInterface(false);
        setTabAllProducts(true);
    }

    const portfolioTabControls = [
        {id: 1, title: 'Веб-сайты', isActive: tabWeb, handler: handleShowTabWeb},
        {id: 2, title: 'UI/UX дизайн', isActive: tabUi, handler: handleShowTabUi},
        {id: 3, title: 'Внешний интерфейс', isActive: tabInterface, handler: handleShowTabInterface},
        {id: 4, title: 'Все проекты', isActive: tabAllProducts, handler: handleShowTabAllProducts},
    ]
  return (
    <section className={styles.portfolio} id="portfolio">
        <div className="container">
            <MainTitle text={"ПОРТФОЛИО"} />
        </div>
        <div className="sub-container">
            <div className={styles.portfolio__inner}>
                <ul className={styles.portfolio__tabs}>
                    {portfolioTabControls.map(item => (
                        <PortfolioTabControl 
                            title={item.title}
                            isActive={item.isActive}
                            handelShowTab={item.handler} 
                            key={item.id}/>
                    ))}
                </ul>
            </div>
           { !isMobile && <ul className={styles.portfolio__list}>
                {tabWeb && <PortfolioTabContent tabItems={portfolioItemsWeb}/>}            
                {tabUi && <PortfolioTabContent tabItems={portfolioItemsUi}/>}            
                {tabInterface && <PortfolioTabContent tabItems={portfolioItemsInterface}/>}            
                {tabAllProducts && <PortfolioTabContent tabItems={portfolioItemsAll}/>}    
                <AnimatePresence>
                    {hiddenPortfolioItems && <PortfolioTabContent tabItems={portfolioItems}/>}
                </AnimatePresence>        
            </ul>}
            { !isMobile && <div className={styles.portfolio__wrapper}>
                <button className={styles.portfolio__more} onClick={toggleHiddenPortfolioItem}>
                    <span className={styles.portfolio__more__text}>
                    { hiddenPortfolioItems ? "Скрыть" : "Показать еще проекты"}
                    </span>
                    <span className={styles.portfolio__more__border}/>
                </button>
           </div>}
        </div>
        {isMobile && 
            <div className={styles.portfolio__list__mobile}>
                <div  className={styles.portfolio__list__mobile__container}>
                    {tabWeb && <PortfolioSlider tabItems={portfolioItemsWeb} />}
                    {tabUi && <PortfolioSlider tabItems={portfolioItemsUi} />}
                    {tabInterface && <PortfolioSlider tabItems={portfolioItemsInterface} />}
                    {tabAllProducts && <PortfolioSlider tabItems={portfolioItemsAll} />}
                </div>
            </div>}
    </section>
  )
}

export default Portfolio
