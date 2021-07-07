import React from 'react'

import s from '../../styles/inputs/Button.module.sass'

interface ButtonTypes {
    value: string,
    onClick: Function
}

const Button: React.FC<ButtonTypes> = ({value, onClick}) => {

    return (
        <div className={s.container}>
            <input type="button" 
                value={value}
                onClick={(e: React.MouseEvent<HTMLInputElement>) => onClick(e)}
                className={s.input}
            />

        </div>
    )
}

export default Button