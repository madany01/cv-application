import styles from './style.module.css'

function CVSummaryItem({ values }) {
  const { title, organization, fromDate, toDate, description } = values

  return (
    <div className={styles.infoSection}>
      <div className={styles.top}>
        <p className={styles.title}>{title}</p>
        <div className={styles.right}>
          <span className={styles.org}>{organization}</span>
          <span className={styles.sep}>|</span>
          <span className={styles.date}>
            {fromDate} - {toDate}
          </span>
        </div>
      </div>
      <p className={styles.description}>{description} </p>
    </div>
  )
}

export default CVSummaryItem
