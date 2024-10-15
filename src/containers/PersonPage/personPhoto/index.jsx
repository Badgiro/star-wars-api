import React from 'react'

const PersonPhoto = ({personPhoto, personName}) => {
  return (
    <><img src={personPhoto} alt={personName} /></>
  )
}

export default PersonPhoto