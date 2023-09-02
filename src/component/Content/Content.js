import React, { useState, useEffect } from 'react';
import './Content.css';
import { Link } from 'react-scroll';

function Content() {
    const [activeSection, setActiveSection] = useState('section1'); // Set an initial active section
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        function handleScroll() {
          if (!isScrolling) {
            const sections = document.querySelectorAll('.full-scroll-section');
    
            // Find the active section by checking which one is in the viewport
            for (const section of sections) {
              const rect = section.getBoundingClientRect();
              console.log(rect.top, rect.bottom, window.innerHeight);
              if (rect.top >= 0 && rect.bottom <= (window.innerHeight + 60)) {
                  console.log(section.id);
                setActiveSection(section.id);
              }
            }
          }
        }
    
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);
    
    // Function to handle dot item click
    function handleDotItemClick(sectionId) {
        setIsScrolling(true); // Set scrolling flag to false
        setActiveSection(sectionId); // Update active section based on the clicked dot item

        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    }

    return (
        <div className="container" style={{ marginTop: '60px' }}>
            <div className="scrollable-content" style={{ overflow: 'hidden' }}>
                <div className="full-scroll-container">
                    <section id="section1" className="full-scroll-section">
                        <h2>Section 1</h2>
                        <p>Content for Section 1</p>
                    </section>
                    <section id="section2" className="full-scroll-section">
                        <h2>Section 2</h2>
                        <p>Content for Section 2</p>
                    </section>
                    <section id="section3" className="full-scroll-section">
                        <h2>Section 3</h2>
                        <p>Content for Section 3</p>
                    </section>

                    <ul className="dot-menu">
                        <li><a href="#section1" className={activeSection === 'section1' ? 'active' : ''} onClick={() => handleDotItemClick('section1')}></a></li>
                        <li><a href="#section2" className={activeSection === 'section2' ? 'active' : ''} onClick={() => handleDotItemClick('section2')}></a></li>
                        <li><a href="#section3" className={activeSection === 'section3' ? 'active' : ''} onClick={() => handleDotItemClick('section3')}></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Content;