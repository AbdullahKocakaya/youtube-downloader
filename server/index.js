const express   = require('express');
const cors      = require('cors');
const ytdl      = require('ytdl-core');

const app = express();

const port = 4444;

app.listen(port, () => {
    console.log('Server works on', port);
});

app.get('/download-mp4', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, { format: 'mp4'})
        .pipe(res);
});

app.get('/download-mp3', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="sound.mp3"');

    ytdl(URL, { format: 'mp3'})
        .pipe(res);
});

app.get('/info-title', (req, res) => {
    var URL = req.query.URL;

    ytdl.getInfo(URL, (err, info) => {
        console.log(info.player_response.videoDetails.title);
    });
});
