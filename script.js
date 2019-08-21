var convertBtnMp4 = document.querySelector('.convert-button-mp4');
var convertBtnMp3 = document.querySelector('.convert-button-mp3');

var URLinput = document.querySelector('.URL-input');

convertBtnMp4.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value, "mp4");
});

convertBtnMp3.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value, "mp3");
});

function sendURL(URL, extension) {
    window.location.href = `http://localhost:4444/download-${extension}?URL=${URL}`;
}