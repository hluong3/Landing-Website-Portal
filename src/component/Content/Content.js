import React, { useState, useEffect } from "react";
import "./Content.scss";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";

import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import Investment from "../Investment/Investment";
import ForProject from "../ForProject/ForProject";
import Research from "../Research/Research";
import Careers from "../Careers";
import ContactUs from "../ContactUs";

function Content() {
  // const [activeSection, setActiveSection] = useState("section1"); // Set an initial active section
  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   // Function to handle scroll events
  //   function handleScroll() {
  //     if (!isScrolling) {
  //       const sections = document.querySelectorAll(".full-scroll-section");

  //       // Find the active section by checking which one is in the viewport
  //       for (const section of sections) {
  //         const rect = section.getBoundingClientRect();
  //         console.log(rect.top, rect.bottom, window.innerHeight);
  //         if (rect.top >= 0 && rect.bottom <= window.innerHeight + 60) {
  //           console.log(section.id);
  //           setActiveSection(section.id);
  //         }
  //       }
  //     }
  //   }

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolling]);

  // Function to handle dot item click
  // function handleDotItemClick(sectionId) {
  //   setIsScrolling(true); // Set scrolling flag to false
  //   setActiveSection(sectionId); // Update active section based on the clicked dot item

  //   setTimeout(() => {
  //     setIsScrolling(false);
  //   }, 500);
  // }

  // const scrollToSection = (sectionId) => {
  //     // Scroll to the section with the specified ID
  //     scroll.scrollTo(sectionId, {
  //         duration: 800, // Scroll animation duration in milliseconds
  //         smooth: 'easeInOutQuart', // Animation timing function
  //         offset: -50, // Adjust the offset as needed (negative value moves the target up)
  //     });
  // };

  return (
    <div className="container">
      <div className="container-content">
        <div style={{ height: "60px" }}></div>
        <div className="scrollable-content" style={{ overflow: "hidden" }}>
          <div className="full-scroll-container">
            <section id="section1" className="full-scroll-section">
              <AboutUs></AboutUs>
            </section>

            <section id="section2" className="full-scroll-section">
              <Team></Team>
            </section>

            <section id="section3" className="full-scroll-section">
              <Investment></Investment>
            </section>

            <section id="section4" className="full-scroll-section">
              <ForProject></ForProject>
            </section>

            <section id="section5" className="full-scroll-section">
              <Research></Research>
            </section>

            <section id="section6" className="full-scroll-section">
              <Careers></Careers>
            </section>

            <section id="section7" className="full-scroll-section">
              <ContactUs></ContactUs>
            </section>

            {/* <ul className="dot-menu">
              <li><a href="#section1" className={activeSection === 'section1' ? 'active' : ''} onClick={() => handleDotItemClick('section1')}></a></li>
              <li><a href="#section2" className={activeSection === 'section2' ? 'active' : ''} onClick={() => handleDotItemClick('section2')}></a></li>
              <li><a href="#section3" className={activeSection === 'section3' ? 'active' : ''} onClick={() => handleDotItemClick('section3')}></a></li>
              <li><a href="#section4" className={activeSection === 'section4' ? 'active' : ''} onClick={() => handleDotItemClick('section4')}></a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
