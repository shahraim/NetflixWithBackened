import React, { useContext, useEffect, useState } from 'react';
import { Info, Youtube, CalendarDays, Presentation } from 'lucide-react';
import LogoImg from "../../assets/imgs/net.png";
import Model from './Model';
import './Slider.css'
import { Context } from '../../Context/UserContext';

const Videos = () => {
  const apiKey = 'ca258fa0adb338022b74848eb9dade0a'; // Use environment variable
  // const movieId = 667538;
  const [movie, setMovie] = useState();
  const { showModel, setShowModel, videoId } = useContext(Context);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${videoId}?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiKey, videoId]);

  if (!movie) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  const backgroundStyle = {
    minHeight: '100%',
    background: `linear-gradient(-180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const releaseDateInMinutes = movie.runtime; // Assuming movie.release_date is in minutes
  // Calculate hours and minutes
  const hours = Math.trunc(releaseDateInMinutes / 60);
  const minutes = releaseDateInMinutes % 60;


  const openModal = () => {
    setShowModel(true);
  };

  const closeModal = () => {
    setShowModel(false);
  };
  return (
    <>
      {showModel && (
        <>
          <Model closeModal={closeModal} movie={movie} />
        </>
      )}
      <div className="movie-page" style={backgroundStyle}>
        <div className="gradient-overlay">
          <div className="movie-poster">
            <div className="flex gap-3 flex-col ml-5">
              <div className="flex gap-3 items-center">
                <img
                  src={LogoImg}
                  alt="Production Company"
                  className="w-28"
                />
                {movie.production_companies && movie.production_companies[0] && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.production_companies[0].logo_path}`}
                    alt="Production Company"
                    className="h-6"
                  />
                )}
              </div>
              <div className="flex gap-3">
                {movie.genres.map((genre, index) => (
                  <div key={genre.id} className="flex items-center justify-center gap-2">
                    <span className="font-semibold">{genre.name}</span>
                    {index < movie.genres.length - 1 && <span>&#124;</span>}
                  </div>
                ))}
              </div>

              <h1 className="text-6xl font-bold movie-title py-2 overflow-hidden">{movie.title}</h1>
              <div className="flex gap-3 flex-wrap">
                <div className="flex items-center justify-center gap-2">
                  <CalendarDays className="w-5 h-5" color="#E50914" />
                  <span className="font-semibold">{movie.release_date.slice(0, 4)}</span>
                  <span>&#124;</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img width="30" height="30" src="https://img.icons8.com/color/30/imdb.png" alt="imdb" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-normal">{movie.vote_average.toFixed(1)} / 10</span>
                  <span>&#124;</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Presentation className="w-5 h-5" color="#E50914" />
                  <span className="font-normal">{`${hours} h : ${minutes} m`}</span>
                </div>
              </div>
              <p className="w-2/3">{movie.overview.slice(0, 200)} . . . </p>
              <div className="d-flex gap-2 sm:w-full">
                <button className="flex gap-3 justify-center items-center py-2 btn-play btnClr rounded-0 bg-[#E50914]">
                  <Youtube className="w-6 h-6" /> <span className="font-semibold">Play</span>
                </button>
                <button className="py-2 btn-detail flex gap-3 justify-center items-center rounded-0" onClick={openModal}>
                  <span className="font-semibold">More Detail</span> <Info className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Videos;
