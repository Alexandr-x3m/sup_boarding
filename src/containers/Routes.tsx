import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

import Reservation from './Forms/Reservation'

const Routers: React.FC = () => {

    return (
        <BrowserRouter>
            <Route 
                path={`/`}
                exact
                children={<>
                    <NavLink to={`/reserv`} >Бронирование</NavLink>
                </>}
            />
            <Route 
                path={`/reserv`} 
                exact
                children={<Reservation />} 
            />
            
        </BrowserRouter>
    )
}

export default Routers