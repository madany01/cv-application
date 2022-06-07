import React, { Fragment } from 'react'

import styles from './style.module.css'

class HorizontalSeparator extends React.Component {
  render() {
    let { children } = this.props

    if (!Array.isArray(children)) children = [children]

    return (
      <>
        {children.map((child, idx) => (
          <Fragment key={child.key ?? idx}>
            {child}
            {idx !== children.length - 1 && <hr className={styles.hr} />}
          </Fragment>
        ))}
      </>
    )
  }
}

export default HorizontalSeparator
