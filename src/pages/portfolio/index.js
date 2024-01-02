import React from "react";
// import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

const Portfolio = () => {
    return (
      <div>
        <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              {/* <h1>Portfolio</h1> */}
              
              {/* begin */}
              <div className="center-wrapper">
              <h1>Portfolio</h1>
              <div className="intro">Welcome to my carefully curated collection of projects where design meets functionality. This showcase features my meticulously crafted web design and development work to demonstrate my skills and expertise. From sleek interfaces to seamless user experiences, each project tells a unique story of creativity and innovation. Take a dive and discover the artistry behind the code.</div>
            <h2>Gallery</h2>
            <div className="card">
        <div className="card-content">
            <div className="card-title">A Spark of Inspiration</div>
            <p className="card-text">A small welding business wanted to create a website to showcase their work and establish a solid online presence. The company lacked a logo and brand style guide, so the website was created to launch its online identity. It showcases their skills, portfolio, and essential business information.</p>
            <a 
            href="https://pecosvalleyqualitywelding.com/" 
            target="_blank"
            rel="noreferrer"
             className="button-link">View</a>
            </div>
        </div>

        {/* <div className="card">
        <div className="card-content">
            <div className="card-title">Cube Navigation</div>
            <p className="card-text">This project aims to test the effectiveness of using 3D CSS styling and animations for website navigation. Instead of the traditional navigation menu, the approach involves
using a cube that can be rotated horizontally to display up to three sides of content. The proof of concept will be implemented on an e-commerce site to determine its potential for improving user experience. The project uses HTML, CSS, and JavaScript.</p>
            <a
            href="https://kaleidoscopic-meerkat-37ef34.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="button-link">View</a>
        </div>
        </div> */}

        <div className="card">
        <div className="card-content">
            <div className="card-title">Feel the Beat</div>
            <p className="card-text">A freelance audio engineer required a portfolio website to launch his business. The website created for this client is a single-page static website built using HTML, CSS, and JavaScript. As there was limited content available at the time of launch, the site needed to be refined to showcase the portfolio in the best possible way.</p>
            <a 
            href="https://www.ziawavelength.com/" 
            target="_blank"
            rel="noreferrer"
            className="button-link">View</a>
        </div>
        </div>

        <div className="card">
        <div className="card-content">
            <div className="card-title">Digital Storefront</div>
            <p className="card-text">There are tons of websites that offer their products or services directly to consumers through the e-commerce section of their website. This project delves into the fundamentals of shopping cart functionality. The imaginary website offers fruit throughout the galaxy. The goal of this undertaking was to gain a better understanding of how to program a website with a shopping cart feature.</p>
            <a
            href="https://bright-marzipan-14a860.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="button-link">View</a>
        </div>
        </div>

        {/* <div className="card">
        <div className="card-content">
            <div className="card-title">Taming the Wild Wild Web</div>
            <p className="card-text">Web development can be a challenging task, especially for small businesses. The main objective of this project was to develop a website that could assist users in determining the necessary scope for their website and provide suggestions for the next steps. The application utilizes Node.js and React, making it a reliable and efficient tool.</p>
            <a href="#" className="button-link">View</a>
        </div>
        </div> */}
        
                </div>
              {/* end */}
              
            </div>
          </div>
        </section>
      </Layout>
      </div>
    );
}

export default Portfolio;