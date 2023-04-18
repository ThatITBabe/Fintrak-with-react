import React from 'react'
import "./reviews.css"

const Reviews = () => {
  return (
    <div className='testimonial'>
        <p className='head'>TESTIMONIAL</p>
        <h2>What Our Customers Are Saying</h2>
        <div className="customer">
            <div className="customer-img">
                <img src="girl.jpg" alt="" />
            </div>
            <div className="customer-text">
                <h4><b>When I first heard about Fintrack</b> and how they're going to make their user's financial life easier, I had to sign up. Best decision I ever made.</h4>

                <p><b>Anu Oba</b></p>
                <p>CEO, <b>Anu D'Draper</b></p>

                <div className="arrow">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                    
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Reviews