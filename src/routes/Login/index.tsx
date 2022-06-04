import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from 'services/firebase'

import { useSetRecoilState } from 'recoil'
import { NavLink, useNavigate } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import { isLoggedState, userState } from 'states/recoil'

import MobileWrapper from 'components/MobileWrapper'
import Form from 'components/Form'
import styles from './login.module.scss'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setIsLoggedIn = useSetRecoilState(isLoggedState)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.email?.split('@')[0]
        setUser(userId)
      } else {
        setUser('')
      }
    })
  }, [setIsLoggedIn, setUser])

  const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setIsLoggedIn(true)
      navigate('/')
    })
  }

  return (
    <MobileWrapper>
      <div className={styles.loginWrapper}>
        <h3>Welcome Back !</h3>
        <p className={styles.loginText}>We happy to see you again. To use your account, you should log in first.</p>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonText='Login'
          submitHandler={loginSubmitHandler}
        />
        <div className={styles.signUpTextWrapper}>
          <p className={styles.loginText}>Don&apos;t have an account?</p>
          <NavLink to='/signUp' className={styles.signUpText}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </MobileWrapper>
  )
}

export default Login
