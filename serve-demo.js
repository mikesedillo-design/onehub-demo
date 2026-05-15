const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = '/Users/msedillo1/Downloads';
const MIME = {
  'html': 'text/html',
  'aiff': 'audio/aiff',
  'mp3': 'audio/mpeg',
  'ogg': 'audio/ogg',
  'wav': 'audio/wav',
  'js': 'application/javascript',
  'css': 'text/css'
};

http.createServer((req, res) => {
  const u = req.url.split('?')[0];
  const file = (u === '/' || u === '') ? 'onehub-demo-video.html' : u.replace(/^\//, '');
  const fp = path.join(ROOT, file);
  fs.readFile(fp, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('not found');
    } else {
      const ext = path.extname(fp).slice(1);
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    }
  });
}).listen(4001, () => console.log('Demo video on http://localhost:4001'));
