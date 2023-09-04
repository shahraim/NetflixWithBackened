import React from 'react'
import './Slider.css'
function Slider() {
    return (
        <>
            <ul className="items py-10">
                <li>
                    <div
                        className="bg-img"
                        style={{
                            backgroundImage:
                                'url("https://image.tmdb.org/t/p/w500/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg")'
                        }}
                    />
                    <a href="#">
                        <div className="content">
                        </div>
                    </a>
                </li>



            </ul>

        </>
    )
}

export default Slider