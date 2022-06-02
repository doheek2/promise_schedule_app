import MobileWrapper from 'components/MobileWrapper'
import Calendar from './Calendar'
import styles from './main.module.scss'

const Main = () => {
  return (
    <MobileWrapper>
      <section>
        <Calendar />
        <div className={styles.footer}>
          <button type='button' className={styles.addBtn}>
            +
          </button>
        </div>
      </section>
    </MobileWrapper>
  )
}

export default Main
