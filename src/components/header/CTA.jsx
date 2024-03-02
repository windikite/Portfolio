import React from 'react';
import CV from '../../assets/ChristopherCraigResume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download='ChristopherCraigResume.pdf' className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Info
      </a>
    </div>
  );
};

export default CTA;
