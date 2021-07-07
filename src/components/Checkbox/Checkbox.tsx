import React from 'react'

import s from '../../styles/components/Checkbox.module.sass'

interface CheckboxTypes {
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
    label?: string,
    children?: React.ReactChild
}

const Checkbox: React.FC<CheckboxTypes> = ({ value, setValue, label, children }) => {

    return (
        <div className={s.container} >
            <input
                type='checkbox'
                className={s.checkbox}
                id={`checkbox_${label ? label : '1'}`}
                checked={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.checked)}
            />
            <label
                htmlFor={`checkbox_${label ? label : '1'}`}
                className={s.label}
            >
                {value
                    ? (<svg className={s.icon} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.42L10.59 0L4 6.59L1.42 4.02L0 5.43L4 9.42L12 1.42Z" fill="#00C2FF" />
                    </svg>)
                    : null
                }

            </label>
            <p>
                {label ? label : children}
            </p>

        </div>
    )
}

export default Checkbox