import React from 'react'
import './Etape.css'
function Etape(props) {
  return (
    <div className='etape'>
        <img src={props.image} alt=''/>
        <div className="subtitle">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
  )
}

export default Etape