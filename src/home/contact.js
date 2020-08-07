import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Contact() {
  return(
    <section className="contact-section">
      <div className="contact-color">
        
        <div className="contact-text">
          <div>
            <h3>HIES, Inc.</h3>
            <p>Woman-Owned Small Business</p>
            <p>A Minority Business Enterprise</p>
            <p>Earth Scientists & Environmental Engineers</p>
          </div>

          <div>
            <h3>Offices</h3>
            <p>Hawaii Main - 70 Kihapai St, Kailua, Hawai'i 96734</p>
            <p>Guam - 101 Chalan Santo Papa #101, Hagatña Guam, 96910</p>
            <p>Japan - 1-18-10 Kokan Dori, Kawasaki-Ku, Japan 210-0852</p>
          </div>

          <div>
            <h3>Licenses</h3>
            <p>Hawaii Contractor's Lic No. AC-21139</p>
            <p>Japan Environmental Investigator No. KAN2003-2-98</p>
          </div>
        </div>
        <div className="contact-logos">
          <img className="business-logo" src="./images/logos/BBB.png" alt="Better Business Bureau A+ Accredited Business Rating"/>
          <img className="business-logo" src="./images/logos/WOSB.png" alt="Woman-Owned Small Business"/>
          <img className="business-logo" src="./images/logos/EDWOSB.png" alt="Economically Disadvantaged Woma-Owned Small Business"/>
          <img className="business-logo" src="./images/logos/NMSDC.png" alt="National Minority Supplier Development Council"/>
        </div>
        <div className="contact-icons">
          <a href="https://www.facebook.com/HIES-Inc-187650787918766/" target="_blank" rel="noopener noreferrer"><Icon name='facebook square' /></a>
          <a href="https://www.linkedin.com/company/hies-inc-/about/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' /></a>
          <a href="https://twitter.com/HIESInc" target="_blank" rel="noopener noreferrer"><Icon name='twitter' /></a>
        </div>

        <p>Copyright © 2018 HIES Inc. - All rights reserved.</p>
      </div>
    </section>
  )
}

