// functions/[[path]].js
export async function onRequest(context) {
	const { request, env, params } = context;
	const url = new URL(request.url);

	// 检查路径是否以 /testvitepress 开头
	if (url.pathname.startsWith('/testvitepress')) {
		// 从原始路径中移除 /testvitepress 前缀
		const newPath = url.pathname.replace(/^\/testvitepress/, '');
		// 构建新的 URL，指向 Pages 的默认域名，并使用处理后的路径
		const newUrl = new URL(newPath, 'https://testvitepress.pages.dev');
		return fetch(newUrl, request);
	}

	// 如果不是 /testvitepress 开头的路径，则直接转发到 Pages 的默认域名
	return fetch(request);
}