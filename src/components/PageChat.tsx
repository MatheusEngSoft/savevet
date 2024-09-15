import React from 'react'
import SideBarChat from './SideBarChat.tsx'
import Chat from './Chat.tsx'

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