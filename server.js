const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png','.ico':'image/x-icon'};
http.createServer((req,res)=>{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname)); if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();} fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Nicht gefunden');}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data);});}).listen(5173,'0.0.0.0',()=>console.log('Mathe Atlas: http://localhost:5173'));
