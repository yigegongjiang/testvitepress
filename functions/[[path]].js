// functions/[[path]].js
export async function onRequest(context) {
	const { request, env, params } = context;
	const url = new URL(request.url);

	// 检查路径是否以 /testvitepress 开头
	if (url.pathname.startsWith('/testvitepress')) {
		// 将请求转发到 Pages 的默认域名，并保留原始路径
		const newUrl = new URL(url.pathname.replace(/^\/testvitepress/, ''), 'https://testvitepress.pages.dev');
		return fetch(newUrl, request);
	}

	// 对于其他路径，返回 404 或其他处理
	return new Response('Not Found', { status: 404 });
}