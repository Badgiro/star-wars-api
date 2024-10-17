import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import back from './img/back.png'

const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleGoBack = e => {
        console.log('handleGoBack')
        navigate(-1)
    }
  return (
    <button onClick={handleGoBack} className={styles.person__link} >
      
      <img className={styles.ink__img} src={back} alt="arrowBack" /><span>Go back</span>
    </button>
  )
}

export default PersonLinkBack
