import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
        <main>
            <h3>Simplify <span className='purple'>Finacial Management</span><br /> With Fintrack</h3>
            <p>With Fintrack, you can now track your spending easily, make payments, pay your bills and simplify your <br /> financial life. Let Fintrack help you become financially prudent</p>

            <div className="appstore">
                <img src="playstore.svg" alt="" />
                <img src="appstore.svg" alt="" />
            </div>
            <div className="mockup">
                <img src="phone6.png" alt="" />
            </div>
        </main>
    </div>
  )
}

export default Home