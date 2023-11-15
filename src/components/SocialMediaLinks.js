import React from 'react';
import Github from '../img/icons/github.svg';
import LinkedIn from '../img/icons/linkedin.svg';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <p className="social-media-heading">Follow Me</p>
      <div className="social-media-icons">
        <a href="https://github.com/Gadget89" target='_blank' rel="noreferrer" className="social-media-icon-link">
          <img src={Github} alt="Follow me on Github" className="social-media-icon" />
          <span className="social-media-icon-name">Github</span>
        </a>
        <a href="https://www.linkedin.com/in/nic-roybal-54bb1413a" target='_blank' rel="noreferrer" className="social-media-icon-link">
          <img src={LinkedIn} alt="Follow me on LinkedIn" className="social-media-icon" />
          <span className="social-media-icon-name">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
