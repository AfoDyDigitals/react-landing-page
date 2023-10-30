import React from 'react'
import NavBar from './Navbar'
import SideBar from './SideBar'
import Body from './Body'
import Card from './Card'
import Button from './Button'
import Footer from './Footer'


function App() {
  return (
    <>
    <div>
        <NavBar />
      <div class="MainContent">
        <div>
          <Body />
          <div class="card">
            <Card 
              image = "/Football.svg" 
              copy="Join our team today and experience the excitement of the game."
            />
            <Card 
          
              image = "/running.svg" 
              copy="Our track and field programs are led by experienced coaches who will help you reach your full potential."
             />
            <Card 
              image = "/swimming.svg" 
              copy="Join our swim team and learn how to swim like a pro! "
            />
            <Card 
                image = "/Basketball.svg" 
                copy="We offer basketball programs for all ages and skill levels, from beginner to competitive."
            />
          </div>
        </div>
          <SideBar />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App;