// proxy.js на GitHub Pages
async function handleRequest(request) {
    const url = new URL(request.url);
    const apiUrl = url.searchParams.get('url');
    
    if (apiUrl) {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: { 'Access-Control-Allow-Origin': '*' }
        });
    }
}
