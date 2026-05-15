const http = require('http');
const fs = require('fs');
const path = require('path');

const HTML_DIR  = '/private/tmp/onehub-demo';
const AUDIO_DIR = '/Users/msedillo1/Downloads';

const MIME = {
  'html': 'text/html',
  'wav':  'audio/wav',
  'm4a':  'audio/mp4',
  'mp3':  'audio/mpeg',
  'ogg':  'audio/ogg',
  'aiff': 'audio/aiff',
  'js':   'application/javascript',
  'css':  'text/css',
};

const AUDIO_EXTS = new Set(['m4a', 'wav', 'mp3', 'ogg', 'aiff']);

http.createServer((req, res) => {
  const u    = req.url.split('?')[0];
  const file = (u === '/' || u === '') ? 'onehub-demo-video.html' : u.replace(/^\//, '');
  const ext  = path.extname(file).slice(1);
  const dir  = AUDIO_EXTS.has(ext) ? AUDIO_DIR : HTML_DIR;
  const fp   = path.join(dir, file);

  fs.readFile(fp, (err, data) => {
    if (err) {
      console.log(`404 ${file} (looked in ${dir})`);
      res.writeHead(404); res.end('not found');
    } else {
      console.log(`200 ${file}`);
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(data);
    }
  });
}).listen(4001, () => console.log('Demo server on http://localhost:4001'));
