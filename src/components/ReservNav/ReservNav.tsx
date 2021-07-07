import React from 'react'

import s from '../../styles/components/ReservNav.module.sass'

interface ReservNavTypes {
    step: number
}

const ReservNav: React.FC<ReservNavTypes> = ({step}) => {

    return(
        <div className={s.container} >
            <div className={s.item + ' ' + s.active_item}>
                <p>Выбор времени</p>
            </div>
            <div className={s.item + ' ' + (step === 1 ? s.active_item : null)}>
                <p>Контакты</p>
            </div>
            <div className={s.item + ' ' + (step === 2 ? s.active_item : null)}>
                <p>Оплата</p>
            </div>
        </div>
    )
}

export default ReservNav