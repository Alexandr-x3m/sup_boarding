import React, { useEffect } from 'react'

import s from '../../styles/containers/PopUp.module.sass'

interface PopUpTypes {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactElement,
    arch: HTMLDivElement | null
}

const PopUp: React.FC<PopUpTypes> = ({open, setOpen, children, arch}) => {

    const tougleWindowHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setOpen(!open)
    }

    useEffect(() => {

    }, [])


    let position = arch ? arch.getBoundingClientRect() : {top: 0, left: 0}
    
    return (
        <>
            {open
                ? (<div className={s.container}>
                    <button 
                        className={s.back_wrap}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => tougleWindowHandler(e)}
                    ></button>
                    <div 
                        className={s.content}
                        style={{top: position.top + 32, left: '0'}}
                    >
                        {children}
                    </div>
                </div>)
                : null
            }
        </>
    )
}

export default PopUp