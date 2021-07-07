import React from 'react'

import s from '../../styles/components/Counter.module.sass'

interface CounterTypes { 
    score: number, 
    maxScore: number,
    setCounter:  React.Dispatch<React.SetStateAction<number>> 
}

const Counter: React.FC<CounterTypes> = ({ score, setCounter, maxScore }) => {

    const increaseConter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (score >= maxScore) return setCounter(score)
        return setCounter(++score)
    }

    const decreaseCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (score <= 0) return setCounter(score)
        return setCounter(--score)
    }
    
    return (
        <div className={s.container} >
            <button 
                className={s.decrease_btn + ' ' + s.btn}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => decreaseCounter(e)}
            >
                -
            </button>
            <span>
                {score}
            </span>
            <button
                className={s.increase_btn + ' ' + s.btn}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => increaseConter(e)}
            >
                +
            </button>
            <span>
                осталось весел {maxScore}
            </span>
        </div>
    )
}

export default Counter