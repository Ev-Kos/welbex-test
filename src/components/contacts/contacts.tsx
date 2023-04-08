import { FC } from 'react';
import styles from './contacts.module.css';
import { NavLink } from 'react-router-dom';
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';
import viber from '../../images/viber.svg';

type TProps = {
  position: 'header' | 'footer';
}

export const Contacts: FC<TProps> = ({position}) =>{
  return (
   (position === 'header' ? (
    <div className={styles.wrapperForHeader}>
      <p className={styles.contact}>+7 555 555-55-55</p>
      <ul className={styles.socialIcons}>
        <li>
          <NavLink to='#'>
            <img className={styles.icon} src={telegram} alt='Иконка телеграмма'/>
          </NavLink>
        </li>
        <li>
          <NavLink to='#'>
            <img className={styles.icon} src={viber} alt='Иконка вайбера'/>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.icon} to='#'>
            <img className={styles.icon} src={whatsapp} alt='Иконка вотсапа'/>
          </NavLink>
        </li>
      </ul>
    </div>): 
    <div className={styles.wrapperForFooter}>
      <p className={styles.contact}>+7 555 555-55-55</p>
      <ul className={styles.socialIcons}>
        <li>
          <NavLink className={styles.icon} to='#'></NavLink>
        </li>
        <li>
          <NavLink className={styles.icon} to='#'></NavLink>
        </li>
        <li>
          <NavLink className={styles.icon} to='#'></NavLink>
        </li>
      </ul>
      <p className={styles.contact}>Москва, Путевой проезд 3с1, к 902</p>
    </div>)
  )
}