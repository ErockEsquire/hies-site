import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

export default function GProjects() {

  const renderProjectsEven = () => {
    const evenProjects = gprojects.filter((project, index) => index % 2 === 0)
    return evenProjects.map((project, index) => <ProjectCard key={index} project={project}/>)
  }

  const renderProjectsOdd = () => {
    const oddProjects = gprojects.filter((project, index) => index % 2 !== 0)
    return oddProjects.map((project, index) => <ProjectCard key={index} project={project}/>)
  }

  return (
    <section className="project-main-cards">
      <div className="project-column">
        {renderProjectsEven()}
      </div>
      <div className="project-column">
        {renderProjectsOdd()}
      </div>
    </section>
  )
}

const ProjectCard = (props) => {

  const { title, client, paragraphs} = props.project
  const [open, setOpen] = useState(false)

  const defaultStyle = {
    transition: `transform 300ms, opacity 100ms ease`,
    opacity: 1
  };
  
  const transitionStyles = {
    entering: { transform: 'translateY(-30%)', opacity: 0 }, 
    entered: { transform: 'translateY(0)', opacity: 1},
    exiting: { transform: 'translateY(-30%)', opacity: 0},
    exited: { transform: 'translateY(-30%)', opacity: 0}
  };

  const renderParagraphs = () => {
    return paragraphs.map(paragraph => <p>{paragraph}</p>)
  }

  return (
    <article className="project-card">
      <div className="project-title gis" onClick={() => setOpen(!open)}>
        <div>
          <h2>{title}</h2>
          <h3>Client: <strong>{client}</strong></h3>
        </div>
        <svg className={open ? "arrow-down":"arrow-right"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
      </div>
      <Transition
        in={open}
        timeout={{
          appear: 100,   
          enter: 200,
          exit: 300
        }}
        appear
        unmountOnExit
      >
        {state => (
          <div className="project-text"
            style={{...defaultStyle, ...transitionStyles[state]}}>
            {renderParagraphs()}
          </div>
        )}
      </Transition>
    </article>
  )
}

const gprojects =[
  {title: "GIS Communications System Survey", client: "NAVFAC Marianas", paragraphs: ["HIES developed an accurate GIS data for communications infrastructure utility system characterizing the “Outside Cable Plant” infrastructure.  HIES reviewed and analyze existing government reference documentation and developed a GPS point feature class and data dictionary that was used for field data capture.  Field data was collected using the RTK method which resulted in a horizontal accuracy of approximately 4cm.", "For this effort, a Trimble base station which broadcasted RTK correction information via a Pacific Crest PDL external radio and Trimble R8 ver.2 receivers and TSC2 controllers were used as a rover to collect field positions and to verify/enter attribute data.  A survey done by Towill in 2005 included several island wide survey markers. Additional markers were recovered and surveyed by HIES in 2011. This collection of markers represents a consistent network of baselines and was used as control to extend that network to include at least one point on each of the installation areas for which Communication system data is to be collected.", "All collected data was complied with NSSDA standards for horizontal and vertical accuracy, SDSFIE standards for data structure and attribution, FGDC metadata requirements, and NAVFAC models."]}, 
  {title: "Baseline Monitoring AAFB & GDB Development", client: "NAVFAC Marianas (DPRI)", paragraphs: ["HIES developed and implemented a long term monitoring program for terrestrial vegetation, invertebrates and vertebrates on Guam to document the effectiveness of the Hazard Analysis and Critical Control Point (HACCP) implementation at AAFB construction sites.  Over 25,000 point and area data was collected via survey grade GPS, attributed, and put into a GIS Navy EV Model.  The data was also organized and attributed under SDSFIE 3.0.", "The monitoring program developed monitoring protocols for terrestrial vegetation, invertebrates and vertebrates; and included spatial layout and pre/post GIS data analysis.  All collected data was complied with NSSDA standards for horizontal and vertical accuracy, SDSFIE standards for data structure and attribution, FGDC metadata requirements, and NAVFAC EV model.", "HIES deployed  several Trimble 5800 survey grade GPS equipment using TSCE controllers running the data collection software to preserve accuracy.  The Database was also Developed in ArcGIS SDSFIE-compliant Personal GeoDatabase (PGDB)."]}, 
  {title: "Satellite Mapping of Guam and Static Survey", client: "NAVFAC Marianas", paragraphs: ["HIES acquired  satellite imagery for the entire island of Guam at 40 cm resolution and 8 band multispectral imagery; and mosaic the images to produce a “less than” 2% cloud free image. The image was georeferenced, ortho photo, and tiled.  The satellite orthoimagery consisted of 41cm pan-sharpened blue, green, red and near infrared channels.", "These 4 bands co-registered to each other, and was orthorectified using satellite ephemeris and rational polynomial coefficient information, an existing set of 2009 aerial photographs, along with LiDAR DEM, ERDAS Imagine, and 2005 orthoimagery.  A second satellite orthoimagery of 8 bands with blue, green, red, near infrared red, but also including the additional 4 bands of coastal blue (400-450nm), yellow (585-625nm), red-edge (705-745), and NIR2 (860-1040nm) was acquired for this deliverable.", "Cloud patching consisted of using Erdas and other mosaic tools; but all data was preserved as original so not to corrupt any original spectral background information.  This effort also consisted of surveying the coordinate systems used on AAFB to determine the shift between the established 1993 coordinate system and the coordinate system newly created by Towill in 2005.  Results of CORS AAFB showed the shift between GPS data differentially corrected to Guam's CORS stations versus the same data differentially corrected to Andersen's base station.", "All collected data was complied with NSSDA standards for horizontal and vertical accuracy, SDSFIE standards for data structure and attribution, FGDC metadata requirements, and NAVFAC models.  HIES deployed several Trimble R2 survey grade GPS equipment using TSCE controllers running the data collection software to preserve accuracy.  The Database was also developed in ArcGIS SDSFIE-compliant Personal GeoDatabase (PGDB)."]}, 
  {title: "Finegayan Water Utilities Survey and Engineering", client: "NAVFAC Mar", paragraphs: ["Site assessment and survey of all water utility systems on Finegayan for Guam Buildup planning. Measure and assess conditions of all Stormwater, Wastewater, and Potable water systems throughout NCTS Finegayan and secured areas throughout Finegayan. Studies included hydrological measurements in pipes and drainage systems. Data gathered were location, flowrate, flow direction, drainage points, wastewater depth, etc. Analysis included the future usage of assessed water utilities including the structural and mechanical conditions of stormwater and wastewater systems throughout northern Guam.", "All collected data complied with NSSDA standards for horizontal and vertical accuracy, SDSFIE standards for data structure and attribution, FGDC metadata requirements, and NAVFAC water utilities logical model. HIES deployed several Trimble 5800 survey grade GPS equipment using TSCE controllers running the data collection software to preserve accuracy.", " The Database was also developed in ArcGIS SDSFIE-compliant Personal GeoDatabase (PGDB). HIES Populated the PGDB with water utility features and interpolated features based on field measurements and observations, existing data sources and close coordination with utility facilities. The water utility system was delivered as a topologically consistent network. This project was in support of the Guam Buildup and in direct coordination with Navfac Planning."]}, 
  {title: "Planning, Mapping, Surveying, & Engineering services on Guam, Saipan, Tinian, CNMI", client: "NAVFAC MAR", paragraphs: ["The US Navy Marianas in coordination with US Navy and Marine Corp installations throughout Okinawa and Hawaii has pre-planning requirements for Pacific Rim BRAC. HIES created orthographic imagery suitable for 100’ scale (6-inch pixel resolution) of the installations for use in Naval Facilities Engineering Command (NAVFAC) Geospatial Information & Services (GI & S) application known as the Regional Shore Installation Management System (RSIMS) and to create information suitable for BRAC planning.", "HIES was responsible for a number of tasks. These included data collection through remote sensing techniques (e.g. high resolution aerial photo, LIDAR) and digital orthophotography, creation of vector data through feature extraction, research of records & field data collection (e.g. use of conventional surveying techniques, Global Positioning Systems, ground penetrating radar, etc), underground utility surveying, research and population of metadata, and training of personnel.", "A number of GIS tasks included update & maintenance of Geographical Information Systems (GIS) data, documentation of GIS data as well as preparation of GIS user guides & manuals, writing of technical reports pertaining to GIS systems development and needs, database design & development, data modeling, database administration, development & incorporation of digital aerial image mapping into the GIS and the ability to provide photogrammetric mapping services. High resolution imagery was delivered and incorporated into Infads and RSIMS as a deliverable. Scope of this project also included planimetrics and creation of GDB under SDSFIE."]}, 
  {title: "Engineering Mapping & Surveying Services, Various Locations, Singapore 2008", client: "NAVFAC FE", paragraphs: ["The purpose of this effort is to create orthographic imagery suitable for 1:500 mapping (5 cm pixel resolution) and to generate oblique imagery of the installation for use in IRRP Planning. The tasks include installing survey monuments, performing an aerial survey, Planimmetric extractions, and producing digital orthographic photographs. This project also entails political interaction with foreign governments in coordination with US Embassy representatives/US Naval Personnel for aerial permits of sensitive sights.", "The NRCC Singapore base is a joint lease coordination with the Royal Navy, Singaporean Defense, and the Austrailian Navy. In this heavy political environment, precise project management and project coordination is vitally important. Surveying and Cadastral tasks included Navy and Joint Basing physical assets, Water Utilities, Boundary Lines, and Roads. All assets were compiled in SDSFIE format and placed into Navy Database under Infads, RSIMS, and Maximo."]}, 
  {title: "Contour Map Creation of Tinian & Pagan", client: "NAVFAC PAC", paragraphs: ["HIES created topographic contour data of the Commonwealth of Northern Mariana Islands (CNMI) of Tinian and Pagan to support US Marine Force Pacific training exercises. The topographic contour data of Tinian was generated at a 5 foot contour interval from existing 30cm color stereo imagery previous collected by HIES. The raw ortho imagery and supporting ancillary data such as ABGPS, IMU data and ground control survey points were used for the generation of contour data meeting the specifications detailed below.", "Ground control of Pagan and Tinian was collected by HIES personnel using GIS base station equipment. Due to the short timeframe and abundant cloud cover in the Mariannas, HIES used photogrammetric techniques rather than hyperspectral techniques to create contours of each island thus saving the clients over 70% of the original cost."]}, 
  {title: "GIS Support Contract", client: "Misc.", paragraphs: ["Provided an on-site GIS technician/analyst to conduct a variety of tasks including, but not limited to: creating and printing customized maps, editing spatial data, field verification of spatial data, collection of spatial data via GPS, data conversion and formatting, geodatabase updating and maintenance, and GIS analysis."]}, 
  {title: "Geospatial Information Systems IT", client: "Misc.", paragraphs: ["Created a scalable .NET web service in C# utilizing the ArcSDE C library.  The web service connected to the ArcSDE geodatabase and, from a specified feature class and parameter extents, returned proprietary XML of all the features, vertices, and attributes of the features within the input parameters.  The main function of the tool was to pull out the spatial geometry and attributes of the requested features from ESRI’s ArcSDE in an XML format to be graphically reproduced and transferred more easily between software platforms than is currently allowed by ArcSDE."]}, 
  {title: "Oracle HTML-DB Application", client: "Misc.", paragraphs: ["Created an Oracle HTML-DB application in an Oracle 10g database to allow users to browse an existing Oracle Internet Directory (OID) and request additions to the OID structure.  Specifically, the OIDD LDIF Generation Tool provided users with a tree structure to navigate through a directory, select a group where the proposed addition will be made, and submit an LDIF text file for testing and acceptance."]}, 
  {title: "Housing Project", client: "Misc.", paragraphs: ["HIES Project Designers, as a key member of the Design Team, prepared the specifications and government cost estimates.  HIES also conducted a hazardous materials survey and mapping of one hundred housing units.  This survey was performed in order to obtain information related to hazardous materials in the various units planned for renovation prior to the upcoming renovation of the buildings.  The work was conducted in general accordance with applicable United States EPA guidelines."]}, 
  {title: "Grounds Maintenance", client: "Misc.", paragraphs: ["Updated the Grounds and Tree Maintenance Services data for the a client.  GIS data layers were modified and re-analyzed within three days to meet a last-minute schedule."]}, 
  {title: "Real Estate Summary Mapping", client: "Misc.", paragraphs: ["Data was created based on survey information from legal documents. This was done to provide geospatial delineation/mapping of land parcels assets in GIS format."]}, 
  {title: "Archaeological Protection Signage", client: "Misc.", paragraphs: ["Data was created based on survey information from legal documents. This was done to provide geospatial delineation/mapping of land parcels assets in GIS format."]},
  {title: "Environmental Reports into GIS", client: "Misc.", paragraphs: ["GIS data was created in collaboration with reports such as asbestos and lead-based paint to create a geospatial view of the environmental assessment work completed. The purpose was for the client to easily access and view the data from any computer with internet access."]},
  {title: "Spatial Management", client: "Misc.", paragraphs: ["HIES used non-georeferenced Computer Aided Drafting (CAD) floor plans provided by the client as a background to digitize space level polygons and populate attribute data, the majority of which was collected from the existing floor plans. HIES digitized a total of 1000 individual building floors."]}
]