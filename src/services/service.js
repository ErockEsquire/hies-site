import React, { Fragment, useState, useEffect } from 'react'
import { GisSDA, GisDD, GisIOP } from './gis'
import { ConsultingEMP, ConsultingCM, ConsultingHW, ConsultingUST, ConsultingWWM, ConsultingLP, ConsultingSP, ConsultingNCP } from './consulting'
import { AssessmentAML, AssessmentAEP, AssessmentECA, AssessmentESA, AssessmentGWM, AssessmentBA} from './assessment'
import { RemediationSI, RemediationBR } from './remediation'
import { OtherHMT, OtherRS, OtherMMR, OtherDMS} from './other'
import '../style/service.scss'
import { Route, Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'react-responsive-carousel';

import { search } from '../redux-actions'
import { useSelector, useDispatch } from 'react-redux'


function renderSearch(searchTerm) {
  const refinedSearchTerm = searchTerm.toLowerCase().split(' ')
  const searchResults = keywordSets.filter(service => refinedSearchTerm.some(key => service.keywords.includes(key)));
  return searchResults.map(result => result.component)
}

const gissda = {component: <GisSDA/>, keywords: "gis mapping surveying data acquisition design imagery cartography arc cadd internet aerial photogrammetry gps modeling deploy technology server geographic geography host spatial custom programming python it information digital computer photography tracking computerized and"}

const gisdd = {component: <GisDD/>, keywords: "gis mapping data database development deploy design imagery cartography arc cadd internet gps modeling deploy technology server geographic geography host spatial custom programming python it information digital computer photography tracking computerized support"}

const gisiop = {component: <GisIOP/>, keywords: "gis mapping surveying data acquisition design imagery cartography arc cadd internet aerial photogrammetry object identification classification interpretation gps modeling deploy technology server geographic geography host spatial custom programming python it information digital surface terrain dsm dtm computer photography tracking computerized and"}

const consultingemp = {component: <ConsultingEMP/>, keywords: "general environmental consulting plans planning system emp ems bmp best management compliance epa protocols comply audits coordinate prevention support social economic impact federal law state pollution"}

const consultingcm = {component: <ConsultingCM/>, keywords: "environmental consulting plans planning system practices bmp best management compliance epa protocols comply audits quality control assurance coordinate construction prior support"}

const consultinghw = {component: <ConsultingHW/>, keywords: "consulting plans planning system practices best management compliance epa protocols comply audits coordinate hazardous waste contaminant contamination prevention asbestos mold lead based paint lead-based mercury pcb silica arsenic ozone rodent bird radioactive flammable toxic materials testing remediation remediate and removal remove"}

const consultingust = {component: <ConsultingUST/>, keywords: "consulting plans planning system bmp best management compliance epa protocols comply audits coordinate prevention ust ast underground aboveground storage tank epa fuels accidental release permitting excavation soil sampling closure remediation remediate removal remove testing and & samples"}

const consultingwwm = {component: <ConsultingWWM/>, keywords: "consulting plans planning system management compliance epa protocols comply audits coordinate prevention epa accidental release permitting sampling npdes clean water act swppp storm pollution wastewater pollutant discharge elimination system monitoring survey testing requirements doh department and samples & longterm shortterm long-term short-term"}

const consultinglp = {component: <ConsultingLP/>, keywords: " environmental consulting plans planning system bmp best management compliance epa protocols comply coordinate prevention epa permitting sampling landfill contaminant gas soil land pollutant monitoring survey test longterm shortterm long-term short-term"}

const consultingsp = {component: <ConsultingSP/>, keywords: " environmental consulting plans planning system bmp best management compliance epa protocols comply coordinate prevention epa accidental release permitting sampling pollution pollute contaminant gas soil land pollutant monitoring survey test oil spill countermeasure support spcc and samples &"}

const consultingncp = {component: <ConsultingNCP/>, keywords: "environmental consulting plans planning system survey compliance epa protocols comply audits coordinate prevention epa permitting  survey support nepa national policy act eis eia ea impact assessment report economic social statements federal state law and &"}

const assessmenteca = {component: <AssessmentECA/>, keywords: "assessment survey cercla rcra investigation cercla/rcra environmental compliance audits mismanagement hazardous materials contaminants comprehensive response compensation liability resource concersation recovery act responsible party identify remediation remediate installation facilities abandoned operating non-operating non in use in-use uncontrolled management and soil water groundwater air building structure"}

const assessmentaml = {component: <AssessmentAML/>, keywords: "assessment hazardous hazards waste materials survey asbestos mold lead lead-based based paint mold mercury pcb silica arsenic radioactive flammable toxic contaminants contaminated polluted pollute prevention accidental and remediation remediate monitoring inspection investigate detection soil water groundwater air building structure removal remove"}

const assessmentaep = {component: <AssessmentAEP/>, keywords: "assessment inspection survey monitoring air emissions permitting sampling quality investigate detection operating pollution pollute contamination contaminant sources samples longterm shortterm long-term short-term"}

const assessmentesa = {component: <AssessmentESA/>, keywords: "environmental site assessment real estate transfer esa phase 1 one 2 two and association for sampling testing materials astm liability contaminant risks inspection detect investigate soil water groundwater air building structure biological survey monitoring waste local interview owners"}

const assessmentgwm = {component: <AssessmentGWM/>, keywords: "environmental sampling groundwater monitoring soil gas testing land air quality detect investigate permitting prevention drill testing samples"}

const assessmentba = {component: <AssessmentBA/>, keywords: "environmental biological assessment ecosystem species inventory fauna flora animals flowers plants local impact biologists biology endangered invasive disrupt monitoring longterm shortterm long-term short-term sample sampling"}

const remediationsi = {component: <RemediationSI/>, keywords: "remediation systems installation and & support hazardous hazards waste materials survey asbestos mold lead lead-based based paint mold mercury pcb silica arsenic radioactive flammable toxic contaminants contaminated polluted pollute prevention accidental and remediation remediate longterm shortterm long-term short-term structure removal remove resolve resolutions"}

const remediationbr = {component: <RemediationBR/>, keywords: "remediation bioremediation restoration micro organisms micro-organisms longterm shortterm long-term short-term process aerobic anaerobic nature biology environmental phytoremediation mycoremediation remediate contaminants contaminate breakdown degrade soil groundwater biological restore fungi plants enzymes resolve resolutions"}

const keywordSets = [gissda, gisdd, gisiop, consultingemp, consultingcm, consultinghw, consultingust, consultingwwm, consultinglp, consultingsp, consultingncp, assessmenteca, assessmentaml, assessmentaep, assessmentesa, assessmentgwm, assessmentba, remediationsi, remediationbr]


export default function Services() {

  const service = useSelector(state => state.service)
  const dispatch = useDispatch();

  const handlesetSearch = (event) => {
    dispatch(search(event.target.value))
  }

  const [currentImage, setCurrentImage] = useState(0)

  const serviceImage = [{src: "./images/services/slide1.jpg", alt: "Environmental sample testing in lab.", place: "center"}, {src: "./images/services/slide2.jpg", alt: "Shaking hands over reports and invoices.", place: "center"}, {src: "./images/services/slide3.jpg", alt: "GIS surveying equipment on the field", place: "bottom"}, {src: "./images/services/slide3.jpg", alt: "GIS surveying equipment on the field", place: "bottom"}]

  const Image = ( { image } ) => {
    return <img src={image.src} alt={image.alt} className={`service-image ${image.place}`} />
  }

  useEffect(() => {
    if (currentImage === 3) {
      setCurrentImage(0)
    }
    let timer = setTimeout(() => setCurrentImage(currentImage + 1), 4000)
    return () => {
      clearTimeout(timer)
    }
  }, [currentImage])

  return (
    <section className="service-section">
      <div className="service-slide">
        <Image image={serviceImage[currentImage]}/>
      </div>
      

      <div className="service-top-header">
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={250}><h1>Services</h1></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={500}><p>HIES offers a variety of services across the range in Geographic Information Systems (GIS), Environmental, and Ecological work.</p></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={750}><p>Send us a detailed request if a service appears unavailable, and HIES will make it work.</p></ScrollAnimation>
      </div>
      <div className="service-main-content">
        <div className="service-bar">
          <h2>Services</h2>
          <div className="ui icon input">
            <input
            placeholder="Search Services with Keywords"
            value={service}
            onChange={handlesetSearch}
            />
            <i className="search icon" />
          </div>
          <ul>
            <Link to='/services/gis'><li onClick={()=> dispatch(search(''))}>GIS<Arrow/></li></Link>
            <Link to='/services/consulting'><li onClick={()=> dispatch(search(''))}>Consulting<Arrow/></li></Link>
            <Link to='/services/assessment'><li onClick={()=> dispatch(search(''))}>Assessment<Arrow/></li></Link>
            <Link to='/services/remediation'><li onClick={()=> dispatch(search(''))}>Remediation<Arrow/></li></Link>
            <Link to='/services/other'><li onClick={()=> dispatch(search(''))}>Other<Arrow/></li></Link>
          </ul>
        </div>
        <article className="service-article">
          {service !== '' && renderSearch(service)}
          {service === '' && 
          <Fragment>
            <Route path='/services/gis' component={GisPage}/>
            <Route path='/services/consulting' component={ConsultingPage}/>
            <Route path='/services/assessment' component={AssessmentPage}/>
            <Route path='/services/remediation' component={RemediationPage}/>
            <Route path='/services/other' component={OtherPage}/>
            <Route exact path='/services' component={Service}/>
          </Fragment>}
        </article>
      </div>
    </section>
  )
}

const Service = (props) => {
  return (
    <Fragment>
      <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={1000}>
        <GisService/>
        <ConsultingService />
        <AssessmentService />
        <RemediationService />
        <OtherService />
      </ScrollAnimation>
    </Fragment>
  )
}

const GisService = (props) => {
  return (
    <section className="service-main">
      <div className="service-header">
        <div className="service-header-title">
        <h1>GIS Services</h1>
          <img className="service-icon" src="./images/icons/gis.png" alt="GIS Icon" />
        </div>
        <p>Geographic Information Systems (GIS) incorporates geographical & spatial features with statistical data in order to map, analyze, and assess real-world problems. Accordingly at HIES, GIS services are available for mapping, analysis, and data acquisition for various applications.</p>
        <p>Utilized in industries commonly for performing computer cartography and data integration, HIES provides these services in addition to site management & monitoring, remediation design, regulatory reporting, redevelopment planning, and decision support.</p>
      </div>
      <div className="gis-content">
        {props.children}
      </div>
    </section>
  )
}

export const GisPage = (props) => {
  return (
    <Fragment>
      <GisService/>
      <GisSDA/>
      <GisDD/>
      <GisIOP/>
    </Fragment>
  )
}

const ConsultingService = (props) => {
  return (
    <section className="service-main">
      <div className="service-header">
        <div className="service-header-title">
          <h1>Consulting Services</h1>
          <img className="service-icon" src="./images/icons/consulting.png" alt="Consulting Icon" />
        </div>
        <p>Consultating services span across various fields of environmental work assisting clients achieve compliance, attain government permitting, and implement best practices.</p>
        <p>Services cover management & monitoring, risk prevention, and remediation design & support for any business projects with environmental impact. Navigating environmental law will no longer be an obstacle.</p>
      </div>
      <div className="consulting-content">
        {props.children}
      </div>
    </section>
  )
}

export const ConsultingPage = (props) => {
  return (
    <Fragment>
      <ConsultingService/>
      <ConsultingEMP/>
      <ConsultingCM/>
      <ConsultingHW/>
      <ConsultingUST/>
      <ConsultingWWM/>
      <ConsultingLP/>
      <ConsultingSP/>
      <ConsultingNCP/>
    </Fragment>
  )
}

const AssessmentService = (props) => {
  return (
    <section className="service-main">
      <div className="service-header">
        <div className="service-header-title">
          <h1>Assessment Services</h1>
          <img className="service-icon" src="./images/icons/assessment.png" alt="Assessment Icon" />
        </div>
        <p>HIES will assess the target site for actual and potential environmental impacts, both positive and negative. These environmental factors pertain to groundwater, air, soil, and structures, as well as their relationship to the people and local fauna/flora. Social and economic impact are also considered.</p>
        <p>Depending on the state of environmental risks, we at HIES will suggest the most appropriate course of action, be it implementing a specific management system or better practices, and if necessary, immediate remediation work.</p>
      </div>
      <div className="assessment-content">
        {props.children}
      </div>
    </section>
  )
}

export const AssessmentPage = (props) => {
  return (
    <Fragment>
      <AssessmentService/>
      <AssessmentESA/>
      <AssessmentECA/>
      <AssessmentAML/>
      <AssessmentAEP/>
      <AssessmentGWM/>
      <AssessmentBA/>
    </Fragment>
  )
}


const RemediationService = (props) => {
  return (
    <section className="service-main">
      <div className="service-header">
        <div className="service-header-title">
          <h1>Remediation Services</h1>
          <img className="service-icon" src="./images/icons/remediation.png" alt="Remediation Icon" />
        </div>
        <p>When an assessment indicates presence of environmental contaminants, HIES remediation services are readily available to remove all hazards.</p>
        <p>Providing innovative & cost-effective solutions, HIES will meet client’s environmental restoration needs by offering conscientious design and installation of remediation systems.</p>
        <p>Consultation services will present the most appropriate remedial alternatives to optimize clean up and meet regulatory requirements.</p>
      </div>
      <div className="remediation-content">
        {props.children}
      </div>
    </section>
  )
}

export const RemediationPage = (props) => {
  return (
    <Fragment>
      <RemediationService/>
      <RemediationSI/>
      <RemediationBR/>
    </Fragment>
  )
}

const OtherService = (props) => {
  return (
    <section className="service-main">
      <div className="service-header">
        <div className="service-header-title">
          <h1>Other Services</h1>
          <img className="service-icon" src="./images/icons/other.png" alt="Other Icon." />
        </div>
        <p>In addition to our main services, HIES provides several proactive services for specific purposes. These include training courses, services pertaining to Department of Defense, and pioneering Zero Waste technology.</p>
      </div>
      <div className="other-content">
        {props.children}
      </div>
    </section>
  )
}

export const OtherPage = (props) => {
  return (
    <Fragment>
      <OtherService/>
      <OtherHMT/>
      <OtherRS/>
      <OtherMMR/>
      <OtherDMS/>
    </Fragment>
  )
}

export const Arrow = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
  )
}

