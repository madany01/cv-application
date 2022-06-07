import React from 'react'
import styles from './style.module.css'

class PersonalSummary extends React.Component {
  render() {
    const {
      values: { firstName, lastName, email, phoneNumber },
    } = this.props

    return (
      <div className="flexCol gap--md">
        <div className={styles.personalSummary}>
          <p className={styles.name}>
            {firstName} {lastName}
          </p>
          <p className={styles.email}>{email}</p>
          <p className={styles.phone}>{phoneNumber}</p>
        </div>
      </div>
    )
  }
}

export default PersonalSummary
