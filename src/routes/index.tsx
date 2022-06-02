import { Routes, Route, Navigate } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from './Main'
import Login from './Login'
import SignUp from './SignUp'
import SuccessSignUp from './SignUp/SuccessSignUp'

const App = () => {
  const isLoggedIn = false

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='successSignUp' element={<SuccessSignUp />} />
        <Route path='/' element={isLoggedIn ? <Main /> : <Navigate to='/login' />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
