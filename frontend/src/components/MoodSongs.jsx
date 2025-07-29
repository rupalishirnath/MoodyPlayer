
import React, { useState } from 'react';
import './MoodSongs.css';
import BottomPlayer from './BottomPlayer';

const MoodSongs = ({ Songs }) => {
  const [selectedSong, setSelectedSong] = useState(null); // Which song is selected
  const [isPlaying, setIsPlaying] = useState(false);       // Whether it's playing

  const handlePlayPause = (index) => {
    if (selectedSong === index) {
      setIsPlaying((prev) => !prev); // toggle play/pause
    } else {
      setSelectedSong(index);
      setIsPlaying(true); // start playing new song
    }
  };

  const handleNext = () => {
    if (selectedSong < Songs.length - 1) {
      setSelectedSong((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (selectedSong > 0) {
      setSelectedSong((prev) => prev - 1);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className='mood-songs'>
        <h2>Recommended Songs</h2>

   <div className="songs-scroll-container"   style={{ display: Songs.length === 0 ? 'none' : 'block' }}>
          {Songs.map((song, index) => (
            <div className='song' key={index}>
              <div className="title">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <div className="play-pause-button">
                <button onClick={() => handlePlayPause(index)}>
                  {selectedSong === index && isPlaying
                    ? <i className="ri-pause-mini-line custom-icon"></i>
                    : <i className="ri-play-mini-line custom-icon"></i>}
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {selectedSong !== null && Songs[selectedSong] && (
        <BottomPlayer
          song={Songs[selectedSong]}
          onPrev={handlePrev}
          onNext={handleNext}
          onPlayPause={() => setIsPlaying((prev) => !prev)}
          isPlaying={isPlaying}
        />
      )}
    </>
  );
};

export default MoodSongs;
