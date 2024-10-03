import { useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { PEOPLE_API } from '../../constants/api'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList'

const PeoplePage = () => {
  const [people, setPeople] = useState(null)
  const [errorApi, setErrorApi] = useState(false)
  const getResource = async (url) => {
    const res = await getApiResource(url)
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImg(id)

        return {
          img,
          name,

          id,
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
  useEffect(() => {
    getResource(PEOPLE_API)
  }, [])
  return (
    <>
      {errorApi ? (
        <h1>Error</h1>
      ) : (
        <>{people && <PeopleList people={people} />}</>
      )}
    </>
  )
}

export default PeoplePage
