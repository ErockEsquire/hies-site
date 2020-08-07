import React from 'react'
import '../style/about.scss'
import Steps from '../home/steps'

export const About = () => {

  return (
    <section className="about-section">
      <div className="about-top-header">
        <h1>Hawaii International Environmental Services</h1>
      </div>
      
      <div className="about-intro">
        <img className="about-intro-image" src="/images/about/engineer.png" alt="HIES environmental engineer"/>
        <div className="about-intro-text">
          <h2>About Us</h2>
          <p>Hawaii International Environmental Services, founded in 1993, is a woman-owned engineering & environmental services company with over 25 years of experience in Hawaii, Guam, Saipan, and Japan.</p>

          <h3>Our Discipline</h3>
          <p>HIES professionals are certified by both Private/Commercial and DoD certifications/licenses.</p>
          <p>Our specialties include GIS data acquisition, biological surveying, environmental consulting, remediation, and more.</p>

          <h3>Our Clients</h3>
          <p>Our satisfied customer base around the Pacific ranges from home owners & local businesses to property management companies, real-estate developers, industrial corporations, and government agencies.</p>
          <p>No job is too great or too trivial.</p>
        </div>
      </div>

      <div className="about-mission">
        <div className="about-mission-text">
          <h2>Mission & Culture</h2>
          <p>HIES is fully committed to the conservation & restoration of the environment. It is our mission and dedication to not only assist clients with our services, but to promote a green clean culture along the way.</p>

          <p>Above all, HIES strives for excellence in all projects, valuing teamwork & communication to deliver high quality results. We welcome new and forward-thinking individuals in helping us achieve a greener world.</p>
        </div>
      </div>
      <Steps/>
    </section>
  )
}
export default About