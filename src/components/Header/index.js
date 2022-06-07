import React from 'react'
import styles from './style.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>CV App</div>
      </header>
    )
  }
}

export default Header
