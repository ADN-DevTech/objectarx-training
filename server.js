// Minimal static-file server so this tutorial repo can be deployed on Dokku
// (Dokku's herokuish builder needs a Node "start" script / Procfile to detect
// and run the app; a bare collection of HTML/zip files is not buildpack-detectable).
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve everything in the repo root (html, images, Solutions/*.zip) as static assets.
app.use(express.static(path.join(__dirname), { extensions: ['html'] }));

// Redirect the site root to the tutorial itself.
app.get('/', (req, res) => {
  res.redirect('/ObjectARX-Beginner-Tutorial.html');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`objectarx-training static server listening on port ${PORT}`);
});
