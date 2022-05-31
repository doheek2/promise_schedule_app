import styles from './login.module.scss'

const Login = () => {
  return (
    <section className={styles.mainWrapper}>
      <h3>Welcome Back !</h3>
      <p>We happy to see you again. To use your account, you should log in first.</p>
      <form>
        <input type='text' placeholder='Email' />
        <p>Invalid e-mail address.</p>
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
