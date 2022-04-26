import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'

function Header() {


    return (
        <div className={s.items} >
              <div>
                <NavLink to='/dialog' > Dialog </NavLink>
            </div>
            <div>
                <NavLink to='/pre-junior'  > PRE JUNIOR </NavLink>
            </div>
            <div >
                <NavLink to='/junior' > JUNIOR </NavLink>
            </div>
            <div>
                <NavLink to='/junior-plus'
                    // className={({ isActive }) => (isActive ? s.active : s.item)}
                > JUNIOR PLUS </NavLink>
            </div>
        </div>
    )
}

export default Header
