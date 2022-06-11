import styles from './style.module.css'

function PersonalSummary({ values }) {
  const { firstName, lastName, email, phoneNumber } = values

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

export default PersonalSummary
