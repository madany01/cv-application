import React from 'react'

import styles from './style.module.css'

class CVSummaryItem extends React.Component {
  render() {
    const {
      values: { title, organization, fromDate, toDate, description },
    } = this.props

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
}

export default CVSummaryItem
