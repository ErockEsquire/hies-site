import React, { useState } from 'react'
import GIS from './gis'
import '../style/service.scss'

import { Route } from 'react-router-dom'

export default function Services() {

  const [gis, setGis] = useState('service')
  const [consulting, setConsulting] = useState('service')
  const [assessment, setAssessment] = useState('service')
  const [remediation, setRemediation] = useState('service')
  const [other, setOther] = useState('service')

  
    

  return (
    <section className="service-section">
      <div className="service-bar">
        <h2>Services</h2>
        <ul>
          <li>GIS</li>
          <li>Consulting</li>
          <li>Assessment</li>
          <li>Remediation</li>
          <li>Other</li>
        </ul>
      </div>
      <div className="service-main">


      </div>
    </section>
  )
}

const Service = () => {
  return (
    <article>
      <div>
        <h1>Services</h1>
        <p>HIES offers a variety of services across the range in GIS, environmental, and biological work.</p>
      </div>

    </article>
  )
}

const Gisservice = () => {
  return (
    <article>
      <div>
        <h1>GIS Services</h1>
        <p>Geographic Information Systems (GIS) is a computer-based tool used in a variety of industries for performing information analysis, automated mapping, and data integration.</p>
        <p>Our GIS services cover GIS design, database development, and custom GIS solution programming.</p>
      </div>
      <section className="gis-content">
        <div>
          <h3>GIS Surveying & Data Acquisition</h3>
          <h3></h3>
          <h3>Image Acquisition, Photogrammetry, Object Identification</h3>
          <h3>Groundwater Modeling</h3>
        </div>



      </section>
    </article>
  )
}

