// functions/[[path]].js
export async function onRequest(context) {
	return fetch(context.request);
}