import styles from './style.module.css'

function WrappedTwoColsCtr({ children }) {
  return <div className={styles.ctr}>{children}</div>
}
export default WrappedTwoColsCtr
