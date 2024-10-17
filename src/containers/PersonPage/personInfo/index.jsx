import styles from './style.module.css'

const PersonInfo = ({personInfo}) => {
  return (
    <ul className={styles.list__container}>
          {personInfo.map((data) => {
            return <li className={styles.list__item} key={data.title}>{`${data.title}: ${data.data}`}</li>
          })}
        </ul>
  )
}

export default PersonInfo