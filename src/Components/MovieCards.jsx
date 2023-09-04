import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import LogoImg from "../assets/imgs/net.png";
import './Slider.css'

const MovieCards = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const apiKey = "ca258fa0adb338022b74848eb9dade0a"; // Replace with your API key
        const movieId = 630004;
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        axios
            .get(url)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!movie) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    // {Array(6)
    //     .fill()
    //     .map((_, index) => (
    //         <div key={index} className="px-3 cursor-pointer relative">
    //             <img
    //                 src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
    //                 alt={`Slide ${index + 1}`}
    //                 className="transition-transform transform scale-100 hover:scale-150"
    //             />
    //         </div>
    //     ))}
    return (
        <div className="w-full h-auto max-w-screen-xl mx-auto p-4 slider">
            <Slider {...settings}>
                <ul className="items">
                    <li>
                        <div
                            className="bg-img"
                            style={{
                                backgroundImage:
                                    'url("http://lewihussey.com/codepen-img/orangeisthenewblack.jpg")'
                            }}
                        />
                        <a href="#">
                            <div className="content">
                            </div>
                        </a>
                    </li>
                </ul>
            </Slider>
        </div>
    );
};

export default MovieCards;
