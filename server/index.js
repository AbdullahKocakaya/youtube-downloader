const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

const port = 4444;

app.listen(port, () => {
    console.log('Server works on', port);
});