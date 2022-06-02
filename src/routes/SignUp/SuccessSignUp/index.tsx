import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import MobileWrapper from 'components/MobileWrapper'
import styles from './successSignUp.module.scss'

const SuccessSignUp = () => {
  return (
    <MobileWrapper>
      <div className={styles.successSignUpWrapper}>
        <h3>Congratulations!</h3>
        <BsFillPatchCheckFill />
        <p>Your account has been successfully created.</p>
        <Link to='/login'>
          <button type='button'>OK</button>
        </Link>
      </div>
    </MobileWrapper>
  )
}

export default SuccessSignUp
