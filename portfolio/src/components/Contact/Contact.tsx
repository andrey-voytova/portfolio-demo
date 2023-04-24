import MainTitle from "../common/MainTitle/MainTitle";
import ArrowSVG from "../common/ArrowSVG/ArrowSVG";
import styles from "../../styles/contact.module.scss";
import SocialList from "./SocialList";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.contact__right} id="contact">
        <div className="container">
            <MainTitle text={"НАПИШИТЕ МНЕ"} />
        </div>
        <div className="sub-container">
          <div className={styles.contact__inner}>
            <div className={styles.contact__left}>
            <p className={styles.contact__text}>
              Вы работаете над чем-то великим? <br />
              Я с удовольствием помогу вам в этом! <br />
              Напишите мне письмо и мы начнем проект прямо сейчас!            
            </p>
            <p className={styles.contact__text}>
              Просто сделай это 
            </p>
            <h3 className={styles.contact__title}>
              <span className={styles.contact__title__text}> Я в соцсетях: </span>
              <span className={styles.contact__title__arrow}> <ArrowSVG/> </span>
              <span className={styles.contact__title__border}/>
            </h3>
            <SocialList/>
            </div>
            <div className={styles.contact__right}>
              <ContactForm/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact