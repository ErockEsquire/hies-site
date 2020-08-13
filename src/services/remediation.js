import React from 'react'


export function RemediationSI () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Remediation Systems Installation & Support</h2>
        <p>HIES specializes in environmental investigations and cost-effective remediation for all types of contaminated property. HIES is equipped with a team of experienced scientists who have extensive knowledge of remediation solutions.</p>
        <p>If hazardous materials are found within the structure or project site, remediation is a necessity. Common hazardous materials include asbestos, lead, mold, mercury, PCBs (polychlorinated biphenyl), silica, arsenic, ozone depleting substances, rodent/bird droppings, radioactive materials, and any other materials that are flammable or toxic.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/remediation-asbestos.jpg" alt="HIES workers performing asbestos remediation work in building."/>
      </div>
    </article>
  )
}

export function RemediationBR () {

  return (
    <article className="service-card">
      <div className="service-card-text">
        <h2>Bioremediation & Restoration</h2>
        <p>Bioremediation allows natural “green” processes to clean up harmful chemicals and metals from the environment using micro-organisms, fungi, plants, and enzymes rather than use of conventional mechanical techniques for remediation.</p>
        <p>HIES uses various bioremediation, phytoremediation, and mycoremediation with engineering techniques to fully restore or return the environment altered by contaminants to its original condition.</p>
        <h3>Fundamental</h3>
        <p>Aerobic & anaerobic micro-organisms can reduce pollution through the biological degradation of pollutants into non-toxic substances, using this breakdown as an energy source. This can be effective in restoring soil and groundwater, and biofiltration of the air.</p>
      </div>
      <div className="service-card-image-container">
        <img className="service-card-image" src="./images/services/remediation-bio.png" alt="Micro-organisms for bioremediation in pond."/>
      </div>
    </article>
  )
}