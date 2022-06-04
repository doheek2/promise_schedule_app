// import { getDatabase, ref, set } from 'firebase/database'
import { MdLabel } from 'react-icons/md'
import { useRecoilValue } from 'recoil'
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import cx from 'classnames'

import CloseBtn from 'components/CloseBtn'
import MobileWrapper from 'components/MobileWrapper'
import SelectDate from './SelectDate'
import KakaoMap from './KakaoMap'

import { colorsState } from 'states/recoil'
import styles from './newSchedule.module.scss'
import { useNavigate } from 'react-router-dom'

const NewSchedule = () => {
  const navigate = useNavigate()

  const colors = useRecoilValue(colorsState)
  const isSelectColors = Array(colors.length).fill(false)

  const [schedule, setSchedule] = useState('')
  const [, setDate] = useState<Date | null>(new Date())
  const [isSelectColor, setIsSelectColor] = useState(isSelectColors)
  const [place, setPlace] = useState('')
  const [isButtonDisable, setIsButtonDisable] = useState(false)
  // const [user, setUser] = useRecoilState(userState)

  const scheduleRef = useRef<HTMLInputElement>(null)
  const placeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const notSelectColor = isSelectColor.find((v) => v === true)

    if (schedule.length !== 0 && notSelectColor !== undefined && place.length !== 0) {
      setIsButtonDisable(true)
    }
  }, [isSelectColor, place.length, schedule.length])

  const scheduleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setSchedule(e.currentTarget.value)

  const colorBtnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    const arr = [...isSelectColors]
    arr[index] = true
    setIsSelectColor(arr)
  }

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const btnIdx = isSelectColor.findIndex((v) => v === true)

    // const db = getDatabase()
    // set(ref(db, `promise/${user}`), {
    //   date: String(date),
    //   labelColor: colors[btnIdx],
    //   placeNm: placeRef.current?.value,
    //   scheduleNm: scheduleRef.current?.value,
    // })

    navigate('/')
  }

  return (
    <MobileWrapper>
      <div className={styles.newScheduleWrapper}>
        <CloseBtn />
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <input
            type='text'
            ref={scheduleRef}
            className={styles.titleInput}
            value={schedule}
            placeholder='New Schedule'
            onChange={scheduleChangeHandler}
          />
          <SelectDate setDate={setDate} />
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
          <KakaoMap place={place} setPlace={setPlace} ref={placeRef} />
          {isButtonDisable && (
            <button type='submit' className={styles.addBtn}>
              Add Schedule
            </button>
          )}
          {!isButtonDisable && (
            <button type='submit' className={cx([styles.addBtn], [styles.disabled])}>
              Add Schedule
            </button>
          )}
        </form>
      </div>
    </MobileWrapper>
  )
}

export default NewSchedule
