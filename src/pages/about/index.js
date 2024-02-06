import React from "react";
// import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { useInView } from 'react-intersection-observer';
import IconBar from "../../components/IconBar";

const TimelineEvent = ({ date, heading, subHeading, payload}) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.25,
    });

    return (
        <li className={`timeline-event ${inView ? 'in-view' : ''}`} ref={ref} ng-repeat="itembx">
            <div className="timestamp">{date}</div>
            <div className="item-title">{heading}</div>
            <div>{subHeading}</div>
            <p>{payload}</p>
        </li>
    )
};

const About = () => {
    return (
      <div>
        <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="center-wrapper">
              <h1>About</h1>
              <div className="intro">Passionate about improving the web through design and development, I am a 2023 graduate
of Arizona State University's Bachelor of Applied Science program in Internet & Web
Development. With a coding boot camp under my belt and a genuine love for learning, I am
continuously expanding my skills with new tools and technologies. Combining my creative mindset,
technical expertise, and dedication to growth, I strive to deliver exceptional user experiences that
fuse intuitive design and seamless functionality.</div>
            <h2>Education</h2>
                <div className="rightbox">
                <div className="rb-container">
                    <ul className="rb">
                        <TimelineEvent
                            date="2023"
                            heading="BAS Internet & Web Development"
                            subHeading="Arizona State University"
                            payload=""
                        />
                        <TimelineEvent
                            date="2017"
                            heading="Frontend Engineering"
                            subHeading="The Iron Yard"
                            payload=""
                        />
                        <TimelineEvent
                            date="2010"
                            heading="AAS Drafting Technology"
                            subHeading="Luna Community College"
                            payload=""
                        />
                        <TimelineEvent
                            date="2008"
                            heading="Diploma"
                            subHeading="Robertson High School"
                            payload=""
                        />
                    </ul>
                </div>
                </div>


                <h2>Experience</h2>
                <div className="rightbox">
                <div className="rb-container">
                    <ul className="rb">
                        <TimelineEvent
                            date="2023 - Present"
                            heading="Starbucks | Seattle, WA"
                            subHeading="Heritage Barista"
                            payload="As a Heritage Barista at the first Starbucks store in Pike Place Market, I have the privilege of providing customers visiting from around the world with the Starbucks experience. As customers share their stories of how Starbucks has been a part of their lives, I'm inspired by the meaningful connections we've created and proud to share our company's rich history. My team and I are committed to making every customer's visit to the first Starbucks store an outstanding experience they will never forget. The Heritage Market has been an incredibly fulfilling chapter in my journey with Starbucks, reflecting our mission of nurturing the limitless possibilities of human connection."
                        />
                        <TimelineEvent
                            date="2022 - 2023"
                            heading="Starbucks Technology"
                            subHeading="Application Development Intern"
                            payload="During my time as an Application Development Intern, I worked alongside a dynamic team that supported supply chain operations and business performance management. I played an active role in implementing updates for an application and collaborated closely with teammates. This experience allowed me to gain hands-on exposure to cutting-edge web technologies while utilizing my design skills. Thanks to this internship, I was able to enhance the UI/UX experience for a few of our corporate employees, an aspect that is often neglected. It was fulfilling to create enjoyable experiences for the individuals who contribute to the success of the organization."
                        />
                        <TimelineEvent
                            date="2021 - 2022"
                            heading="Starbucks | San Antonio, TX"
                            subHeading="Shift Supervisor"
                            payload="While working as a Shift Supervisor in the heart of downtown, I made it a priority to develop personal relationships with both customers and partners. Through mentorship and practical training, I was able to facilitate successful partnerships and improved processes. My unwavering dedication to providing excellent customer service led me to take ownership of daily operations at a high-earning store. My main goal was to create a welcoming atmosphere, and I consistently went above and beyond to exceed expectations and leave a lasting impression on all customers and partners."
                        />
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