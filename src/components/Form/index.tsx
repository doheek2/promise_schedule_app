import { FocusEvent, ChangeEvent, useState, FormEvent, Dispatch, SetStateAction, useEffect } from 'react'

import cx from 'classnames'
import styles from './form.module.scss'

interface IProps {
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  buttonText: string
  submitHandler: (e: FormEvent<HTMLFormElement>) => void
}

const LoginForm = ({ email, setEmail, password, setPassword, buttonText, submitHandler }: IProps) => {
  const [isEmail, setIsEmail] = useState(false)
  const [emailValidText, setEmailValidText] = useState('')
  const [isButtonDisable, setIsButtonDisable] = useState(false)

  useEffect(() => {
    if (isEmail && password.length > 6) setIsButtonDisable(true)
    else setIsButtonDisable(false)
  }, [isEmail, password])

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    const emailValue = e.currentTarget.value

    if (regExp.test(emailValue)) setIsEmail(true)
    else setIsEmail(false)

    setEmail(emailValue)
  }

  const validateEmailHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (isEmail || e.currentTarget.value.length === 0) setEmailValidText('')
    else setEmailValidText('Invalid e-mail address.')
  }

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
      <p className={styles.validateText}>{emailValidText}</p>
      <input type='password' placeholder='Password' onChange={passwordChangeHandler} />
      {isButtonDisable && <button type='submit'>{buttonText}</button>}
      {!isButtonDisable && (
        <button type='submit' className={cx(styles.disabled)} disabled>
          {buttonText}
        </button>
      )}
    </form>
  )
}

export default LoginForm
