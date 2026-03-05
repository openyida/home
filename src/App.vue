<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="logo">OpenYida AI</div>
        <nav class="nav">
          <a href="#features">功能特性</a>
          <a href="#cases">案例</a>
          <a href="#contact">联系我们</a>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="container">
        <h1>AI 驱动的智能应用开发平台</h1>
        <p class="subtitle">通过自然语言描述，AI 自动完成宜搭应用的创建、页面开发与发布部署</p>
        <div class="cta-buttons">
          <a href="https://openyida.ai" class="btn btn-primary">开始使用</a>
          <a href="#cases" class="btn btn-secondary">查看案例</a>
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
            <p>只需描述需求，AI 自动完成应用搭建，无需手动操作</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>完整工作流</h3>
            <p>创建应用 → 页面开发 → 发布部署，全流程自动化</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>多场景支持</h3>
            <p>支持表单页面、自定义页面、数据可视化等多种场景</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>二次开发</h3>
            <p>生成后可自由扩展和定制，满足个性化需求</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cases" class="cases">
      <div class="container">
        <h2>演示案例</h2>
        <div class="case-grid">
          <div class="case-card">
            <h3>💰 个人薪资计算器</h3>
            <p>简单易用的薪资计算工具，支持税前税后互转</p>
          </div>
          <div class="case-card">
            <h3>🌐 企业 Landing Page</h3>
            <p>一句话生成完整的企业产品介绍页</p>
          </div>
          <div class="case-card">
            <h3>🏮 看图猜灯谜</h3>
            <p>AI 生成灯谜图片，用户猜答案，互动性极强</p>
          </div>
          <div class="case-card">
            <h3>🎂 生日祝福小游戏</h3>
            <p>点击蜡烛许下心愿，送出专属生日祝福卡片</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <h2>联系我们</h2>
        <p>准备好开始了吗？访问我们的 GitHub 仓库了解更多信息</p>
        <a href="https://github.com/alibaba/yida-ai-page" class="btn btn-primary" target="_blank">GitHub</a>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 OpenYida AI. Built with ❤️ and AI.</p>
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
  padding: 160px 0 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover, .case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.feature-card h3, .case-card h3 {
  font-size: 18px;
  color: #111827;
  margin-bottom: 12px;
}

.feature-card p, .case-card p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
}

.cases {
  background: white;
}

.case-card {
  border: 1px solid #e5e7eb;
  box-shadow: none;
}

.contact {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.contact p {
  font-size: 18px;
  margin-bottom: 24px;
  opacity: 0.9;
}

.contact .btn-primary {
  background: white;
  color: #667eea;
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
