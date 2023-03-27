import PageSection from './PageSection';
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'


const tracks = [
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/solo%20zr%20mar%205%20synt.mp3',
      title: 'J e e l - Solo',
      tags: ['house'],
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/zr%20jeel%20dbletime%2005).mp3',
      title: 'J e e l - Dbltime',
      tags: ['dnb']
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/KEST%20MIX%200302.mp3',
      title: 'J e e l - Kest',
      tags: ['dubstep']
    }
  ]
const cheetah = require('../assets/cheetah.jpeg')
  const colors = `html {
          --tagsBackground: #18191f;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #575a77;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #e9dcf8;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #e9dcf8;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`









export default function Music() {
    return (
        <PageSection name="audio"> 
        <div>
      <Player trackList={tracks} customColorScheme={colors} />
        </div>  
        </PageSection>
    );
  
}