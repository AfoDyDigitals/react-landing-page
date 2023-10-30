import React from 'react'
import NavBar from './Navbar'
import SideBar from './SideBar'
import Body from './Body';

function App() {
  return (
    <>
    <div>
        <NavBar />
      <div class="MainContent">
        <div>
        <Body />
        </div>
        <SideBar />
      </div>
    </div>
    </>
  )
}

export default App;