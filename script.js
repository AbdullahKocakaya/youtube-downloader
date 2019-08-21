var convertBtnMp4 = document.querySelector('.convert-button-mp4');
var convertBtnMp3 = document.querySelector('.convert-button-mp3');
var infoTitle     = document.querySelector('.info-title');

var URLinput = document.querySelector('.URL-input');

convertBtnMp4.addEventListener('click', () => {
    sendURL(URLinput.value, "mp4");
});

convertBtnMp3.addEventListener('click', () => {
    sendURL(URLinput.value, "mp3");
});

infoTitle.addEventListener('click', () => {
    getTitle(URLinput.value);
});

function sendURL(URL, extension) {
    window.location.href = `http://localhost:4444/download-${extension}?URL=${URL}`;
}

function getTitle(URL) {
    window.location.href = `http://localhost:4444/info-title?URL=${URL}`;
}