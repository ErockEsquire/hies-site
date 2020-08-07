import React, { useRef, useEffect } from 'react'

export default function TypeScript(props) {
  const instance = useRef(null)

  return (
    <section className="home-type">
      <h1>We </h1><h1 className="typescript" ref={instance}>{useScript(instance)}</h1>
      {props.children}
    </section>
  )
}

function useScript(ref) {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.innerHTML = `
    let loopNum = 0;
    let text = '';
    let isDeleting = false;

    const type = (toType, element, pause) => {
      const i = loopNum % toType.length;
      const fulltext = toType[i];
    
      if (isDeleting) {
        text = fulltext.substring(0, text.length - 1);
      } else {
        text = fulltext.substring(0, text.length + 1);
      }
    
      element.innerText = text;

      let stutter = 200 - Math.random() * 100;
    
      if (isDeleting) { stutter /= 2; }
    
      if (!isDeleting && text === fulltext) {
        stutter = pause;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        loopNum++;
        stutter = 500;
      }
    
      setTimeout(function() {
        type(toType, element, 1000);
      }, stutter);
    };
    
    const element = document.querySelector('.typescript');
    type(["plan.", "support.", "make it work."], element, 1000)
    `

    script.async = true;
    ref.current.appendChild(script);

    return () => {
      script.remove()
    }
  }, [ref])
}