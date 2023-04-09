import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';
import { Contacts } from '../contacts/contacts';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div className={styles.content}>
        <nav className={styles.about}>
          <h2 className={styles.title}>О компании</h2>
          <ul className={styles.links}>
            <li>
              <NavLink className={styles.link} to="#">Партнерская программа</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="#">Вакансии</NavLink>
            </li>
          </ul>
        </nav>
        <nav className={styles.menu}>
          <h2 className={styles.title}>Меню</h2>
          <ul className={styles.links}>
            <li>
              <NavLink className={styles.linkMenu} to="#">Расчёт стоимости</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Услуги</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Виджеты</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Интеграции</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Наши клиенты</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Кейсы</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Благотворительные письма</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Сертификаты</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Блок на Youtube</NavLink>
            </li>
            <li>
              <NavLink className={styles.linkMenu} to="#">Вопрос / Ответ</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <h2 className={styles.title}>Контакты</h2>
          <Contacts position='footer'/>
          <Contacts position='footerMobile'/>
        </div>
        <div className={styles.wrapCopyright}>
          <p className={styles.copyright}>&copy;WELBEX 2022. Все права защищены.</p>
          <p className={styles.copyrightPolitics}>Политика конфиденциальности</p>
        </div>
      </div> 
    </footer>
  )
}