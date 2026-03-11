<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="logo">OpenYida AI</div>
        <nav class="nav">
          <a href="#features">功能</a>
          <a href="#cases">展示</a>
          <a href="#contact">联系方式</a>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="container">
        <h1>AI 驱动的应用开发平台</h1>
        <p class="subtitle">用自然语言描述您的需求，AI 将自动创建、开发并部署您的钉钉应用</p>
        <div class="cta-buttons">
          <a href="https://github.com/openyida/openyida" class="btn btn-primary">立即开始</a>
          <a href="#cases" class="btn btn-secondary">查看展示</a>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2>核心功能</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🧠</div>
            <h3>自然语言驱动</h3>
            <p>只需描述您的需求，AI 将自动构建应用程序，无需手动操作</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>完整工作流</h3>
            <p>创建应用 → 开发页面 → 部署，全流程自动化</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>多场景支持</h3>
            <p>支持表单、自定义页面、数据可视化等多种场景</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>可扩展性</h3>
            <p>生成的应用可以自由扩展和定制，满足您的特定需求</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cases" class="cases">
      <div class="container">
        <h2>展示案例</h2>
        <div class="case-grid">
          <a href="https://ding.aliwork.com/APP_ICUBVUPDEJ3MIFJ0701X/custom/FORM-5776BEF941604870A814608C4CE0D23C146W?isRenderNav=false&corpid=ding9a0954b4f9d9d40ef5bf40eda33b7ba0" target="_blank" class="case-card">
            <h3>💰 薪资计算器</h3>
            <p>简单的薪资计算工具，支持税前税后转换</p>
          </a>
          <a href="https://ding.aliwork.com/s/63E1E?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&ddtab=true" target="_blank" class="case-card">
            <h3>🌐 落地页生成器</h3>
            <p>只需描述需求，即可生成完整的企业产品落地页</p>
          </a>
          <a href="https://ding.aliwork.com/s/93ED6?isRenderNav=false&corpid=ding8196cd9a2b2405da24f2f5cc6abecb85" target="_blank" class="case-card">
            <h3>🏮 灯谜</h3>
            <p>AI 生成灯谜图片，用户猜谜底</p>
          </a>
          <a href="https://ding.aliwork.com/s/0D49?corpid=ding8196cd9a2b2405da24f2f5cc6abecb85&isRenderNav=false" target="_blank" class="case-card">
            <h3>🎂 生日祝福</h3>
            <p>许下愿望，发送个性化生日贺卡</p>
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <h2>联系我们</h2>
        <p>准备好开始了吗？访问我们的 GitHub 仓库了解更多信息</p>
          <a href="https://github.com/openyida/openyida" class="btn btn-primary" target="_blank">GitHub</a>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 OpenYida AI. 用 ❤️ 和 AI 构建</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.app {
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: #2563eb;
}

.nav a {
  margin-left: 24px;
  text-decoration: none;
  color: #374151;
  font-size: 14px;
  transition: color 0.2s;
}

.nav a:hover {
  color: #2563eb;
}

.hero {
  padding: 180px 0 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%);
  color: white;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero .subtitle {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
}

.features, .cases, .contact {
  padding: 80px 0;
}

.features {
  background: #f9fafb;
}

.features h2, .cases h2, .contact h2 {
  text-align: center;
  font-size: 36px;
  color: #111827;
  margin-bottom: 48px;
}

.feature-grid, .case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.feature-card, .case-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover, .case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3, .case-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}

.feature-card p, .case-card p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
}

.cases {
  background: #f8fafc;
}

.case-card {
  display: block;
  text-decoration: none;
  border: 1px solid #e2e8f0;
  box-shadow: none;
}

.case-card:hover {
  border-color: #3b82f6;
}

.case-card h3 {
  color: #1e293b;
}

.case-card p {
  color: #64748b;
}

.contact {
  background: #1e293b;
  color: white;
  text-align: center;
}

.contact h2 {
  color: white;
}

.contact p {
  font-size: 18px;
  margin-bottom: 24px;
  opacity: 0.9;
}

.contact .btn-primary {
  background: #3b82f6;
  color: white;
}

.contact .btn-primary:hover {
  background: #2563eb;
}

.footer {
  background: #111827;
  color: #9ca3af;
  padding: 24px 0;
  text-align: center;
}

.footer p {
  font-size: 14px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }
  
  .hero .subtitle {
    font-size: 16px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
