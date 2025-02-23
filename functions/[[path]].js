// functions/[[path]].js
export async function onRequest(context) {
	const { request } = context;
	const url = new URL(request.url);

	// 1. 检查是否是自定义域名，并且路径以 /testvitepress 开头
	if (url.hostname === 'testvitepress.yigegongjiang.com' && url.pathname.startsWith('/testvitepress')) {
		// 2. 路径重写
		const newPath = url.pathname.replace(/^\/testvitepress/, '');
		const newUrl = new URL(newPath, 'https://testvitepress.pages.dev');
		return fetch(newUrl, request);
	}

	// 3. & 4. 其他情况，让 Pages 处理
	return context.next();
}