import React, { FormEvent, useState } from 'react'
import axios from 'axios'

import Text from '../../components/Inputs/Text'

const FormAuth: React.FC = () => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submitHandler = (e: FormEvent) => {
        console.log(e)
        e.preventDefault()


        axios({
            method: 'POST',
            url: 'http://192.168.43.97:3001/logIn',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: JSON.stringify({
                login,
                password
            })
        })
        .then(res => console.log(res.status))

    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form
                onSubmit={submitHandler}
            >
                <Text
                    label={'login'}
                    value={login}
                    setValue={setLogin}
                />
                <Text
                    label={'password'}
                    value={password}
                    setValue={setPassword}
                />
                <input 
                    type="submit"
                    value={'Войти'}
                
                />
            </form>
        </div>
    )
}

export default FormAuth