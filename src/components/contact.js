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
            <p>HIES License No. AC-21139</p>
          </div>

          <div>
            <h3>Main Office</h3>
            <p>70 Kihapai St, Kailua, Hawai'i 96734</p>
          </div>
          
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

