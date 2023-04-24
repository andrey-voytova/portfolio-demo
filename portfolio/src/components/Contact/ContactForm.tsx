import { MutableRefObject, useRef, useState } from 'react';
import ContactInput from './ContactInput';
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
import styles from '../../styles/contact.module.scss';
import { PropagateLoader } from 'react-spinners';

const ContactForm = () => {
    
    const [disabled, setDisabled] = useState(true)
    const [spinner , setSpinner] = useState(false)

    const formRef = useRef() as MutableRefObject<HTMLFormElement>

    const toggleDisabled = () => setDisabled(!disabled)

    const sendEmail = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setSpinner(true)
        emailjs.sendForm('service_e5ti6c4', 'template_63t6n6a', formRef.current, 'UYh-XOfUkV9ONsWTr' )
        .then(result => {
            setSpinner(false)
            toast(`Данные отправлены ${result.text}`)
        }, error => {
            setSpinner(false)
            toast.error(`Данные отправлены ${error.text}`)
        })

        formRef.current.reset()
    }

  return (
    <form onSubmit={sendEmail} ref={formRef} className={styles.contact__form}>
        <ContactInput
            text="Ф.И.О.*"
            placeholder="Укажите ваши Ф.И.О."
            type="text"
            name="fullName" 
        />
        <ContactInput
            text="Должность/компания"
            placeholder="Укажите вашу должность/компанию"
            type="text"
            name="fullName" 
        />
        <ContactInput
            text="E-mail*"
            placeholder="Укажите ваш E-mail"
            type="e-mail"
            name="e-mail" 
        />
        <ContactInput
            text="Телефон*"
            placeholder="Укажите ваш телефон"
            type="pel"
            name="phone" 
        />
        <button 
            className={styles.contact__form__btn}
            disabled={disabled}
        >
           {spinner ? <PropagateLoader color='#fff'/> : "Отправить заявку"}
        </button>
        <label className={styles.contact__checkbox}>
            <input 
                className={styles.contact__checkbox__input} 
                type="checkbox" 
                onChange={toggleDisabled}
            />
            <span className={styles.contact__checkbox__span}/>
            <span className={styles.contact__checkbox__text }>
                Нажимая на кнопку «Отправить заявку», я соглашаюсь с 
                <Link href='/private-police' passHref legacyBehavior ><a className={styles.contact__checkbox__link}> Политикой конфиденциальности</a></Link> и даю Согласие 
                <Link href='/personal-data-of-clients' passHref legacyBehavior><a className={styles.contact__checkbox__link}> на обработку персональных данных.</a></Link> 
            </span>
        </label>
    </form>
  )
}

export default ContactForm