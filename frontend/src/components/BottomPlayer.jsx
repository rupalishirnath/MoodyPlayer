

import React, { useEffect, useRef, useState } from 'react';
import './BottomPlayer.css';

const BottomPlayer = ({ song, onPrev, onNext, onPlayPause, isPlaying }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, song]);

    const handleTimelineClick = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickX / width) * duration;
    };

    return (
        <div className="bottom-player">
            <audio
                ref={audioRef}
                src={song.audio}
                onEnded={onNext}
            />

            <div className="song-info">
                <strong>{song.title}</strong>
                <p>{song.artist}</p>
            </div>

            <div className="controls-section">
                <div className="controls">
                    <button onClick={onPrev}><i className="ri-skip-back-line"></i></button>
                    <button onClick={onPlayPause}>
                        {isPlaying
                            ? <i className="ri-pause-line"></i>
                            : <i className="ri-play-line"></i>}
                    </button>
                    <button onClick={onNext}><i className="ri-skip-forward-line"></i></button>
                </div>

                <div className="timeline" onClick={handleTimelineClick}>
                    <div
                        className="progress"
                        style={{ width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%` }}
                    ></div>
                </div>

                <div className="time-display">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(audioRef.current?.duration || 0)}</span>
                </div>
            </div>
        </div>
    );
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export default BottomPlayer;

