import React from 'react'

function Navigation() {
  return (
    <nav className='container'>
            <div className='logo'>
                <img src="/images/hot.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='btn-div'>
                <button className='btn'>Order Fast</button>
            </div>
        </nav>
  )
}

export default Navigation;
