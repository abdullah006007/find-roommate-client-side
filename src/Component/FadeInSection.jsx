import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FadeInSection = ({
  children,
  delay = 0,          // start immediately
  duration = 2000,     // 2 seconds fade-in
  triggerOnce = true,  // only show once
  fraction = 0.5,      // starts animating when 50% visible
  cascade = false,     // child elements animate together
}) => {
  return (
    <Fade
      delay={delay}
      duration={duration}
      triggerOnce={triggerOnce}
      fraction={fraction}
      cascade={cascade}
    >
      {children}
    </Fade>
  );
};

export default FadeInSection;
