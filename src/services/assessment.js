import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export function AssessmentESA () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Environmental Site Assessment (ESA) Phase I & II for Real Estate Transfer</h2>
        <p>HIES conducts ESA Phase I & II in accordance with the most recent American Society for Testing and Materials (ASTM) guidelines, offering clients the level of detail and attention necessary to exceed standards and meet regulations. </p>
        <p>Assessments will inform of any existing or possible environmental liability issues associated with the property, and provide proper recommendations for resolution. With this insight, clients can protect their assets and make informed business decisions.</p>
        <h3>Fundamental</h3>
        <p>Phase I ESA is to assess the likelihood of environmental risks and contaminant hazards of the property. This may include a review of property records to determine past history and use of the property, a visual inspection of property condition as well as neighboring properties, and interviews with property owners, operators, occupants, and local government officials.</p>
        <p>If Phase I reveals evidence or high potential for environmental contamination of the property, Phase II ESA will assess the nature and extent of the concern. This may include direct sampling and analysis of groundwater, soil, air, and building materials. Biological surveys of affected local species may also be conducted.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/assessment-esa1.jpg" alt="ESA Phase I Real Estate Transfer form."/>
        <img className="service-card-image" src="./images/services/assessment-esa2.jpg" alt="Environmental scientist conducting field sampling of site."/>
      </div>
    </article>
  )
}

export function AssessmentECA () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Environmental Compliance Audits, CERCLA/RCRA Investigations & Audits</h2>
        <p>HIES's team of knowledgeable scientists are experienced in conducting Environmental Compliance Audits for both CERCLA & RCRA investigations.</p>
        <p>Compliance audits are required as a result of leakage, spillage, or general environmental mismanagement of a site, and ultimately resulting in identifying the responsible party. Remediation systems installation may follow.</p>
        <h3>Fundamental</h3>
        <p>Comprehensive Environmental Response, Compensation, & Liability Act (CERCLA 1980) is focused on the management and remediation of hazardous materials at abandoned, non-operating sites.</p>
        <p>Resource Conservation & Recovery Act (RCRA 1976) is focused on the management of solid and hazardous waste in active facilities and in transport.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/assessment-audit.jpg" alt="Environmental Compliance Audit form."/>
        <img className="service-card-image" src="./images/services/assessment-eca.jpg" alt="Environmental Compliance Audit form."/>
      </div>
    </article>
  )
}

export function AssessmentAML () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Hazardous Waste & Materials Survey, Asbestos, Mold, and Lead-based paint Assessments</h2>
        <p>HIES has been involved with several large-scale asbestos, mold, and lead-based paint assessment & remediation projects. In most cases, if presence of asbestos, mold, and lead-based paint is found, remediation immediately follows.</p>
        <p>Common hazardous materials include asbestos, lead, mold, mercury, PCBs (polychlorinated biphenyl), silica, arsenic, ozone depleting substances, rodent/bird droppings, radioactive materials, and any other materials that are flammable or toxic.</p>
        <p>Personnel are certified by OSHA, EPA and the State of Hawaii Department of Health to work with asbestos, mold, and lead-based paint using the latest monitoring equipment to ensure all hazards are mitigated properly.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/assessment-asbestos2.jpg" alt="HIES worker setting up air monitoring system and asbestos abatement."/>
        <img className="service-card-image" src="./images/services/assessment-asbestos.jpg" alt="HIES worker setting up air monitoring system and asbestos abatement."/>
      </div>
    </article>
  )
}

export function AssessmentAEP () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Air Emissions, Permitting, Sampling</h2>
        <p>Staffed with certified air quality specialists and equipment, HIES can investigate and assess air quality issues at target sites.
        </p>
        <h3>Fundamental</h3>
        <p>"Federal regulations require each major source of air pollutant emissions to obtain an "operating permit" that consolidates all of the air pollution control requirements into a single, comprehensive document covering all aspects of the source's air pollution activities.
        </p>
        <p>Air pollution permits are required for businesses that build new pollution sources or make significant changes to existing pollution sources."</p>
        <p>- Environmental Protection Agency</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/assessment-airmonitoring2.jpg" alt="HIES worker setting up air monitoring system and asbestos abatement."/>
        <img className="service-card-image" src="./images/services/assessment-airmonitoring.jpg" alt="HIES worker holding LPM Air flow meter."/>
      </div>
    </article>
  )
}

export function AssessmentGWM () {

  return (
    <article id="environmental-sampling" className="service-card">
      <div className="service-card-text">
        <h2>Environmental Sampling - Groundwater Monitoring & Soil Gas Testing</h2>
        <p>Environmental sampling and monitoring of groundwater & soil gas assesses the current environmental condition of target areas. Necessary for permitting, and risk prevention & contamination evaluation, HIES can easily conduct these operations.</p>
        <p>Groundwater monitoring & soil gas testing are common requirements for environmental management and treatment plans, and an essential task for providing insight to general environmental assessment. These services are normally simple and cost-effective for the value of the data.</p>
      </div>
      <div className="service-card-image-container">
        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
          <div>
            <img className="service-card-image" src="./images/services/assessment-groundwater4.jpg" alt="HIES workers drilling hole into the ground to install groundwater monitoring apparatus."/>
          </div>
          <div>
            <img className="service-card-image" src="./images/services/assessment-groundwater3.jpg" alt="Field groundwater testing."/>
          </div>
        </Carousel>
        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
          <div>
            <img className="service-card-image" src="./images/services/assessment-soilgas.jpg" alt="HIES worker drilling hole into ground for soil gas testing."/>
          </div>
          <div>
            <img className="service-card-image" src="./images/services/assessment-soilgas2.jpg" alt="Soil gas testing apparatus placed into small hole in ground."/>
          </div>
        </Carousel>
        </div>
    </article>
  )
}

export function AssessmentBA () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Biological Assessment</h2>
        <p>All projects have a potential impact to disrupt ecosystems for local fauna and flora. For this reason, HIES offers a wide range of biological assessment services.</p> 
        <p>HIES biologists are capable of conducting species inventories, species management plans, endangered & invasive species surveys, and design of long-term monitoring of local species.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/assessment-fauna.jpg" alt="Fauna surveying during Baseline Project."/>
        <img className="service-card-image" src="./images/services/assessment-flora.jpg" alt="Flora surveying during Baseline project."/>
      </div>
    </article>
  )
}