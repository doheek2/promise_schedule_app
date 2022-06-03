import MobileWrapper from 'components/MobileWrapper'
import { NavLink } from 'react-router-dom'
import Calendar from './Calendar'
import styles from './main.module.scss'

const Main = () => {
  return (
    <MobileWrapper>
      <section>
        <Calendar />
        <div className={styles.footer}>
          <NavLink to='newSchedule'>+</NavLink>
        </div>
      </section>
    </MobileWrapper>
  )
}

export default Main
