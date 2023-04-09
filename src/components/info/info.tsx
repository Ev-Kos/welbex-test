import styles from './info.module.css';

export const Info = () => {
  return (
    <main className={styles.info}>
      <div className={styles.wrapTittle}>
        <h1 className={styles.title}>Зарабатывайте больше</h1>
        <span className={styles.titleColor}>с WELBEX</span>
        <p className={styles.subtitle}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.wrapPromo}>
        <h2 className={styles.promoTitle}>
          Вместе с 
          <span className={styles.color}>бесплатной консультацией</span>{" "}
          мы дарим:
        </h2>
        <ul className={styles.cards}>
          <li className={styles.card}>
            <h3 className={styles.titleCard}>Виджеты</h3>
            <p className={styles.descriptionCard}>30 готовых решений</p>
          </li>
          <li className={styles.card}>
            <h3 className={styles.titleCard}>Dashboard</h3>
            <p className={styles.descriptionCard}>с показателями вашего бизнеса</p>
          </li>
          <li className={styles.card}>
            <h3 className={styles.titleCard}>Skype аудит</h3>
            <p className={styles.descriptionCard}>отдела продаж и CRM системы</p>
          </li>
          <li className={styles.card}>
            <h3 className={styles.titleCard}>35 дней</h3>
            <p className={styles.descriptionCard}>использования CRM</p>
          </li>
        </ul>
        <ul className={styles.cardsMobile}>
          <li className={styles.card}>
              <h3 className={styles.titleCard}>
                <span className={styles.line}>— &nbsp;</span>
                Skype аудит
              </h3>
          </li>
          <li className={styles.card}>
              <h3 className={styles.titleCard}>
                <span className={styles.line}>— &nbsp;</span>
                30 виджетов
              </h3>
          </li>
          <li className={styles.card}>
              <h3 className={styles.titleCard}>
                <span className={styles.line}>— &nbsp;</span>
                Dashboard
              </h3>
          </li>
          <li className={styles.card}>
            <h3 className={styles.titleCard}>
              <span className={styles.line}>— &nbsp;</span>
              Месяц AMOCRM
            </h3>
          </li>
        </ul>
        <button className={styles.button}>Получить консультацию</button>
      </div>
    </main>
  )
}