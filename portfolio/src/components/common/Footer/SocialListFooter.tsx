import styles from "../../../styles/socialListFooter.module.scss"

const SocialListFooter = () =>  {
  return (
    <ul className={styles.social__list}>
    <li className={styles.social__list__item}>
      <a className={styles.social__list__item__link} href="">
        <span className={styles.social__list__item__link__text}>ВКонтакте</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
          <img className={styles.social__list__item__link__img} src="/img/vk.svg" alt="ВКонтакте" />
        </span>
      </a>
    </li>
    <li className={styles.social__list__item}>
      <a className={styles.social__list__item__link} href="">
        <span className={styles.social__list__item__link__text}>YouTube</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__ut}`}>
          <img className={styles.social__list__item__link__img} src="/img/u-tube.svg" alt="YouTube" />
        </span>
      </a>
    </li>
  </ul>
  )
}

export default SocialListFooter