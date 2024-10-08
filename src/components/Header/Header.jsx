import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation() // Получаем текущий путь
  console.log(location)
  const [activeLink, setActiveLink] = useState('/') // Начальная активная ссылка

  useEffect(() => {
    setActiveLink(location.pathname) // Обновляем активную ссылку при изменении маршрута
  }, [location.pathname])

  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li>
          <Link to="/" className={activeLink === '/' ? styles.active : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/people"
            className={activeLink === '/people' ? styles.active : ''}
          >
            People
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
