import React, { useState, useEffect, useRef } from 'react'
import Calendar from 'react-calendar'
import PopUp from '../../containers/PopUp/PopUp'

import s from '../../styles//components/DatePicker.module.sass'
import '../../../node_modules/react-calendar/dist/Calendar.css'
import Text from '../Inputs/Text'

interface DatePickerTypes {
    date: Date,
    calendar: boolean,
    setCalendar: React.Dispatch<React.SetStateAction<boolean>>
}

const DatePicker: React.FC<DatePickerTypes> = ({ date, calendar, setCalendar }) => {

    const monthsBase = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    const [dateVal, setDateVal] = useState<string>(`${date.getDate()} ${monthsBase[date.getMonth()]} ${date.getFullYear()}`)

    let showCalendar = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCalendar(!calendar)
    }

    useEffect(() => {
        if (dateVal !== `${date.getDate()} ${monthsBase[date.getMonth()]} ${date.getFullYear()}`) (
            setDateVal(`${date.getDate()} ${monthsBase[date.getMonth()]} ${date.getFullYear()}`)
        )
    }, [date])

    return (
        <div className={s.container}>
            <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => showCalendar(e)}
                className={s.btn}
            >
                {dateVal}
                <div className={s.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 2H16C17.1 2 18 2.9 18 4V18C18 19.1 17.1 20 16 20H2C0.89 20 0 19.1 0 18L0.01 4C0.01 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2ZM2 8V18H16V8H2ZM16 6H2V4H16V6ZM14 11H9V16H14V11Z" fill="#5A5A5A" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default DatePicker