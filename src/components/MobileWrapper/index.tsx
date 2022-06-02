import styles from './mobileWrapper.module.scss'

interface IProps {
  children: JSX.Element
}

const MobileWrapper = ({ children }: IProps) => {
  return <section className={styles.mobileWrapper}>{children}</section>
}

export default MobileWrapper
