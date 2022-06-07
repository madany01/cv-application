import React from 'react'
import styles from './style.module.css'

class WrappedTwoColsCtr extends React.Component {
  render() {
    const { children } = this.props
    return <div className={styles.ctr}>{children}</div>
  }
}
export default WrappedTwoColsCtr
