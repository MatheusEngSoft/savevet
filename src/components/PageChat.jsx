import React from 'react'
import SideBarChat from '../components/SideBarChat'
import Chat from '../components/Chat'

function PageChat() {
  return (
    <div className='pageChat'>
      <div className='containerchat'>
        <SideBarChat/>
        <Chat/>
      </div>
    </div>
  )
}

export default PageChat