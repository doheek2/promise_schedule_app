import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import cx from 'classnames'
import { ChangeEvent, MouseEvent, ReactElement, useCallback, useState } from 'react'
import { Idata, IUserData } from 'types/promise'
import SelectList from '../SelectList'
import styles from './calendar.module.scss'

const TODAY = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
  day: new Date().getDay(),
}

const WEEK_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Calendar = ({ userData }: IUserData) => {
  const firebaseData = userData ?? []
  const selectData: Idata[] = []
  const [selectedYear, setSelectedYear] = useState(TODAY.year)
  const [selectedMonth, setSelectedMonth] = useState(TODAY.month)
  const [selectedDate, setSelectedDate] = useState(TODAY.date)
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()
  const copyArr = Array(dateTotalCount).fill(false)
  let isBtnClickedArr = [...copyArr]

  if (firebaseData.length !== 0) {
    firebaseData[0].data.forEach((v) => {
      const year = new Date(v.date).getFullYear()
      const month = new Date(v.date).getMonth() + 1
      const date = new Date(v.date).getDate()

      if (year === selectedYear && month === selectedMonth && date === selectedDate) {
        selectData.push(v)
      }
    })
  }

  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
  }, [selectedMonth, selectedYear])

  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
  }, [selectedMonth, selectedYear])

  const yearControl = useCallback(() => {
    const yearArr = []
    const startYear = TODAY.year - 10
    const endYear = TODAY.year + 10
    for (let i = startYear; i < endYear + 1; i += 1) {
      const key = `year${i}`
      yearArr.push(
        <option key={key} value={i}>
          {i}
        </option>
      )
    }
    return (
      <select className={styles.yearSelect} onChange={changeSelectYear} value={selectedYear}>
        {yearArr}
      </select>
    )
  }, [selectedYear])

  const monthControl = useCallback(() => {
    const monthArr = []
    for (let i = 0; i < 12; i += 1) {
      const key = `month${i + 1}`
      monthArr.push(
        <option key={key} value={i + 1}>
          {i + 1}
        </option>
      )
    }
    return (
      <select onChange={changeSelectMonth} value={selectedMonth}>
        {monthArr}
      </select>
    )
  }, [selectedMonth])

  const changeSelectMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(e.currentTarget.value))
  }
  const changeSelectYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.currentTarget.value))
  }

  const returnWeek = useCallback(() => {
    const weekArr: ReactElement[] = []
    WEEK_LIST.forEach((v) => {
      const key = `week${v}`
      weekArr.push(<time key={key}>{v}</time>)
    })
    return weekArr
  }, [])

  const dateClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const currentDate = Number(e.currentTarget.value)
    setSelectedDate(currentDate)

    isBtnClickedArr = [...copyArr]
    isBtnClickedArr[currentDate - 1] = true
  }

  const returnDay = useCallback(() => {
    const dayArr: ReactElement[] = []
    for (const nowDay of WEEK_LIST) {
      let i = 0
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
      if (WEEK_LIST[day] === nowDay) {
        for (i = 0; i < dateTotalCount; i += 1) {
          const timeKey = `day${i + 1}`
          dayArr.push(
            <button
              type='button'
              key={timeKey}
              onClick={dateClickHandler}
              value={i + 1}
              className={cx(
                {
                  [styles.today]: TODAY.year === selectedYear && TODAY.month === selectedMonth && TODAY.date === i + 1,
                },
                { [styles.weekday]: true },
                {
                  [styles.sunday]: new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0,
                },
                {
                  [styles.clickedDate]: isBtnClickedArr[i],
                }
              )}
            >
              {i + 1}
            </button>
          )
        }
      } else {
        dayArr.push(<div key={nowDay} className={styles.weekday} />)
      }
      if (i === dateTotalCount) break
    }
    return dayArr
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth, dateTotalCount])

  return (
    <section className={styles.calendarWrapper}>
      <div>
        <div className={styles.title}>
          <button type='button' className={styles.prevBtn} onClick={prevMonth}>
            <MdArrowBackIos />
          </button>
          <h3>
            {yearControl()}. {monthControl()}
          </h3>
          <button type='button' className={styles.nextBtn} onClick={nextMonth}>
            <MdArrowForwardIos />
          </button>
        </div>
        <div className={styles.week}>{returnWeek()}</div>
        <div className={styles.date}>{returnDay()}</div>
      </div>
      <SelectList selectData={selectData} />
    </section>
  )
}

export default Calendar
