import { getDatabase, ref, child, get } from 'firebase/database'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link, useNavigate } from 'react-router-dom'
import { BsPlusCircleFill } from 'react-icons/bs'
import { RiHome2Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { auth } from 'services/firebase'
import { isLoggedState, userState } from 'states/recoil'

import MobileWrapper from 'components/MobileWrapper'
import Calendar from './Calendar'
import styles from './main.module.scss'
import { useEffect, useState } from 'react'

const Main = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  const setIsLoggedIn = useSetRecoilState(isLoggedState)
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    const dbRef = ref(getDatabase())
    get(child(dbRef, 'promise'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          const temp = data.filter((v: { user: string | null | undefined }) => v.user === user)
          setUserData(temp)
        }
        // eslint-disable-next-line no-console
        else console.log('no data')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }, [user])

  const logoutClickHandler = () => {
    auth.signOut()
    setIsLoggedIn(false)
    setUser('')
    navigate('/login')
  }

  return (
    <MobileWrapper>
      <section>
        <Calendar userData={userData} />
        <div className={styles.footer}>
          <Link to='/'>
            <RiHome2Line className={styles.homeBtn} />
          </Link>
          <Link to='newSchedule'>
            <BsPlusCircleFill className={styles.plusBtn} />
          </Link>
          <button type='button' onClick={logoutClickHandler}>
            <FiLogOut className={styles.logoutBtn} />
          </button>
        </div>
      </section>
    </MobileWrapper>
  )
}

export default Main
