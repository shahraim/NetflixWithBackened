import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import { Volume2, VolumeX, XCircle } from 'lucide-react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import trailer from '../assets/videos/trailor.mp4';

function Model({ closeModal, movie }) { // Pass closeModal as a prop
    const { showModel, videoId } = useContext(Context);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const apiKey = "ca258fa0adb338022b74848eb9dade0a";
        const videoUrl = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${apiKey}&language=en-US`;

        axios.get(`https://api.themoviedb.org/3/movie/${videoId}?api_key=${apiKey}&language=en-US`)
            .then(response => {
                setMovieData(response.data);
            })
            .catch(error => {
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
                    <div
                        className="relative flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0"
                    >
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="transition-opacity ease-out duration-300 fixed inset-0 z-20 flex items-center justify-center">

                            <div className="overflow-y-auto model-bg rounded-lg max-h-[40rem]">

                                <div className="relative">
                                    <div className="absolute top-3 right-3 z-50">
                                        <button onClick={closeModal} className='cursor-pointer'>
                                            <XCircle className='text-gray-300 h-8 w-8' />
                                        </button>
                                    </div>
                                    <video className='h-[28rem]' loop autoPlay muted={isMuted}>
                                        <source src={trailer} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute bottom-3 right-3">
                                        <button className='cursor-pointer' onClick={toggleMute}>
                                            {isMuted ? (
                                                <VolumeX className='text-gray-300 h-6 w-6' />
                                            ) : (
                                                <Volume2 className='text-gray-300 h-6 w-6' />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {movieData && (
                                    <>
                                        <div className="text-white p-3 text-left">
                                            <h2 className="text-3xl font-bold uppercase movie-title py-3 text-[#E50914]">{movieData.title}</h2>
                                            <p className='w-[28rem]'>{movieData.overview.slice(0, 80)} . . . </p>
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
