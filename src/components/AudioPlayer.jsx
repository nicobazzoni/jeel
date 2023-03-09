import {useState, useEffect} from 'react';
import Player from './Player';
import AudioSpectrum from 'react-audio-spectrum';
import PageSection from "./PageSection";
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

function AudioPlayer(props) {
    
    

  const [songs] = useState([
    {
      title: "Solo",
      artist: "Jeel",
      img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1648691768542-DQL5W2AFZA1M1C4YRNCZ/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2F751f1a%2F3822209031%2Fil_fullxfull.3822209031_7ey0.jpg?format=1000w",
      src:"https://storage.googleapis.com/nicoroc_audio/solo%20zr%20mar%205%20synt.mp3"
    },
    {
        title: "Dbletime",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985288482-DLIC5BEN3QT6RWA6FRHM/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2F88575f%2F3775427802%2Fil_fullxfull.3775427802_n3d7.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/zr%20jeel%20dbletime%2005).mp3"
      },
      {
        title: "Kest",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985262408-ERVDSEL97ES84MS4X8LX/image-asset.jpeg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/KEST%20MIX%200302.mp3"
      },
      {
        title: "Discographer",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/discographer%20jeel%20jan4%202022.mp3"
      },
      {
        title: "You/Me",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/YOU-ME%20MIX%20ZR9.mp3"
      },
      {
        title: "IOU",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/IOU%200226%20MIX.mp3",
      },
     
      {
        title: "LA mix",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/DBLDBL%20OLDLAPMIX.mp3",
      },
     
      {
        title: "Everything was Blue",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/EvrythngWASBLUE%20mar3%20z%20mix3.mp3",
      },
      {
        title: "And you know",
        artist: "Jeel",
        img_src: "https://images.squarespace-cdn.com/content/v1/5419f63be4b07990c7fe8068/1659985263652-GTPWWS1L1BHKYBVWMCO7/https%3A%2F%2Fi.etsystatic.com%2F32936888%2Fr%2Fil%2Fd40716%2F3823031287%2Fil_fullxfull.3823031287_t5o4.jpg?format=1000w",
        src:"https://storage.googleapis.com/nicoroc_audio/AndYouKnow%20Interlude%20zmix1.mp3",
      },
      


  ]);

  
      




  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    
    <PageSection className='' name="audio">
       
       <Player className='h-screen '
     
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />     
</PageSection>
  );
}

export default AudioPlayer;