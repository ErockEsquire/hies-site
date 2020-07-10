import React from 'react'

export default function Geo() {
  return(
    <section className="geo-section">
      <div className="geo-image-container">
        <div className="geo-image-card"><img className="geo-image" src="images/transparent/hawaii.png" alt="Hawaii"/><p>Hawaii</p></div>
        <div className="geo-image-card"><img className="geo-image" src="images/transparent/guam.png" alt="Guam"/><p>Guam</p></div>
        <div className="geo-image-card"><img className="geo-image" src="images/transparent/japan.png" alt="Japan"/><p>Japan</p></div>
      </div>
      <div className="geo-text">
        <h1>Geographical Expertise</h1>
        <p>HIES is a leading Pacific Rim provider of comprehensive Environmental and Engineering Services, and continues to support the Department of Defense, US Federal Government, US State and County Governments, US Health Care Providers, and Commercial/Private Sector businesses.</p>
        <p>HIES has strategically located offices in Hawaii, Guam, Japan, and the western United States, servicing local client requirements with efficiency and quality, while fostering long-term partnerships.</p>
      </div>
      <div className="geo-text">
        <h1>Commitment to Quality</h1>
        <p>HIES’s Scientific and Engineering teams are led by highly qualified Program Managers, Project Managers, Quality Control Specialists, and Health/Safety Professionals to deliver projects within schedule, budget, and quality.</p>
        <p>HIES professionals are certified by both Private/Commercial and DOD certifications/licenses providing clients from early AE design support to project implementation, oversight, budgeting, and compliance.</p>
      </div>
    </section>
  )
}
