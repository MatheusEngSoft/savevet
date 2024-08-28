import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import Chats from './Chats'

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