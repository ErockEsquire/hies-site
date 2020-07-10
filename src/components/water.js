import React, { useRef } from 'react';
import useScript from './waterscript';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Water() {

  const instance = useRef(null)

  return(
    <section className="water-section">
      <div id="script" ref={instance}>{useScript(instance)}</div>
      <div className="water-text">
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true}><h2>Contributing to the World</h2></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={600}><h2>One Step at a time</h2></ScrollAnimation>
      </div>
    </section>
  )
}
