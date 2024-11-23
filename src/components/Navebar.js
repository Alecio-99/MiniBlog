import React from 'react'

import { NavLink } from 'react-router-dom'
import styles from './Navebar.module.css'

const Navebar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Mine <span>Blog</span>
        </NavLink>
        <ul className={styles.link_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>
                     Home
                </NavLink>
            </li>
            <li>
            <NavLink to="/abaut" className={({isActive}) => (isActive ? styles.active : '')}>
                     Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navebar