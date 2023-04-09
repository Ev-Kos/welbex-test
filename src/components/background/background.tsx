import styles from './background.module.scss'

export const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.purpleBall}></div>
      <div className={styles.redBall}></div>
      <div className={styles.redSmallBall}></div>
      <div className={styles.yellowBall}></div>
      <div className={styles.yellowLight}></div>
      <div className={styles.redLight}></div>
      <div className={styles.purpleLight}></div>
      <div className={styles.glass}></div>
    </div>
  )
}