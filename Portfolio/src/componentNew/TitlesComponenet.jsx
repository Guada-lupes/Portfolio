import React from 'react';
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

const TitlesComponent = ({texto, class_name}) => {
  const titlesRef = useRef(null);

    useLayoutEffect(()=>{
      document.fonts.ready.then(() => {
      gsap.registerPlugin(SplitText);
        let split = SplitText.create(titlesRef.current, {
          type: "words, chars",
          onSplit: (self) => {
            gsap.from(self.chars, {
              duration: 1,
              ease: "back.out",
              rotation: "random(-30, 30)",
              yPercent: "random([-100, 100])",
              autoAlpha: 0,
              stagger: {
                from: "random",
                amount: 0.03,
              },
            });
          },
        });
      });
    }, [])
    return (
        <h2 ref={titlesRef} className={class_name}>
            {texto}
        </h2>
    );
};

export default TitlesComponent;