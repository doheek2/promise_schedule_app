import { MdLabel } from 'react-icons/md'
import { useRecoilValue } from 'recoil'
import { MouseEvent, useState } from 'react'
import cx from 'classnames'

import CloseBtn from 'components/CloseBtn'
import MobileWrapper from 'components/MobileWrapper'
import SelectDate from './SelectDate'
import KakaoMap from './KakaoMap'

import { colorsState } from 'states/recoil'
import styles from './newSchedule.module.scss'

const NewSchedule = () => {
  const colors = useRecoilValue(colorsState)
  const isSelectColors = Array(colors.length).fill(false)
  const [isSelectColor, setIsSelectColor] = useState(isSelectColors)

  const colorBtnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    const arr = [...isSelectColors]
    arr[index] = true
    setIsSelectColor(arr)
  }

  return (
    <MobileWrapper>
      <div className={styles.newScheduleWrapper}>
        <CloseBtn />
        <input type='text' ref={(input) => input?.focus()} className={styles.titleInput} placeholder='New Schedule' />
        <SelectDate />
        <div className={styles.selectWrapper}>
          <MdLabel />
          <div className={styles.colorPicker}>
            {colors.map((value, i) => {
              return (
                <button
                  key={value}
                  type='button'
                  className={cx([styles.colorBtn], { [styles.selectBtn]: isSelectColor[i] })}
                  value={i}
                  style={{ backgroundColor: value }}
                  onClick={colorBtnClickHandler}
                  aria-label='label'
                />
              )
            })}
          </div>
        </div>
        <KakaoMap />
      </div>
    </MobileWrapper>
  )
}

export default NewSchedule
