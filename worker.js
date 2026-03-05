export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 对于 SPA，所有路由都返回 index.html
    if (path === '/' || !path.match(/\.[a-zA-Z0-9]+$/)) {
      return new Response(indexHTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    // 对于静态资源，根据文件类型返回
    const ext = path.split('.').pop();
    const contentTypes = {
      'js': 'application/javascript',
      'css': 'text/css',
      'html': 'text/html',
      'svg': 'image/svg+xml'
    };
    const contentType = contentTypes[ext] || 'text/plain';

    return new Response('Not Found', { status: 404 });
  }
};

const indexHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenYida AI - 智能应用开发平台</title>
  <meta name="description" content="通过 AI 工具快速生成企业级宜搭应用，支持表单、自定义页面、数据可视化等场景">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  </style>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>`;
