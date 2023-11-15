import React from 'react';
import css from '../img/icons/css3.svg';
import html from '../img/icons/html5.svg';
import javascript from '../img/icons/js.svg';
import node from '../img/icons/node-js.svg';
import react from '../img/icons/react.svg';

const IconBar = () => {
  return (
    <>
        <h2 className="">Expertise</h2>
        <div className="social-media-container" style={{marginTop: "2rem"}}>
      <div className="social-media-icons">
        <div className="social-media-icon-link">
          <img src={css} alt="CSS3 Logo" className="social-media-icon" />
          <span className="social-media-icon-name">CSS</span>
        </div>
        <div className="social-media-icon-link">
          <img src={html} alt="HTML5 Logo" className="social-media-icon" />
          <span className="social-media-icon-name">HTML</span>
        </div>
        <div className="social-media-icon-link">
          <img src={javascript} alt="JavaScript Logo" className="social-media-icon" />
          <span className="social-media-icon-name">JavaScript</span>
        </div>
        <div className="social-media-icon-link">
          <img src={node} alt="NodeJS Logo" className="social-media-icon" />
          <span className="social-media-icon-name">Node</span>
        </div>
        <div className="social-media-icon-link">
          <img src={react} alt="ReactJS Logo" className="social-media-icon" />
          <span className="social-media-icon-name">React</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default IconBar;
