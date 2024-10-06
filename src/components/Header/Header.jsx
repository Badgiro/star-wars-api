import { Link } from 'react-router-dom'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
    <ul className={styles.container__list}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        
        <Link to="/people">People</Link>
      </li>
    </ul>
  </div>
  )
}

export default Header
