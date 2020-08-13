import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Contact() {
  return(
    <section className="contact-section">
      <div className="contact-color">

        <div className="contact-text">
          <div>
            <h3>HIES, Inc.</h3>
            <p>Woman-Owned Small Business Enterprise</p>
            <p>Minority Business Enterprise</p>
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
            <p>Guam Lic No. 13-200200468-001</p>
            <p>Japan Environmental Investigator No. KAN2003-2-98</p>
          </div>
        </div>

        <div className="contact-text">
          <div>
            <h3>Contract Vehicles</h3>
            <p>GSA Environmental Services GS-10F-0132L</p>
            <p>W912HV15R0017 MATOC for Environmental Services</p>
            <p>N4008412D0062 Regional Lead and Asbestos Sampling & Analysis</p>
            <p>Kaiser Permanente</p>
            <p>Macy's Inc. Environmental</p>
          </div>

          <div>
            <h3>NAICS Code</h3>
            <p>541620 Environmental Consulting</p>
            <p>541370 GIS</p>
            <p>541350 Engineering</p>
            <p>541690 Other Scientific & Technical Consulting</p>
            <p>561210 Facilities Support</p>
            <p>562910 Remediation</p>
          </div>

          <div>
            <h3>DUNS Number</h3>
            <p>941-72-0344</p>
            <p>691-73-5604 (Japan)</p>
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

