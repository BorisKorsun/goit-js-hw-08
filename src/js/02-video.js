import VideoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});


player.on('timeupdate', throttle(savePlayerEndTime, 1000));

function savePlayerEndTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)
};


