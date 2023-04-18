import React from 'react'
import "./creditcard.css"

const Creditcard = () => {
  return (
    <div className='credit-card'>
        <div className="credit-card-img">
            <img src="creditcard.webp" alt="" />
        </div>
        <div className="credit-card-text">
            <h2>Pay, Invest, <span className="purple">Save</span> your <br /> money with one single app</h2>
            <p>The modern way to control all your financial transactions in one place, easily and securely.</p>
            <div className="appstorez">
                <img src="playstore.svg" alt="" />
                <img src="appstore.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Creditcard