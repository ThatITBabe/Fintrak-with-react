import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer-classes">
                <div className="first">
                    <div className="col1">
                        <i class="fas fa-bolt"></i>
                        <span className='left-span'>Fintrack</span>
                    </div>
                    <div className="col2">
                        <p>
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis maxime beatae ex!
                        </p>
                    </div>
                    <div className="col3">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="second">
                    <ul>
                        <li><h3>Links</h3></li>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>                
                </div>
                <div className="third">
                    <ul>
                        <li><h3>Support</h3></li>
                        <li>FAQ's</li>
                        <li>Help Center</li>
                        <li>Security</li>
                        <li>Accesibility</li>
                    </ul>
                </div>
                <div className="fourth">
                    <ul>
                        <li><h3>Legal</h3></li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Security</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="down-footer">
                <hr />
                <p>Copyright &copy; 2023 ThatITBabe &reg;. All right reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer