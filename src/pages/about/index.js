import React from "react";
// import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import IconBar from "../../components/IconBar";

const About = () => {
    return (
      <div>
        <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="center-wrapper">
              <h1>About</h1>
              <div className="intro">Passionate about improving the web through design and development, I am a 2023
of Arizona State University's Bachelor of Applied Science program in Internet & Web
Development. With a coding boot camp under my belt and a genuine love for learning, I am
continuously expanding my skills with new tools and technologies. Combining my creative mindset,
technical expertise, and dedication to growth, I strive to deliver exceptional user experiences that
fuse intuitive design and seamless functionality.</div>
            <h2>Education</h2>
                <div className="rightbox">
                <div className="rb-container">
                    <ul className="rb">
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2023
                        </div>
                        <div className="item-title">
                            BAS Internet & Web Development
                        </div>
                        <div>
                            Arizona State University
                        </div>
                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">
                            2017
                        </div>
                        <div className="item-title">
                            Frontend Engineering
                        </div>
                        <div>
                            The Iron Yard
                        </div>
                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">
                            2010
                        </div>
                        <div className="item-title">
                            AAS Drafting Technology
                        </div>
                        <div>
                            Luna Community College
                        </div>
                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">
                            2008
                        </div>
                        <div className="item-title">
                            Diploma
                        </div>
                        <div>
                            Robertson High School
                        </div>
                    </li>
                    </ul>
                </div>
                </div>


                <h2>Experience</h2>
                <div className="rightbox">
                <div className="rb-container">
                    <ul className="rb">
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2023 - Present
                        </div>
                        <div className="item-title">
                            Starbucks | Seattle, WA
                        </div>
                        <div className="timestamp">
                            Heritage Barista
                        </div>
                        <p style={{marginTop: "1rem"}}>
                        As a Heritage Barista at the first Starbucks store in Pike Place Market, I have the privilege
of providing customers visiting from around the world with the Starbucks experience. As
customers share their stories of how Starbucks has been a part of their lives, I'm inspired
by the meaningful connections we've created and proud to share our company's rich
history. My team and I are committed to making every customer's visit to the first
Starbucks store an outstanding experience they will never forget. The Heritage Market
has been an incredibly fulfilling chapter in my journey with Starbucks, reflecting the
limitless possibilities of human connection.
                        </p>
                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2022 - 2023
                        </div>
                        <div className="item-title">
                            Starbucks Technology
                        </div>
                        <div className="timestamp">
                            Application Development Intern
                        </div>
                        <p style={{marginTop: "1rem"}}>
                        During my time as an Application Development Intern, I worked alongside a dynamic team
that supported supply chain operations and business performance management. I played
an active role in implementing updates for an application and collaborated closely with
teammates. This experience allowed me to gain hands-on exposure to cutting-edge web
technologies while utilizing my design skills. Thanks to this internship, I was able to
enhance the UI/UX experience for a few of our corporate employees, an aspect that is
often neglected. It was fulfilling to create enjoyable experiences for the individuals who
contribute to the success of the organization.
                        </p>
                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            2021 - 2022
                        </div>
                        <div className="item-title">
                            Starbucks | San Antonio, TX
                        </div>
                        <div className="timestamp">
                            Shift Supervisor
                        </div>
                        <p style={{marginTop: "1rem"}}>
                        While working as a Shift Supervisor in the heart of downtown, I made it a priority to
develop personal relationships with both customers and partners. Through mentorship
and practical training, I was able to facilitate successful partnerships and improved
processes. My unwavering dedication to providing excellent customer service led me to
take ownership of daily operations at a high-earning store. My main goal was to create a
welcoming atmosphere, and I consistently went above and beyond to exceed
expectations and leave a lasting impression on all customers and partners.
                        </p>
                    </li>
                    </ul>
                    <IconBar />
                </div>
                </div>


                </div>
              
            </div>
          </div>
        </section>
      </Layout>
      </div>
    );
}

export default About;