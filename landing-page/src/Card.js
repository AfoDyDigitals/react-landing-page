import React from 'react'
import Button from './Button'
import "./style.css"

function Card(props) {
  return (
    <>
        <div class="cardContent">
            <div > <img class='football' src={props.image} /> </div>
            <p>{props.copy}</p>
            <Button />
        </div>
    </>
  )
}

export default Card