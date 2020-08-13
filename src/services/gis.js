import React from 'react'

export function GisSDA () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>GIS Surveying & Data Acquisition</h2>
        <p>HIES assists organizations in designing, developing, and implementating Geographic Information Systems (GIS). Further support includes assisting clients to deploy their own mapping systems, possible to be hosted on HIES personal ArcServer.</p>
        <p>HIES utilizes GIS for spatial analysis, groundwater modeling, internet mapping, gps locating, CADD integration, and even ecology projects, creating maps based on endangered species locations and survey sites.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/gis-sda.jpg" alt="HIES worker conducting GIS surveying with equipment."/>
      </div>
    </article>
  )
}

export function GisDD () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>GIS Database Development</h2>
        <p>HIES is equipped with several professional Information Technology (IT) experts able to create and facilitate all clients' technical needs.</p>
        <p>Most common requests are to create, deploy, and maintain GIS databases, but capabilities extend to comprehensive GIS database design and custom GIS programming.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/gis-dd.jpg" alt="Python code for GIS software."/>
      </div>
    </article>
  )
}

export function GisIOP () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>GIS Specifics - Image Acquisition, Object Identification, Photogrammetry</h2>
        <p>HIES GIS services extends to spatial imagery classification & interpretation, object identification, and photogrammetry & orthomosaics.</p>
        <h3>Fundamental</h3>
        <p>Image Interpretation is the processes of detection, identification, description, and assessment of objects imaged.</p>
        <p>Photogrammetry is the process of photographing a point from multiple vantages, usually aerial, allowing depth and perspective to be captured.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/gis-iop.png" alt="GIS photogrammetry orthomosaic."/>
      </div>
    </article>
  )
}
