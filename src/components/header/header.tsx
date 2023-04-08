import styles from './header.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Contacts } from '../contacts/contacts';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src={logo} alt='Логотип'/>
        <p className={styles.description}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <NavLink className={styles.link} to='#'>Услуги</NavLink>
          </li> 
          <li>
            <NavLink className={styles.link} to='#'>Виджеты</NavLink>
          </li> 
          <li>
            <NavLink className={styles.link} to='#'>Интеграции</NavLink>
          </li> 
          <li>
            <NavLink className={styles.link} to='#'>Кейсы</NavLink>
          </li> 
          <li>
            <NavLink className={styles.linkHidden} to='#'>Сертификаты</NavLink>
          </li>
        </ul>
        <Contacts position='header'/>
      </nav>

    </header>
  )
}