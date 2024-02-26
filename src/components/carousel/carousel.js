import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

    // Function to change the slide
    const changeSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment slide index or reset to 1 if it's the last slide
            setCurrentSlideIndex(prevIndex => (prevIndex === 4 ? 1 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once on mount

    return (
        <div id='carousel'>
            <div id='slides'>
                {[1, 2, 3, 4].map((slideNumber) => (
                    <div key={`slide${slideNumber}`} style={{ display: currentSlideIndex === slideNumber ? 'block' : 'none' }}>
                        <a href='/shop'><img src={require(`./images/slide${slideNumber}.png`)} alt={`slide${slideNumber}`} style={{maxWidth: '800px', }}/></a>
                    </div>
                ))}
            </div>

            <div id='dots' style={{ textAlign: 'center' }}>
                {[1, 2, 3, 4].map((slideNumber) => (
                    <span key={`dot${slideNumber}`} className={currentSlideIndex === slideNumber ? 'dot active' : 'dot'} onClick={() => changeSlide(slideNumber)}></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;