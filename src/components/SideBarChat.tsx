import React from 'react'
import NavBar from './NavBar.tsx'
import Search from './Search.tsx'
import Chats from './Chats.tsx'

function SideBarChat() {
  return (
    <div className='sidebarchat'>
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBarChat