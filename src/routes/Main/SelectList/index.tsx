import { HiLocationMarker } from 'react-icons/hi'
import { Idata } from 'types/promise'
import styles from './selectList.module.scss'

interface IProps {
  selectData: Idata[]
}

const SelectList = ({ selectData }: IProps) => {
  return (
    <div className={styles.selectDataWrapper}>
      {selectData.map((v, i) => {
        const key = `schedule${i}`
        return (
          <div key={key} className={styles.selectData} style={{ backgroundColor: v.labelColor }}>
            <div className={styles.data}>
              <p className={styles.scheduleNm}>{v.scheduleNm}</p>
              <p className={styles.placeNm}>
                <HiLocationMarker />
                {v.placeNm}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectList
