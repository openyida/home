// OpenYida AI - 代理到钉钉企业应用
const TARGET_URL = "https://ai.aliwork.com/o/openyida";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 代理所有请求到目标钉钉应用
    const targetUrl = TARGET_URL + url.search;
    
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        ...Object.fromEntries(request.headers),
        Host: "ai.aliwork.com",
        Referer: TARGET_URL,
      },
      redirect: "follow",
    });

    // 返回响应
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    
    // 如果是 HTML，添加 base 标签让资源正确加载
    let body = await response.text();
    if (response.headers.get("content-type")?.includes("text/html")) {
      body = body.replace("<head>", `<head><base href="${TARGET_URL}/">`);
    }

    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }
};
