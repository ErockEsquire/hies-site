import { useEffect } from 'react'

//<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script> */}
//install pixi.js

const useScript = (ref) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.innerHTML = `function initPixi() {
      app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
      const container = document.getElementById('water-script')
      container.appendChild(app.view);
  
      let image = new PIXI.Sprite.from("./images/bluewater.png");
      image.width = window.innerWidth;
      image.height = window.innerHeight;
      app.stage.addChild(image);
  
      displacementSprite = new PIXI.Sprite.from("./images/cloud.jpg");
      displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      app.stage.addChild(displacementSprite);
      app.stage.filters = [displacementFilter];
  
      app.renderer.view.style.transform = 'scale(1.02)';
  
      displacementSprite.scale.x = 4;
      displacementSprite.scale.y = 4;
      animate();
    }
  
    function animate() {
      displacementSprite.x += 8;
      displacementSprite.y += 3;
      requestAnimationFrame(animate);
    }
  
    initPixi();`;

    script.async = true;

    ref.current.appendChild(script);

  }, [ref])

}

export default useScript;