const services = {
  gis: 
  [{category: "GIS", name: "GIS Surveying & Data Acquisition", description: "HIES can assist almost any organization develop its use and implementation of GIS. Our process for managing technologically complex projects ensures delivery of high-value, low-risk solutions for clients.", keywords: "gis mapping data imagery cartography arc cadd internet aerial photogrammetry gps modeling deploy"},
  {category: "GIS", name: "GIS Database Development", description: "HIES is equipped with several professional Information Technology experts who can create and facilitate all our clients technical needs.  Our most common requests are to create and maintain GIS databases, however our compatibilities encompass all IT aspects.", keywords: "gis mapping data imagery cartography arc cadd internet aerial photogrammetry gps modeling"},
  {category: "GIS", name: "Custom GIS Programming", keywords: "gis mapping data imagery cartography arc cadd internet aerial photogrammetry gps modeling"},
  {category: "GIS", name: "Groundwater Modeling", keywords: "gis mapping data imagery cartography arc cadd internet aerial photogrammetry gps modeling"},
  {category: "GIS", name: "Image Acquisition, Photogrammetry, & Object Identification", keywords: "gis mapping data imagery cartography arc cadd internet aerial photogrammetry gps modeling"}],
  consulting: 
  [{category: "consulting", name: "Environmental Management Plans, Environmental Management System, Best Management Practices", description: "An Environmental Management System (EMS) is a set of processes and practices organized by the EPA which enable an organization to reduce its environmental impacts and increase its operating efficiency. HIES excels at assisting our clients with becoming more green and enhancing their businesses for long term growth while following EPA protocols.", keywords: "consulting consultation ems bmp compliance comply audits management"}, 
  {category: "consulting", name: "Environmental Compliance Audits", description: "HIES provides environmental compliance audits for our clients in order to evaluate their compliance with all federal & state laws, and assess risk from regulated & unregulated practices.", keywords: "consulting consultation compliance comply laws federal state management audits understanding "}, 
  {category: "consulting", name: "Construction Management", description: "HIES has managed and successfully completed numerous projects with  reputable construction partners throughout the Pacific region.  Our staff handles planning, coordination, Quality Assurance/Quality Control (QA/QC), and Health and Safety (H&S) oversight for our clients.", keywords: "consulting consultation construction management planning coordination qa qc quality assurance control health safety"},
  {category: "consulting", name: "Hazardous Waste & Materials Management", description: "HIES recommends and implements responsible hazardous waste management techniques for our clients, ensuring that all EPA and State regulations are properly followed.", keywords: "consulting consultation management planning coordination control health safety regulations requirements law state epa contaminants hazardous remediate remediation"},
  {category: "consulting", name: "Water & Wastewater Management, NPDES / SWPPP", description: "HIES is capable of managing all our clients' water quality needs.  We commonly prepare storm water permits for the Hawaii DOH, and monitor groundwater at contaminated sites. Storm Water Pollution Prevention Plans for National Pollutant Discharge Elimination System (NPDES) permitting are possible within our consultation services.", keywords: "consulting consultation management planning coordination control regulations requirements health safety contaminants waste remediate remediation groundwater permitting monitoring doh department clean water act national pollutant discharge elimination system npdes storm water pollution prevention plans swppp"},
  {category: "consulting", name: "NEPA Compliance & Permitting, EIS/EA/EIA", description: "HIES assists our clients with all NEPA requirements including Environmental Impact Statements (EIS), Environmental Assessment (EA) if necessary, permit applications, and compliance.", description2: "An EIS is a detailed report describing the environmental impacts a proposed project is likely to have upon completion. These impacts include social impacts, economic impacts, and the expected impacts to the natural environment of the project area.", keywords: "consulting consultation compliance permitting law regulations requirements nepa national environmental policy act"},
  {category: "consulting", name: "Military Munitions Response", description: "HIES offers technical support to government participants in the EPA regulated program for assessing hazards for munitions response sites. All staff are trained & qualified in emergency response and hazardous materials handling. Using strict engineering and quality control guidelines", description2: "HIES MEC/MC (Munitions & Explosives of Concern/Munitions Constituents) characterization & clearance group consists of former DoD UXO PM, UXO Safety, and QC assurance personnel. Our management and safety process complies with guidelines under Osha, CERCLA, COE EM-385, and DoD protocols. Using strict engineering and quality control guidelines, our team has streamlined the surveys, remediation, and clearance process to reduce human risks associated with MEC/MC.", keywords: "consulting consultation compliance permitting law regulations requirements military hazard munitions hazardous materials handling"}],
  assessment: [{category: "assessment", name: "Asbestos, Mold, & Lead-based paint Assessments", description: "HIES has been involved with several large-scale asbestos, mold, and lead-based paint assessment & remediation projects. Personnel are certified by OSHA, EPA and the State of Hawaii Department of Health to work with asbestos, mold, & lead-based paint using the latest monitoring equipment to ensure all hazards are mitigated properly.", keywords: "assessment assess remediation remediate asbetos asbestos mold lead paint lead-based hazard removal remove"}, 
  {category: "assessment", name: "Air Emissions Permitting, Sampling", description: "Staffed with certified air quality specialists, HIES can investigate and assess air quality issues at target sites.", keywords: "assessment assess remediation remediate"}, 
  {category: "assessment", name: "CERCLA/RCRA Investigations & Audits", description: "Comprehensive Environmental Response, Compensation, & Liability Act (CERCLA 1980) is focused on the management and remediation of hazardous materials at abandoned, non-operating sites. Resource Conservation & Recovery Act (RCRA 1976) is focused on the management of solid and hazardous waste in active facilities and in transport. HIES has the capability to investigate and assess both.", keywords: "assessment assess remediation remediate hazardous waste resource conservation recovery act comprehensive response compensation liability cercla rcra"}, 
  {category: "assessment", name: "Environmental Site Assessment (ESA) Phase I & II for Real Estate Transfer", description: "HIES is capable of completing Phase I & II ESA in accordance with the Association for Sampling and Testing Materials (ASTM) guidelines. Our assessments will inform of any existing or possible environmental liability issues associated with the property.", description2: "Phase I ESA is to assess the likelihood of environmental risks and contaminant hazards of the property. This may include a review of property records to determine past history and use of the property, a visual inspection of property as well as neighboring properties for condition, and interviews with property owners, operators, occupants, and local government officials.", description3: "If Phase I reveals evidence or high potential for environmental contamination of the property, Phase II ESA will assess the nature and extent of the concern. This may include direct sampling and analysis of water, soil, air, and building materials. Biological surveys of affected local species may also be conducted.", keywords: "assessment assess remediation remediate biology species esa phase investigate investigation possible contaminants hazards astm real estate transfer lender"}, 
  {category: "assessment", name: "Laboratory Data Analysis & review", description: "HIES is capable of reviewing and reporting laboratory results from samples, whether collected personally from an assessment, or received from a client.", keywords: "assessment assess remediation remediate sample sampling science data analysis review understand inspect laboratory"},
  {category: "assessment", name: "Laboratory Data Analysis & review", description: "HIES is capable of reviewing and reporting laboratory results from samples, whether collected personally from an assessment, or received from a client.", keywords: "assessment assess remediation remediate sample sampling science data analysis review understand inspect laboratory"},
  {category: "assessment", name: "Biological Assessment", description: "All projects have a potential impact on local species and wildlife. At HIES, we have biologists capable of conducting species inventories, species management plans, endangered & invasive species surveys, longterm monitoring design of local biological subjects, and general biological assessments.", keywords: "assessment assess remediation remediate sample sampling science data analysis review understand inspect laboratory"}
],
  remediation: [{category: "remediation", name: "Remediation Systems Installation & Support", description: "HIES specializes in environmental investigations and cost-effective remediation for all types of contaminated property.  HIES is equipped with a team of experienced scientists who have extensive knowledge of remediation solutions.", description2: "If remediation is deemed necessary from an assessment, HIES’s team of scientists and engineers will design, implement, and maintain any remediation system necessary for our clients' contamination issues.", keywords: "remediate remediation contamination remove hazard hazardous materials resolve solutions clean contaminant"}],
  other: [{category: "other", name: ""}]
}



// const ServiceItem = ({serviceName, subServices}) => {
// <ServiceItem serviceName={"GIS"} subServices={gis}/>
//   const renderServices = () => {
//     return subServices.map((service, index) => <a key={index} className="service-subservice-item" href={`${service.id}`}>{service.name}</li>)
//   }

//   return (
//     <div>
//       <span>{serviceName}</span>
//       <ul className="services-subservice-list">{renderServices()}</ul>
//     </div>
//   )
// }