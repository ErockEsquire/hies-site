import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Home() {
  return(
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-card">
            <img className="home-card-image" src="images/shore.jpg" alt="Clean water, shore"/>
            <div className="home-card-text">
              <h1>About Us</h1>
              <p><strong>H</strong>awaii <strong>I</strong>nternational <strong>E</strong>nvironment <strong>S</strong>ervices, founded in 1993, is a women-owned engineering and environmental services company.</p>
              <p className="indented"><Icon name="double angle right"/>We generate solutions to maximize sustainability, exceed government regulations, and address and solve environmental concerns, all while doing what is right for the planet.</p>
              <p className="indented"><Icon name="double angle right"/>Asbestos clearing, mold removal, waste minimalization, and groundwater sample testing are just some of the services we provide.</p>
            </div>
          </div>

          <div className="home-card">
            <img className="home-card-image" src="images/green.jpg" alt="Environmental concern. Greenery and windmills."/>
            <div className="home-card-text">
              <h1>Mission & Culture</h1>
              <p>HIES aims to drive innovative green technologies to clean, purify, and sustain the environment.</p>
              <p className="indented"><Icon name="double angle right"/>We strive for excellence in all projects, and aim for complete customer satisfaction. Experience shows if we serve our clients well, our own success comes from self-satisfaction and lifetime friendships.</p>
              <p className="indented"><Icon name="double angle right"/>Teamwork and seamless communication are key. We welcome new and forward-thinking individuals in helping us achieve our goals for a greener world.</p>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}


//<div className="home-solutions">
//<div className="home-solutions-text">
//   <h2>Environmental Solutions</h2>
//   <p><Icon name="angle right"/>Air Emissions, Permitting, Sampling</p>
//   <p><Icon name="angle right"/>Asbestos, Lead-based Paint Assessments; Hazmat Surveys</p>
//   <p><Icon name="angle right"/>CERCLA/RCRA Investigations</p>
//   <p><Icon name="angle right"/>Compliance Training & Management</p>
//   <p><Icon name="angle right"/>Construction Management</p>
//   <p><Icon name="angle right"/>Conventional & GIS Surveying</p>
//   <p><Icon name="angle right"/>EA/ESA/EIS Services</p>
//   <p><Icon name="angle right"/>Environmental Management Plans</p>
//   <p><Icon name="angle right"/>Management Practices, EMS Programs</p>
//   <p><Icon name="angle right"/>Fuels Infrastructure Design, O&M, and Construction</p>
//   <p><Icon name="angle right"/>Geographic Information Systems</p>
//   <p><Icon name="angle right"/>Database Development/Support</p>
//   <p><Icon name="angle right"/>Groundwater Modeling</p>
//   <p><Icon name="angle right"/>Hazardous Waste & Hazardous Materials Management</p>
//   <p><Icon name="angle right"/>Image Acquisition, Photogrammetry, Object Identification</p>
//   <p><Icon name="angle right"/>Laboratory Data Analysis/Review</p>
//   <p><Icon name="angle right"/>Landfill Permitting & Gas Studies</p>
//   <p><Icon name="angle right"/>NPDES Permitting</p>
//   <p><Icon name="angle right"/>Pollution Prevention Solutions</p>
//   <p><Icon name="angle right"/>Real Estate Transfer Phase I & II Environmental Site Assessment</p>
//   <p><Icon name="angle right"/>Regulatory Compliance Audits & EMS Support</p>
//   <p><Icon name="angle right"/>Remediation Systems Installation/Support</p>
//   <p><Icon name="angle right"/>UST/AST Investigation & Management</p>
//   <p><Icon name="angle right"/>Water & Wastewater Design and O&M</p>
// </div>
// </div>