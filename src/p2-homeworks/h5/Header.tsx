import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'

function Header() {


    return (
        <div className={s.items} >
            <div className={s.item}>
                <NavLink to='/pre-junior'
                    className={({ isActive }) => (isActive ? s.active : s.item)}
                > PRE JUNIOR </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior'
                    className={({ isActive }) => (isActive ? s.active : s.item)}
                > JUNIOR </NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/junior-plus'
                    className={({ isActive }) => (isActive ? s.active : s.item)}
                > JUNIOR PLUS </NavLink>
            </div>
        </div>
    )
}

export default Header
