import { FC } from 'react';
import styles from './contacts.module.scss';
import { NavLink } from 'react-router-dom';
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';
import viber from '../../images/viber.svg';

type TProps = {
  position: 'header' | 'footer' | 'footerMobile';
}

export const Contacts: FC<TProps> = ({position}) =>{
    return (
      <div className={position === 'header' 
        ? styles.wrapperForHeader 
        : position === 'footer' 
        ? styles.wrapperForFooter
        : styles.wrapperForMobile}>
        <p className={styles.contact}>+7 555 555-55-55</p>
        <ul className={position === 'header' 
        ? styles.socialIcons 
        : position === 'footer'
        ? styles.socialIconsFooter
        : styles.socialIconsMobile}>
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
        <p className={position === 'header' 
          ? styles.contactHeader
          : position === 'footer' 
          ? styles.contactFooter
          : styles.contactMobile}>
          Москва, Путевой проезд 3с1, к 902
        </p>
      </div>
    )
  }