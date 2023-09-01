import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(value => {
    const currentSeconds = value.seconds;
    const saveSeconds = localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentSeconds)
    );
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
