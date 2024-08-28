import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
      <span className='logo'>Lama chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/26888254/pexels-photo-26888254/free-photo-of-a-black-and-white-photo-of-a-couple-hugging-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar