import React, { useState } from 'react';
import './Slider.css';

function Slider() {
    // Initialize state to keep track of whether the component is hovered
    const [isHovered, setIsHovered] = useState(false);

    // Function to handle mouse enter event
    const handleMouseEnter = (event) => {
        const figureId = event.target.id;
        setIsHovered(figureId === 'image1');
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <figure
                id="image1"
                className={`snip1577 ${isHovered ? 'hover' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src="https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg"
                    alt="sample99"
                />
                <figcaption>
                    <h3>Bodrum Salvador</h3>
                    <h4>Luxury</h4>
                </figcaption>
                <a href="#" />
            </figure>
        </>
    );
}

export default Slider;
