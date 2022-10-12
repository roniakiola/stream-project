import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useRef, useEffect } from 'react';
import '@videojs/themes/dist/forest/index.css';
import '../css/customTheme.css';

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        if (options.sources[0]) {
          //Koita fetchia striimi-sourcesta, jos onnistuu, niin vaihdetaan sourceksi placeholder videon tilalle
          const fetchInterval = setInterval(async () => {
            try {
              console.log('etsii');
              const serverResponse = await fetch(
                'http://195.148.104.124:1935/jakelu/streamtest/playlist.m3u8'
              );
              if (serverResponse.ok) {
                player.src(options.sources[1]);
                clearInterval(fetchInterval);
              }
            } catch (error) {
              console.log(error);
            }
          }, 5000);
        }

        videojs.log('player is ready');
        onReady && onReady(player);
      }));
    }
  }, [options, videoRef, onReady]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className='video-js vjs-big-play-centered vjs-theme-forest vjs-oma'
      />
    </div>
  );
};

export default VideoPlayer;
