import { Link } from 'react-scroll'
import Logo from '../Logo/Logo'
import { useMediaQuery } from '@/hooks'
import { useState } from 'react'
import styles from '../../styles/header.module.scss'
import stylesMobile from '../../styles/mobile.module.scss'

const Header = () => {
    const isMobile = useMediaQuery(640)

    const [openMenu, setOpenMenu] = useState(false)

    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    const currentMenuItemClass = isMobile ? stylesMobile.menu__item : styles.header__nav__list__item

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden')
        setOpenMenu (!openMenu);
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden')
        setOpenMenu (false);
    }

  return (
    <header className={styles.header}>
        <div className={`container ${styles.header__container}`}>
           <Logo/>
           {isMobile && 
            <button onClick={handleToggleMenu} className={`${styles.burger__menu} ${openMenu ? styles.open : ''}`}>
                <span/>
                <span/>
                <span/>
            </button>}
           <nav className={`${ isMobile ? stylesMobile.menu : styles.header__nav} ${openMenu ? stylesMobile.open : ''}`}>
            <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
                <li className={currentMenuItemClass}> 
                    <Link 
                        href='/'
                        to='about'
                        spy={spy}
                        smooth={smooth}
                        offset={offset}
                        duration={duration}
                        className={styles.header__nav__list__item__link}
                    >
                        Обо мне
                    </Link> 
                </li>
                <li className={currentMenuItemClass}> 
                    <Link 
                        href='/'
                        to='skills'
                        spy={spy}
                        smooth={smooth}
                        offset={offset}
                        duration={duration}
                        className={styles.header__nav__list__item__link}
                    >
                        Навыки
                    </Link> 
                </li>
                <li className={currentMenuItemClass}> 
                    <Link 
                        href='/'
                        to='portfolio'
                        spy={spy}
                        smooth={smooth}
                        offset={offset}
                        duration={duration}
                        className={styles.header__nav__list__item__link}
                    >
                        Портфолио
                    </Link> 
                </li>
                <li className={currentMenuItemClass}> 
                    <Link 
                        href='/'
                        to='contact'
                        spy={spy}
                        smooth={smooth}
                        offset={offset}
                        duration={duration}
                        className={styles.header__nav__list__item__link}
                    >
                        Связаться со мной
                    </Link> 
                </li>
            </ul>
           </nav>
        </div>
    </header>
  )
}

export default Header