import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeConcurentRequest, changeHTTP } from '@utils/network'

const PersonFilms = ({personFilms}) => {
    const[filmsName, setFilmsName] = useState([])
 
   useEffect(()=> {
    (async ()=> {
        const filmsHTTPS = personFilms.map(url => changeHTTP(url))
        const response = await makeConcurentRequest(filmsHTTPS)
         response.sort((a,b) => a.episode_id - b.episode_id
        );
        console.log(response)
        
       setFilmsName(response)
    })()

    
   }, [])

   

  return (
    <div>
        <ul>
            {filmsName.map(({title, episode_id}) => {
                
                return <li key={episode_id}>
                    <span>Episode{episode_id}</span>
                    <span>:</span>
                   <span>{title}</span>
                   
                   

                    </li>
            })}
        </ul>
    </div>
  )
}

export default PersonFilms
