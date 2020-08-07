import React, { useState, useEffect } from 'react'
import '../style/home.scss'
import Steps from './steps'
import TypeScript from './newtype'
import { Link } from 'react-router-dom'

export function HomeOne () {

  const [currentImage, setCurrentImage] = useState(0)

  const homeImage = [{src: "./images/home/environmental-difference.png", alt: "Impact of environmental change"}, {src: "./images/home/gis-gis.png", alt: "GIS mapping depiction"}, {src: "./images/home/workers.png", alt: "Remediation service workers"},  {src: "./images/home/workers.png", alt: "Remediation service workers"}]

  const Image = ( { image } ) => {
    return <img src={image.src} alt={image.alt} className="home-desc-image" />
  }

  useEffect(() => {
    if (currentImage === 3) {
      setCurrentImage(0)
    }
    let timer = setTimeout(() => setCurrentImage(currentImage + 1), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [currentImage])

  return (
    <section className="home-section">
      <div className="home-desc">
        <div className="home-desc-image-container">
          <Image image={homeImage[currentImage]}/>
        </div>
        <div className="home-desc-text">
          <h1>Hawaii International Environmental Services</h1>
          <p>offers a variety of services for commercial environmental needs in Hawaii, Guam, and Japan.</p>
            
          <p>Services include GIS surveying & data acquisition, biological monitoring, environmental consulting, and hazard remediation, with true economical solutions beneficial for the environment.</p>
        </div>
      </div>
      <div className="home-services">
        <div className="home-center-text">
          <h2>Environment</h2>
          <p>is defined by the physical land, air, water, structures, and their relationship to local people & living organisms. HIES Services aim to address concerns, risks, and potential impact pertaining to these environmental aspects.</p>
        </div>
        <div className="home-services-text">
          <h2>Environmental Consulting & Solutions</h2>
          <p>By understanding our clients' goals, our licensed professionals design and implement efficient & cost-effective plans to remove environmental risks, while helping clients achieve environmental compliance</p>
        </div>
        <div className="home-services-cards">
          <div className="home-service-card">
            <Link to={'/services/gis'}>
              <img className="home-service-card-image" src="./images/home/gis-sign.jpg" alt="GIS mapping services"/>
              <div className="home-service-card-title">
                <h2 className="home-service-title">GIS Mapping</h2>
                <div className="svg">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                </div>
              </div>
              <p>Utilizing Geographic Information Systems, we assist our clients with not only spacial imagery, but database design & development, and deployment of these sophisticated systems.</p>
              <p>E.g. GIS Data Acquisition, Database Development, Groundwater modeling, Image Acquisition, Photogrammetry</p>
            </Link>
          </div>
          <div className="home-service-card">
            <Link to={'/services/consultating'}>
              <img className="home-service-card-image" src="./images/home/consultation-sign.jpg" alt="Consultation Services"/>
              <div className="home-service-card-title">
                <h2 className="home-service-title">Consulting</h2>
                <div className="svg">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                </div>
              </div>
              <p>With our consultation services, clients will understand & implement best management practices while navigating government environmental laws.</p>
              <p>E.g. Environmental compliance, SPCC support, NEPA, EIS/EA/EIA, NPDES/SWPPP, UST/AST management</p>
            </Link>
          </div>
          <div className="home-service-card">
            <Link to={'/services/assessment'}>
              <img className="home-service-card-image" src="./images/home/investigations-sign.jpg" alt="Environmental site assessments and investigations"/>
              <div className="home-service-card-title">
                <h2 className="home-service-title">Assessment</h2>
                <div className="svg">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                </div>
              </div>
              <p>Our professionals will investigate the site for environmental issues. This includes biological surveys, and analyzing samples of groundwater, soil, air, or building materials for contaminants.</p>
              <p>E.g. Asbestos, mold, & lead-based paint, hazmat surveys, CERCLA/RCRA audits, ESA Phase I & II</p>
            </Link>
          </div>
          <div className="home-service-card">
            <Link to={'/services/remediation'}>
              <img className="home-service-card-image" src="./images/home/remediation-sign.jpg" alt="Remediation Services"/>
              <div className="home-service-card-title">
                <h2 className="home-service-title">Remediation</h2>
                <div className="svg">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                </div>
              </div>
              <p>If deemed necessary by an assessment, our team will effectively remove hazards & contaminants while implementing preventative measures to ensure protection against future environmental risks.</p>
              <p>E.g. Remediation Systems Installation/Support</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeTwo() {
  return(
    <section className="home-section">
      <Steps/>
      <div className="home-desc two">
        <div className="home-desc-image-container type">
          <TypeScript>
            <p>At HIES, our professionals work alongside clients every step of the way to ensure their goals are successful with quality results.</p>
          </TypeScript>
        </div>
      </div>

    </section>
  )
}