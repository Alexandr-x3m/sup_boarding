import React, { useState, useReducer, useRef } from 'react'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'

import s from '../../styles/containers/Reservation.module.sass'
import Button from '../../components/Inputs/Button'
import TimePicker from '../../components/TimePicker/TimePicker'
import DatePicker from '../../components/Inputs/DatePicker'
import Counter from '../../components/Conuter/Counter'
import ReservNav from '../../components/ReservNav/ReservNav'
import PopUp from '../../containers/PopUp/PopUp'
import Text from '../../components/Inputs/Text'
import Checkbox from '../../components/Checkbox/Checkbox'

type StateTimeInterval = {
    interval: string,
    value: boolean,
    amount: number
}[]

const Reservation: React.FC<{}> = (props) => {

    const [activeStep, setActiveStep] = useState<number>(0)

    //first step of form
    const [date, setDate] = useState<Date>(new Date())
    const [calendar, setCalendar] = useState<boolean>(false)
    const [timeInterval, setTimeInterval] = useState<StateTimeInterval>([
        {
            interval: '11.00 - 12.00',
            amount: 0,
            value: false
        },
        {
            interval: '12.00 - 13.00',
            amount: 6,
            value: false
        },
        {
            interval: '13.00 - 14.00',
            amount: 12,
            value: false
        },
    ])
    const [childPaddle, setChildPaddle] = useState<number>(0)
    const datePicker = useRef<HTMLDivElement | null>(null)

    //second step of form
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [termsOfAgreement, setTermsOfAgreement] = useState<boolean>(false)

    let backStepForm = () => {
        let acStep = activeStep - 1
        if (acStep < 0) return setActiveStep(0)
        return setActiveStep(acStep)
    }
    let nextStepForm = () => {
        let acStep = activeStep + 1
        if (acStep > 1) return setActiveStep(1)
        return setActiveStep(acStep)
    }

    const dayPickHnadler = (value: Date, event: React.MouseEvent<HTMLButtonElement>) => {
        setDate(value)
        setCalendar(!calendar)
    }

    const timeIntervalHandler = (interval: string) => {
        let newArray = timeInterval.map((el) => (
            (el.interval === interval
                ? {
                    ...el,
                    value: !el.value
                } : {
                    ...el
                }
            )
        ))
        setTimeInterval(newArray)
    }


    return (
        <form
            className={s.container}
        >
            <div className={s.window} >
                <ReservNav step={activeStep} />
                <div 
                    className={s.slide_container} 
                    style={{ 
                        left: `-${activeStep}00%`,
                        height: `${activeStep === 0 ? '453px' : '608px'}`
                    }} 
                >
                    <div className={s.step_one + ' ' + s.step_from} >
                        <div className={s.title_container}>
                            <h4 className={s.section_title}>
                                Выберите дату
                            </h4>
                            <div className={s.icon}></div>
                        </div>
                        <section>
                            <div ref={datePicker}>
                                <DatePicker
                                    date={date}
                                    calendar={calendar}
                                    setCalendar={setCalendar}
                                />
                            </div>
                            <PopUp
                                open={calendar}
                                setOpen={setCalendar}
                                arch={datePicker.current}
                                children={
                                    <Calendar
                                        value={date}
                                        onChange={setDate}
                                        view={'month'}
                                        minDetail={'month'}
                                        maxDetail={'month'}
                                        showNavigation={false}
                                        //onClickDay={() => alert('day clicked')}
                                        className={s.calendar}
                                        onClickDay={(value: Date, event: React.MouseEvent<HTMLButtonElement>) => dayPickHnadler(value, event)}
                                    />
                                }
                            />
                        </section>
                        <section>
                            <div className={s.title_container}>
                                <h4 className={s.section_title}>
                                    Выберите удобное время
                                </h4>
                                <div className={s.icon}></div>
                            </div>
                            <div className={s.time_container} >
                                {timeInterval.map((el, index) => (
                                    <TimePicker
                                        key={`time_interval_${el.interval}`}
                                        onChange={timeIntervalHandler}
                                        interval={el.interval}
                                        amount={el.amount}
                                        value={el.value}
                                    />
                                ))}
                            </div>
                        </section>
                        <section>
                            <div className={s.title_container}>
                                <h4 className={s.section_title}>
                                    Добавить детское весло
                                </h4>
                            </div>
                            <Counter
                                score={childPaddle}
                                maxScore={7}
                                setCounter={setChildPaddle}
                            />
                        </section>

                        <section>
                            <div className={s.title_container}>
                                <h4 className={s.section_title}>
                                    Выбать весло (не обязательно)
                                </h4>
                            </div>
                            <section>
                                <div className={s.o}></div>
                            </section>
                        </section>
                        <Button
                            value={'next'}
                            onClick={nextStepForm}
                        />
                    </div>
                    <div className={s.step_two + ' ' + s.step_from} >
                        <div className={s.personal_data}>
                            <Text
                                label={'Фамилия и Имя*'}
                                value={name}
                                setValue={setName}

                            />
                            <Text
                                label={'Электронная почта*'}
                                value={email}
                                setValue={setEmail}

                            />
                            <Text
                                label={'Укажите номер телефона*'}
                                value={phoneNumber}
                                setValue={setPhoneNumber}

                            />
                            <div className={s.check_text} >
                                <Checkbox
                                    value={termsOfAgreement}
                                    setValue={setTermsOfAgreement}
                                    children={
                                        <Link to='google.com/' >Соглашаюсь с условиями использования*</Link>
                                    }
                                />
                            </div>
                        </div>
                        <div className={s.info_block}>
                            <div className={s.main_info}>
                                <div className={s.line_info}>
                                    <p>Длительность катания</p>
                                    <p>{'3'} ч.</p>
                                </div>
                                <div className={s.line_info}>
                                    <p>Доски</p>
                                    <p>{'2'} шт.</p>
                                </div>
                                <div className={s.line_info}>
                                    <p>Детские весла</p>
                                    <p>{'1'} шт.</p>
                                </div>
                                <div className={s.line_info}>
                                    <p>Стоимость</p>
                                    <p>{'3600'} ₽</p>
                                </div>
                            </div>
                            <div className={s.attention_block} >
                                <h4>Внимание</h4>
                                <p>В стоимость часа входит инструктаж по обращению с оборудованием наших инструкторов, пожалуйста не задерживайтесь и приходите немного заранее, чтобы насладиться каждой минутой катания</p>
                            </div>
                        </div>
                        <div className={s.nav_block} >
                            <Button
                                value={'back'}
                                onClick={backStepForm}
                            />
                            <Button
                                value={'pay'}
                                onClick={backStepForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Reservation