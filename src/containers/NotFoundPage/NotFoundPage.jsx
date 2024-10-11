import React from 'react'
import { useLocation } from 'react-router'
import img from './img/image.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    let location = useLocation()
  return (
    <>
      <img className={styles.img} src={img} alt="Not found"  />
      <p className={styles.text}>no matches for <u>{location.pathname} </u></p>
    </>
  )
}

export default NotFoundPage
