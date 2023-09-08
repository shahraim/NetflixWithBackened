import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './Slider.css';

const MovieCards = () => {
    const [movies, setMovies] = useState([]);
    const [hoveredIndexes, setHoveredIndexes] = useState([]);
    const currentSlideRef = useRef(null);

    useEffect(() => {
        const apiKey = "ca258fa0adb338022b74848eb9dade0a"; // Replace with your API key
        const randomPage = Math.floor(Math.random() * 100); // Get a random page (adjust the range as needed)
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${randomPage}&sort_by=popularity.desc`;

        axios.get(url)
            .then((response) => {
                setMovies(response.data.results);
                // Initialize the hover state for each movie card to false
                setHoveredIndexes(Array(response.data.results.length).fill(false));
                console.log(response.data.results)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleMouseEnter = (index) => {
        // Update the hover state for the specific movie card
        const newHoveredIndexes = [...hoveredIndexes];
        newHoveredIndexes[index] = true;
        setHoveredIndexes(newHoveredIndexes);
    };

    const handleMouseLeave = (index) => {
        // Update the hover state for the specific movie card
        const newHoveredIndexes = [...hoveredIndexes];
        newHoveredIndexes[index] = false;
        setHoveredIndexes(newHoveredIndexes);
    };

    return (
        <div className="">
            <Slider {...settings} ref={currentSlideRef}>
                {movies.map((movie, index) => (
                    <figure
                        key={index}
                        className={`border border-gray-700 snip1577 rounded-xl shadow-2xl ${hoveredIndexes[index] ? 'hover' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={`Slide ${index + 1}`}
                        />
                        <figcaption>
                            <h3 className='overflow-hidden'>{movie.title}</h3>
                            <div className="flex gap-1 items-center h4">
                                <div className="flex items-center justify-center gap-2">
                                    <img className='opacity-100' width="30" height="30" src="https://img.icons8.com/color/30/imdb.png" alt="imdb" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal  overflow-hidden">{movie.vote_average.toFixed(1)} / 10</span>
                                </div>
                            </div>

                        </figcaption>
                        <a href="#" />
                    </figure>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCards;
