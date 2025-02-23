// functions/[[path]].js
export async function onRequest(context) {
	const { request } = context;
	const url = new URL(request.url);

	// 仅处理 testvitepress.yigegongjiang.com/testvitepress
	if (url.hostname === 'testvitepress.yigegongjiang.com' && url.pathname.startsWith('/testvitepress')) {
		const newPath = url.pathname.replace(/^\/testvitepress/, '');
		const newUrl = new URL(newPath, 'https://testvitepress.pages.dev');
		return fetch(newUrl, request);
	}

	return context.next();
}