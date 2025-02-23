// functions/[[path]].js
export async function onRequest(context) {
	const { request } = context;
	const url = new URL(request.url);

	if (url.pathname.startsWith('/testvitepress')) {
		const newPath = url.pathname.replace(/^\/testvitepress/, '');
		const newUrl = new URL(newPath, 'https://testvitepress.pages.dev');
		return fetch(newUrl, request);
	}

	// 注意：这里不再直接转发，而是让 Pages 处理
	return context.next();
}