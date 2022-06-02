import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import cx from 'classnames'
import { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import styles from './calendar.module.scss'

const TODAY = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
  day: new Date().getDay(),
}

const WEEK_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState(TODAY.year)
  const [selectedMonth, setSelectedMonth] = useState(TODAY.month)
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

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
      <select onChange={changeSelectYear} value={selectedYear}>
        {yearArr}
      </select>
    )
  }, [selectedYear])

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

  const returnDay = useCallback(() => {
    const dayArr: ReactElement[] = []

    for (const nowDay of WEEK_LIST) {
      let i = 0
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
      if (WEEK_LIST[day] === nowDay) {
        for (i = 0; i < dateTotalCount; i += 1) {
          const timeKey = `day${i + 1}`
          dayArr.push(
            <time
              key={timeKey}
              className={cx(
                {
                  [styles.today]: TODAY.year === selectedYear && TODAY.month === selectedMonth && TODAY.date === i + 1,
                },
                { [styles.weekday]: true },
                {
                  [styles.sunday]: new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0,
                }
              )}
            >
              {i + 1}
            </time>
          )
        }
      } else {
        dayArr.push(<div key={nowDay} className={styles.weekday} />)
      }
      if (i === dateTotalCount) break
    }

    return dayArr
  }, [selectedYear, selectedMonth, dateTotalCount])

  return (
    <section className={styles.calendarWrapper}>
      <div className={styles.title}>
        <button type='button' className={styles.prevBtn} onClick={prevMonth}>
          <MdArrowBackIos />
        </button>
        <h3>
          {yearControl()}년 {monthControl()}월
        </h3>
        <button type='button' className={styles.nextBtn} onClick={nextMonth}>
          <MdArrowForwardIos />
        </button>
      </div>
      <div className={styles.week}>{returnWeek()}</div>
      <div className={styles.date}>{returnDay()}</div>
    </section>
  )
}

export default Calendar
