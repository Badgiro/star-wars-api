
import styles from './style.module.css'

const PersonPhoto = ({personPhoto, personName}) => {
  return (
    <><img className={styles.person__img} src={personPhoto} alt={personName} /></>
  )
}

export default PersonPhoto