import DatePicker from 'react-datepicker'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { IoCalendarClear } from 'react-icons/io5'
import { FocusEvent, useState } from 'react'
import cx from 'classnames'
import styles from './selectDate.module.scss'
import './datepicker.css'

const SelectDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const inputReadOnlyHandler = (e: FocusEvent<HTMLInputElement>) => e.preventDefault()

  return (
    <div className={styles.selectWrapper}>
      <IoCalendarClear />
      <DatePicker
        selected={startDate}
        className='datepicker'
        dateFormat='yy. MM. dd (eee)'
        disabledKeyboardNavigation
        onChangeRaw={inputReadOnlyHandler}
        onChange={(date: Date | null) => setStartDate(date)}
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
