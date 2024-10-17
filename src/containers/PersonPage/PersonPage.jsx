import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { withErrorApi } from '@helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { PERSON_API } from '@constants/api'
import { getPeopleImg } from "@services/getPeopleData";
import PropTypes from 'prop-types'
import PersonLinkBack from './personLinkBack'
import PersonPhoto from './personPhoto'
import PersonInfo from './personInfo'
import styles from './PersonPage.module.css'
import PersonFilms from './personFilms'


const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      const res = await getApiResource(`${PERSON_API}/${id}/`)
      if (res) {
        setPersonInfo([
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Gender', data: res.gender },
        ])
        
        setPersonName(res.name)
        setPersonPhoto(getPeopleImg(id))
        res.films.length && setPersonFilms(res.films)
        console.log(personFilms)
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <div className={styles.wrapper}> 
    <PersonLinkBack/>
      <div className={styles.person__name }>{personName}</div>
      <div className={styles.person__data}>
      <PersonPhoto personName={personName} personPhoto={personPhoto}/>
      {personInfo && (
        <PersonInfo personInfo={personInfo}/>
      )}
      </div>
     {personFilms && <PersonFilms setPersonFilms={setPersonFilms} personFilms={personFilms}/>}
      



    </div>
  )
}
PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
