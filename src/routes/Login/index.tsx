import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from 'services/firebase'

import { FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'

import MobileWrapper from 'components/MobileWrapper'
import Form from 'components/Form'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = signInWithEmailAndPassword(auth, email, password)
    console.log(result)
    navigate('/')

    onAuthStateChanged(auth, (user) => {
      if (user) console.log(user)
      else console.log('logout')
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
