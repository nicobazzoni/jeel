import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className=" border-none rounded-full mt-3 mb-5 nav-background6 ">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            {/* <p>Next up: <span className='text-rose-100'>{props.songs[props.nextSongIndex].title} </span>by <span className='text-rose-400'>{props.songs[props.nextSongIndex].artist}</span></p> */}
        </div>
    )
}

export default Player;