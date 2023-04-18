import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <div>
        <nav>
            <div className="left">
            <i class="fas fa-bolt"></i>
            <span className='left-span'>Fintrack</span>
            </div>
            <div className="right">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Products</li>
                </ul>
                <button>
                    <i class="fa-solid fa-download"></i>
                    <span className='right-span'>Download App</span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Nav