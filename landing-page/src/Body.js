import { Card } from "flowbite-react";
import React from 'react'
import HeroImage from "./Resources/HeroImage.svg"

function Body() {
  return (
    <>
      <div class="Herotext" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', width: '80vw', marginTop: '20px', height: '60vh', }}> 
          <h1>Welcome to Fitness Fanatics</h1>
          <p>Looking for a place where you can get fit, have fun, and make new friends? Join our sports club today! </p>
          <div class="CTA">
            <div class= "Button2b"> Enrol Today</div>
            <div class= "Button2"> Learn More</div>
          </div>
      </div>
      
      <div class="description">
        <h1>Our Sports Facilities</h1>
        <p>Our sports club has state-of-the-art facilities that are perfect for all of your fitness needs. We have a full-size gymnasium, indoor and outdoor courts, a swimming pool, and a fitness center with the latest equipment </p>
      </div>
    </>
  )
}

export default Body