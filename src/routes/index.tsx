import { Routes, Route, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isLoggedState } from 'states/recoil'

import Main from './Main'
import Login from './Login'
import SignUp from './SignUp'
import SuccessSignUp from './SignUp/SuccessSignUp'
import NewSchedule from './NewSchedule'

import styles from './routes.module.scss'

const App = () => {
  const isLoggedIn = useRecoilValue(isLoggedState)

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='successSignUp' element={<SuccessSignUp />} />
        <Route path='/' element={isLoggedIn ? <Main /> : <Navigate to='/login' />} />
        <Route path='newSchedule' element={isLoggedIn ? <NewSchedule /> : <Navigate to='/login' />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
