import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'services/firebase'

import { FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './signUp.module.scss'

import MobileWrapper from 'components/MobileWrapper'
import CloseBtn from 'components/CloseBtn'
import Form from 'components/Form'

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUpSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
        console.log(user.email)
        navigate('/login')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message)
      })
  }

  return (
    <MobileWrapper>
      <div className={styles.signUpWrapper}>
        <CloseBtn />
        <h3>Create New Account</h3>
        <p className={styles.signUpText}>Please fill in the forms to continue.</p>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonText='Create on account'
          submitHandler={signUpSubmitHandler}
        />
        <NavLink to='/login' className={styles.text}>
          Already have an account?
        </NavLink>
      </div>
    </MobileWrapper>
  )
}

export default SignUp
