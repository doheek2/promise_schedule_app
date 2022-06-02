import { RiCloseFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import styles from './closeBtn.module.scss'

const CloseBtn = () => {
  const navigate = useNavigate()

  const closeHandler = () => {
    navigate(-1)
  }

  return (
    <div className={styles.closeBtnWrapper}>
      <button type='button' onClick={closeHandler}>
        <RiCloseFill className={styles.closeBtn} />
      </button>
    </div>
  )
}

export default CloseBtn
