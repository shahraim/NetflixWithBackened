import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { Plus, ThumbsUp, Volume2, VolumeX, XCircle } from "lucide-react";
import axios from "axios";
import LogoImg from "../assets/imgs/net.png";
import { Info, Play, CalendarDays, Presentation } from "lucide-react";
import { ClipLoader } from "react-spinners";
import trailer from "../assets/videos/trailor.mp4";

function Model({ closeModal, movie }) {
  // Pass closeModal as a prop
  const { showModel, videoId } = useContext(Context);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const apiKey = "ca258fa0adb338022b74848eb9dade0a";
    const videoUrl = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${apiKey}&language=en-US`;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${videoId}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [videoId]);

  return (
    <>
      {showModel && (
        <div
          className="Overlay relative inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="transition-opacity ease-out duration-300 fixed inset-0 z-20 flex items-center justify-center">
              <div className="overflow-y-auto model-bg rounded-lg max-h-[40rem]">
                <div className="relative">
                  <div className="absolute top-3 right-3 z-50">
                    <button onClick={closeModal} className="cursor-pointer">
                      <XCircle className="text-gray-300 h-8 w-8" />
                    </button>
                  </div>
                  <video className="h-[28rem]" loop autoPlay muted={isMuted}>
                    <source src={trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-3 right-3">
                    <button
                      className="cursor-pointer border-2 rounded-full p-2"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="text-gray-300 h-4 w-4" />
                      ) : (
                        <Volume2 className="text-gray-300 h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {movieData && (
                  <>
                    <div className="text-white p-3 text-left">
                      <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold uppercase overflow-hidden">
                          {movieData.title}
                        </h2>
                        <img
                          src={LogoImg}
                          alt="Production Company"
                          className="w-28"
                        />
                      </div>
                      <div className="d-flex gap-3 sm:w-full">
                        <button className="flex gap-3 justify-center items-center py-2 rounded-xl px-5 my-2 bg-[#c7c4c4] text-black">
                          <Play className="w-6 h-6" />{" "}
                          <span className="font-bold">Play</span>
                        </button>
                        <button className="flex gap-3 justify-center items-center rounded-full my-2 border-2 text-black">
                          <Plus className="w-10 h-10 p-2 text-white" />
                        </button>
                        <button className="flex gap-3 justify-center items-center rounded-full my-2 border-2 text-black">
                          <ThumbsUp className="w-10 h-10 p-2 text-white" />
                        </button>
                      </div>
                      <div className="flex gap-3">
                        {movie.genres.map((genre, index) => (
                          <div
                            key={genre.id}
                            className="flex items-center justify-center gap-2"
                          >
                            <span className="font-medium text-sm text-rose-500">
                              {genre.name}
                            </span>
                            {index < movie.genres.length - 1 && (
                              <span>&#124;</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="w-[28rem]">
                        {movieData.overview.slice(0, 80)} . . .{" "}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Model;
