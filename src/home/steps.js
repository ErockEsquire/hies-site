import React from 'react'

export default function Steps() {
  return (
    <div className="home-services">
      <div className="home-services-text">
        <h2>Our Process</h2>
        <p>From receiving your request to delivering results</p>
      </div>
      <div className="home-services-steps">
        <div className="home-service-step">
          <div>
            <img className="home-service-step-image" src="./images/home/meeting.png" alt="HIES meeting clients"/>
          </div>
          <h2>Request Info</h2>
          <p>To help you succeed, we must first understand your goals. </p>
          <p>Send us information or proposal about your project, and we will work to design cost-effective solutions.</p>
          <p>Ask any questions you need. HIES believes communication is the key to a great partnership.</p>
        </div>
        <div className="svg">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
        </div>
        <div className="home-service-step">
          <div>
            <img className="home-service-step-image" src="./images/home/document.png" alt="HIES sending proposal"/>
          </div>
          <h2>Present Plan</h2>
          <p>Our team will present a proposal documenting every step necessary to achieve your goal.</p>
          <p>Throughout the journey, we will provide consultation toward the esoteric environmental laws & requirements obstructing your project, so you can rest easy and focus on more important tasks.</p>
        </div>
        <div className="svg">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
        </div>
        <div className="home-service-step">
          <div>
            <img className="home-service-step-image" src="./images/home/worker.png" alt="HIES workers getting to work"/>
          </div>
          <h2>Get to Work</h2>
          <p>Your project's environmental compliance is a top priority.</p>
          <p>We will manage, investigate, assess, and remediate if necessary. By the end, you will receive a fully documented report detailing the accomplished work, and further steps for maintenance & support.</p>
        </div>
      </div>
      <h2 className="home-services-end">Our client's success is our success</h2>
    </div>
  )
}