import React from 'react'

import s from '../../styles/inputs/Text.module.sass'

interface TextTypes {
    label: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Text: React.FC<TextTypes> = ({label, value, setValue, ...props}) => {

    return (
        <div className={s.container} >
            <input 
                id={`inputText_${label}`}
                className={s.input}
                type="text" 
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                {...props}
            />
            <label 
                htmlFor={`inputText_${label}`}
                className={s.label}
            >
                {label}
            </label>
        </div>
    )
}

export default Text