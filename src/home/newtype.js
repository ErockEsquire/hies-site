import React from 'react'
import Typical from 'react-typical';

export default function TypeScript(props) {

  return (
    <section className="home-type">
      <h1 className="typescript">We&nbsp;
        <Typical
          steps={['plan.', 1200, 'support.', 1400, 'make it work.', 1500]}
          loop={Infinity}
          wrapper="h1"
        />
      </h1>
      {props.children}
    </section>
  )
}
