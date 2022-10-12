import Chat from '../components/Chat';
import VideoPlayer from '../components/VideoPlayer';
import { useRef } from 'react';
import Video from '../misc/stream.mp4';
import Poster from '../misc/kuva.jpg';

const streamUrl = 'http://195.148.104.124:1935/jakelu/streamtest/playlist.m3u8';

const Stream = () => {
  const playerRef = useRef(null);

  const consoleOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: Poster,
    loop: true,
    sources: [
      {
        src: Video,
        type: 'video/mp4',
      },
      {
        src: streamUrl,
        type: 'application/x-mpegURL',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <div className='flex flex-col justify-between h-[calc(100vh-62.75px)] lg:flex-row lg:h-[calc(100vh-64.75px)]'>
      <VideoPlayer options={consoleOptions} onReady={handlePlayerReady} />
      <Chat />
    </div>
  );
};
export default Stream;
