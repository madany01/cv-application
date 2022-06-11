import styles from './style.module.css'

function TitledCtr({ title, children }) {
  return (
    <div className={styles.TitledCtr}>
      <p className={styles.titledCtr__title}>{title}</p>
      <div className={styles.titledCtr__content}>{children}</div>
    </div>
  )
}

export default TitledCtr
