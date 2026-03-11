const fs = require('fs');
const path = require('path');

const indexHTML = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');
const jsFiles = fs.readdirSync(path.join(__dirname, 'dist/assets')).filter(f => f.endsWith('.js'));
const cssFiles = fs.readdirSync(path.join(__dirname, 'dist/assets')).filter(f => f.endsWith('.css'));

const jsContent = fs.readFileSync(path.join(__dirname, 'dist/assets', jsFiles[0]), 'utf-8');
const cssContent = fs.readFileSync(path.join(__dirname, 'dist/assets', cssFiles[0]), 'utf-8');

const workerContent = `const indexHTML = ${JSON.stringify(indexHTML)};
const jsContent = ${JSON.stringify(jsContent)};
const cssContent = ${JSON.stringify(cssContent)};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/' || path === '/index.html') {
      return new Response(indexHTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
      });
    }

    if (path.startsWith('/assets/') && path.endsWith('.js')) {
      return new Response(jsContent, {
        headers: { 'Content-Type': 'application/javascript;charset=UTF-8', 'Cache-Control': 'public, max-age=31536000' }
      });
    }

    if (path.startsWith('/assets/') && path.endsWith('.css')) {
      return new Response(cssContent, {
        headers: { 'Content-Type': 'text/css;charset=UTF-8', 'Cache-Control': 'public, max-age=31536000' }
      });
    }

    return new Response(indexHTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
`;

fs.writeFileSync(path.join(__dirname, 'worker.mjs'), workerContent);
console.log('Worker updated successfully!');
