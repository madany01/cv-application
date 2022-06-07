import React from 'react'
import githubLogo from './github.svg'
import styles from './style.module.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p className={styles.copyright}>copyright &copy; 2022 Ahmad Madany</p>
        <a href="https://github.com/madany01/cv-application" className={styles.logo}>
          <img src={githubLogo} alt="github logo" />
        </a>
      </footer>
    )
  }
}

export default Footer
