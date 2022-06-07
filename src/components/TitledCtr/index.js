import React from 'react'
import styles from './style.module.css'

class TitledCtr extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className={styles.TitledCtr}>
        <p className={styles.titledCtr__title}>{title}</p>
        <div className={styles.titledCtr__content}>{children}</div>
      </div>
    )
  }
}

export default TitledCtr
