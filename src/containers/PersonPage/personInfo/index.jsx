import React from 'react'

const PersonInfo = ({personInfo}) => {
  return (
    <ul>
          {personInfo.map((data) => {
            return <li key={data.title}>{`${data.title}: ${data.data}`}</li>
          })}
        </ul>
  )
}

export default PersonInfo