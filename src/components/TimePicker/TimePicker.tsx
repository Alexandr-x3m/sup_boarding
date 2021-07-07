import React from 'react'

import s from '../../styles/components/TimePicker.module.sass'

interface TimePickerTypes {
    value: boolean,
    amount: number,
    interval: string,
    onChange: Function
}

const TimePicker: React.FC<TimePickerTypes> = ({ onChange, value, interval, amount }) => {
    
    return (
        <>
            <input
                id={`time_check_${interval}`}
                type="checkbox"
                disabled={amount === 0 ? true : false}
                checked={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(interval)}
            />
            <label
                htmlFor={`time_check_${interval}`}
            >
                <div
                    className={s.container + ' ' +
                        (amount === 0 ? s.empty_boards : s.full_boards) + ' ' +
                        (value ? s.focus_time : null)
                    }
                >
                    <p className={s.amounts}>
                        <mark className={s.marker}>
                            Свободно
                        </mark> - {amount} sup'ов
                    </p>
                    <p className={s.interval}>
                        {interval}
                    </p>
                </div>
            </label>

        </>
    )
}

export default TimePicker