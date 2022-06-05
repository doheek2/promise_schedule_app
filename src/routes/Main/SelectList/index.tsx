import { HiLocationMarker } from 'react-icons/hi'
import { Idata } from 'types/promise'
import styles from './selectList.module.scss'

interface IProps {
  selectData: Idata[]
}

const SelectList = ({ selectData }: IProps) => {
  return (
    <div className={styles.selectDataWrapper}>
      <h3>Schedule</h3>
      <div className={styles.datasWrapper}>
        {selectData.map((v, i) => {
          const key = `schedule${i}`
          return (
            <div key={key} className={styles.selectData}>
              <div className={styles.data}>
                <p className={styles.scheduleNm} style={{ backgroundColor: v.labelColor }}>
                  {v.scheduleNm}
                </p>
                <p className={styles.placeNm}>
                  <HiLocationMarker />
                  {v.placeNm}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectList
