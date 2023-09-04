import React from 'react';

const CustomMediaPlayer = ({ trailerUrl }) => {
    return (
        <div>
            <iframe
                title="YouTube Video Player"
                width="100%"
                height="500"
                src={trailerUrl}
                allowFullScreen
            />
        </div>
    );
};

export default CustomMediaPlayer;
