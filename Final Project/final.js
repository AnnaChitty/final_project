function switchSong1 () {
    document.getElementById("album").src="https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f";
}

function switchSong2 () {
    document.getElementById("album").src="https://m.media-amazon.com/images/I/71b702BjRuL._UF894,1000_QL80_.jpg";
}

function playSong() {
    var albumElement = document.getElementById("album");
    if (albumElement && albumElement.src === "https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f") {
        window.open("https://www.youtube.com/watch?v=yXQViqx6GMY");
    } else {
        window.open("https://www.youtube.com/watch?v=v5ryZdpEHqM");
    }
}

document.addEventListener('mousemove', function(event) {
    const cursorDiv = document.querySelector('.move');
    cursorDiv.style.left = `${event.pageX - cursorDiv.offsetWidth / 2}px`;
    cursorDiv.style.top = `${event.pageY - cursorDiv.offsetHeight / 2}px`;
});
/*source: https://www.tnado.com/blog/javascript-move-a-div-element-with-the-mouse/#*/

const days = document.getElementById('days'),
              hours = document.getElementById('hours'),
              minutes = document.getElementById('minutes'),
              seconds = document.getElementById('seconds');

        setInterval(() => {
            findDate();
        }, 1000); // Update every second

        function findDate() {
            let currentTime = new Date(),
                christmasYear = currentTime.getFullYear();

            // Check if Christmas has passed this year
            if (currentTime.getMonth() === 11 && currentTime.getDate() > 25) {
                christmasYear += 1;
            }

            // Set Christmas date
            let christmasTime = new Date(christmasYear, 11, 25);
            let dateDiff = christmasTime - currentTime; // Time difference in milliseconds

            let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

            if (currentTime.getMonth() !== 11 || (currentTime.getMonth() === 11 && currentTime.getDate() !== 25)) {
                DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
                HOURS = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
                SECONDS = Math.floor((dateDiff % (1000 * 60)) / 1000);
            }

            displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
        }

        function displayDate(d, h, m, s) {
            days.innerHTML = d;
            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
        }

        function setZero(timeValue) {
            return timeValue < 10 ? "0" + timeValue : timeValue;
        }

/* source: https://codeforum.org/threads/trying-to-change-my-countdown-timer.7838/#post-29840*/