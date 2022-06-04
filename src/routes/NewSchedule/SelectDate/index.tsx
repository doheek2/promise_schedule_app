import DatePicker from 'react-datepicker'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { IoCalendarClear } from 'react-icons/io5'
import { Dispatch, FocusEvent, SetStateAction, useState } from 'react'
import cx from 'classnames'
import styles from './selectDate.module.scss'
import './datepicker.css'

interface IProps {
  setDate: Dispatch<SetStateAction<Date | null>>
}

const SelectDate = ({ setDate }: IProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const inputReadOnlyHandler = (e: FocusEvent<HTMLInputElement>) => e.preventDefault()

  const dateChangeHandler = (date: Date | null) => {
    setSelectedDate(date)
    setDate(date)
  }

  return (
    <div className={styles.selectWrapper}>
      <IoCalendarClear />
      <DatePicker
        selected={selectedDate}
        className='datepicker'
        dateFormat='yy. MM. dd (eee)'
        disabledKeyboardNavigation
        onChangeRaw={inputReadOnlyHandler}
        onChange={dateChangeHandler}
        customInput={<input type='text' className={styles.datePickerInput} />}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.datePickerHeader}>
            <button
              type='button'
              className={cx(styles.navigation, styles.prevBtn)}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <MdArrowBackIos />
            </button>
            <div className={styles.currentMonth}>
              {date.getFullYear()} {date.getMonth() + 1}
            </div>
            <button
              type='button'
              className={cx(styles.navigation, styles.nextBtn)}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        )}
      />
    </div>
  )
}

export default SelectDate
