const indexHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenYida AI - AI 驱动的应用开发平台</title>
  <meta name="description" content="AI 驱动的钉钉应用开发平台。通过自然语言创建表单、自定义页面和数据可视化。">
  <meta name="keywords" content="OpenYida,钉钉,AI,低代码,应用开发">
  <meta name="theme-color" content="#0f172a">
  <link rel="icon" href="/favicon.ico">
  <link rel="canonical" href="https://openyida.ai/">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'PingFang SC',sans-serif}
  </style>
</head>
<body>
  <div id="app"></div>
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index.css">
</body>
</html>`;

const jsContent = `(function(){var __vue_createApp=function(){return{render:function(e){return e("div",{class:"app"},[e("header",{class:"header"},[e("div",{class:"container"},[e("div",{class:"logo"},"OpenYida AI"),e("nav",{class:"nav"},[e("a",{attrs:{href:"#features"}},"功能"),e("a",{attrs:{href:"#cases"}},"展示"),e("a",{attrs:{href:"#contact"}},"联系方式")])])]),e("section",{class:"hero"},[e("div",{class:"container"},[e("h1",{},"AI 驱动的应用开发平台"),e("p",{class:"subtitle"},"用自然语言描述您的需求，AI 将自动创建、开发并部署您的钉钉应用"),e("div",{class:"cta-buttons"},[e("a",{class:"btn btn-primary",attrs:{href:"https://github.com/openyida/openyida",target:"_blank"}},"立即开始"),e("a",{class:"btn btn-secondary",attrs:{href:"#cases"}},"查看展示")])])]),e("section",{id:"features",class:"features"},[e("div",{class:"container"},[e("h2",{},"核心功能"),e("div",{class:"feature-grid"},[e("div",{class:"feature-card"},[e("div",{class:"feature-icon"},"🧠"),e("h3",{},"自然语言驱动"),e("p",{},"只需描述您的需求，AI 将自动构建应用程序，无需手动操作")]),e("div",{class:"feature-card"},[e("div",{class:"feature-icon"},"⚡"),e("h3",{},"完整工作流"),e("p",{},"创建应用 → 开发页面 → 部署，全流程自动化")]),e("div",{class:"feature-card"},[e("div",{class:"feature-icon"},"🎨"),e("h3",{},"多场景支持"),e("p",{},"支持表单、自定义页面、数据可视化等多种场景")]),e("div",{class:"feature-card"},[e("div",{class:"feature-icon"},"🔧"),e("h3",{},"可扩展性"),e("p",{},"生成的应用可以自由扩展和定制，满足您的特定需求")])])])]),e("section",{id:"cases",class:"cases"},[e("div",{class:"container"},[e("h2",{},"展示案例"),e("div",{class:"case-grid"},[e("a",{class:"case-card",attrs:{href:"https://ding.aliwork.com/APP_ICUBVUPDEJ3MIFJ0701X/custom/FORM-5776BEF941604870A814608C4CE0D23C146W?isRenderNav=false&corpid=ding9a0954b4f9d9d40ef5bf40eda33b7ba0",target:"_blank"}},[e("h3",{},"💰 薪资计算器"),e("p",{},"简单的薪资计算工具，支持税前税后转换")]),e("a",{class:"case-card",attrs:{href:"https://ding.aliwork.com/s/63E1E?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&ddtab=true",target:"_blank"}},[e("h3",{},"🌐 落地页生成器"),e("p",{},"只需描述需求，即可生成完整的企业产品落地页")]),e("a",{class:"case-card",attrs:{href:"https://ding.aliwork.com/s/93ED6?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85",target:"_blank"}},[e("h3",{},"🏮 灯谜"),e("p",{},"AI 生成灯谜图片，用户猜谜底")]),e("a",{class:"case-card",attrs:{href:"https://ding.aliwork.com/s/0D49?corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&isRenderNav=false",target:"_blank"}},[e("h3",{},"🎂 生日祝福"),e("p",{},"许下愿望，发送个性化生日贺卡")])])])]),e("section",{id:"contact",class:"contact"},[e("div",{class:"container"},[e("h2",{},"联系我们"),e("p",{},"准备好开始了吗？访问我们的 GitHub 仓库了解更多信息"),e("a",{class:"btn btn-primary",attrs:{href:"https://github.com/openyida/openyida",target:"_blank"}},"GitHub")])]),e("footer",{class:"footer"},[e("div",{class:"container"},[e("p",{},"© 2026 OpenYida AI. 用 ❤️ 和 AI 构建")])])])}};return{app:{mount:function(e){document.querySelector(e).innerHTML='<div class="app"><header class="header"><div class="container"><div class="logo">OpenYida AI</div><nav class="nav"><a href="#features">功能</a><a href="#cases">展示</a><a href="#contact">联系方式</a></nav></div></header><section class="hero"><div class="container"><h1>AI 驱动的应用开发平台</h1><p class="subtitle">用自然语言描述您的需求，AI 将自动创建、开发并部署您的钉钉应用</p><div class="cta-buttons"><a href="https://github.com/openyida/openyida" class="btn btn-primary" target="_blank">立即开始</a><a href="#cases" class="btn btn-secondary">查看展示</a></div></div></section><section id="features" class="features"><div class="container"><h2>核心功能</h2><div class="feature-grid"><div class="feature-card"><div class="feature-icon">🧠</div><h3>自然语言驱动</h3><p>只需描述您的需求，AI 将自动构建应用程序，无需手动操作</p></div><div class="feature-card"><div class="feature-icon">⚡</div><h3>完整工作流</h3><p>创建应用 → 开发页面 → 部署，全流程自动化</p></div><div class="feature-card"><div class="feature-icon">🎨</div><h3>多场景支持</h3><p>支持表单、自定义页面、数据可视化等多种场景</p></div><div class="feature-card"><div class="feature-icon">🔧</div><h3>可扩展性</h3><p>生成的应用可以自由扩展和定制，满足您的特定需求</p></div></div></div></section><section id="cases" class="cases"><div class="container"><h2>展示案例</h2><div class="case-grid"><a href="https://ding.aliwork.com/APP_ICUBVUPDEJ3MIFJ0701X/custom/FORM-5776BEF941604870A814608C4CE0D23C146W?isRenderNav=false&corpid=ding9a0954b4f9d9d40ef5bf40eda33b7ba0" target="_blank" class="case-card"><h3>💰 薪资计算器</h3><p>简单的薪资计算工具，支持税前税后转换</p></a><a href="https://ding.aliwork.com/s/63E1E?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&ddtab=true" target="_blank" class="case-card"><h3>🌐 落地页生成器</h3><p>只需描述需求，即可生成完整的企业产品落地页</p></a><a href="https://ding.aliwork.com/s/93ED6?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85" target="_blank" class="case-card"><h3>🏮 灯谜</h3><p>AI 生成灯谜图片，用户猜谜底</p></a><a href="https://ding.aliwork.com/s/0D49?corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&isRenderNav=false" target="_blank" class="case-card"><h3>🎂 生日祝福</h3><p>许下愿望，发送个性化生日贺卡</p></a></div></div></section><section id="contact" class="contact"><div class="container"><h2>联系我们</h2><p>准备好开始了吗？访问我们的 GitHub 仓库了解更多信息</p><a href="https://github.com/openyida/openyida" class="btn btn-primary" target="_blank">GitHub</a></div></section><footer class="footer"><div class="container"><p>© 2026 OpenYida AI. 用 ❤️ 和 AI 构建</p></div></footer></div>'}}}};

const cssContent = \`.container{max-width:1200px;margin:0 auto;padding:0 20px}.app{min-height:100vh}.header{position:fixed;top:0;left:0;right:0;background:#fffffff2;backdrop-filter:blur(10px);z-index:100;box-shadow:0 1px 3px #0000001a}.header .container{display:flex;justify-content:space-between;align-items:center;height:60px}.logo{font-size:20px;font-weight:700;color:#2563eb}.nav a{margin-left:24px;text-decoration:none;color:#374151;font-size:14px;transition:color .2s}.nav a:hover{color:#2563eb}.hero{padding:180px 0 100px;background:linear-gradient(135deg,#0f172a,#1e3a8a,#3b82f6);color:#fff;text-align:center}.hero h1{font-size:48px;font-weight:800;margin-bottom:20px;line-height:1.2}.hero .subtitle{font-size:20px;opacity:.9;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto}.cta-buttons{display:flex;gap:16px;justify-content:center}.btn{display:inline-block;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;transition:all .2s}.btn-primary{background:#fff;color:#667eea}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 20px #0003}.btn-secondary{background:transparent;color:#fff;border:2px solid white}.btn-secondary:hover{background:#ffffff1a}.features,.cases,.contact{padding:80px 0}.features{background:#f9fafb}.features h2,.cases h2,.contact h2{text-align:center;font-size:36px;color:#111827;margin-bottom:48px}.feature-grid,.case-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px}.feature-card,.case-card{background:#fff;padding:32px;border-radius:12px;box-shadow:0 4px 6px #0000000d;transition:transform .3s,box-shadow .3s}.feature-card:hover,.case-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px #0000001a}.feature-icon{font-size:48px;margin-bottom:20px}.feature-card h3,.case-card h3{font-size:20px;font-weight:600;color:#1e293b;margin-bottom:12px}.feature-card p,.case-card p{color:#64748b;font-size:15px;line-height:1.7}.cases{background:#f8fafc}.case-card{display:block;text-decoration:none;border:1px solid #e2e8f0;box-shadow:none}.case-card:hover{border-color:#3b82f6}.case-card h3{color:#1e293b}.case-card p{color:#64748b}.contact{background:#1e293b;color:#fff;text-align:center}.contact h2{color:#fff}.contact p{font-size:18px;margin-bottom:24px;opacity:.9}.contact .btn-primary{background:#3b82f6;color:#fff}.contact .btn-primary:hover{background:#2563eb}.footer{background:#111827;color:#9ca3af;padding:24px 0;text-align:center}.footer p{font-size:14px}@media(max-width:768px){.hero h1{font-size:32px}.hero .subtitle{font-size:16px}.cta-buttons{flex-direction:column;align-items:center}}\`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/' || path === '/index.html') {
      return new Response(indexHTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
      });
    }

    if (path === '/favicon.ico' || path === '/logo.png') {
      return fetch('https://cdn.openyida.ai/logo.png');
    }

    if (path === '/manifest.json') {
      return new Response(JSON.stringify({
        name: "OpenYida AI",
        short_name: "OpenYida",
        description: "AI 驱动的应用开发平台",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#0f172a",
        icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }]
      }), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=86400' }
      });
    }

    if (path.endsWith('.js')) {
      return new Response(jsContent, {
        headers: { 'Content-Type': 'application/javascript;charset=UTF-8', 'Cache-Control': 'public, max-age=31536000' }
      });
    }

    if (path.endsWith('.css')) {
      return new Response(cssContent, {
        headers: { 'Content-Type': 'text/css;charset=UTF-8', 'Cache-Control': 'public, max-age=31536000' }
      });
    }

    return new Response(indexHTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
