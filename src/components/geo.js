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
        <p>HIES has strategically located offices in Hawaii, Guam, Japan, and the western United States, efficiently servicing local clients  while fostering long-term partnerships.</p>
      </div>
      <div className="geo-text">
        <h1>Commitment to Quality</h1>
        <p>HIES professionals are certified by both Private/Commercial and DOD certifications/licenses, providing clients from early AE design support to project implementation, oversight, and budgeting, to deliver quality projects.</p>
        <p>With over 20 years of operating experience throughout the Pacific, HIES offers clients professional services that are cost-effective and scientifically sound.</p>
      </div>
    </section>
  )
}
