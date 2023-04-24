import styles from "../../../styles/portfolio.module.scss"

interface IPortfolioSlideItem {
      imgSrc: string;
      link: string;
      title: string;
  }

const PortfolioSliderItem = ({title, imgSrc, link} : IPortfolioSlideItem) => {
  return (
    <div className={styles.portfolio__slide}>
        <a className={styles.portfolio__slide__link} href={link}>
            <span className={styles.portfolio__inner}>
                <span className={styles.portfolio__text}>
                    {title}
                </span>
            </span>
            <img className={styles.portfolio__img} src={imgSrc} alt={title} />
        </a>
    </div>
  )
}

export default PortfolioSliderItem