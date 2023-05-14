const API_ENDPOINT = 'https://api.github.com/users/zalyora/repos';

export async function FetchProjects(onFetched) {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();
    const items = result.map(item => ({
        name: item.full_name.split('/').splice(-1, 1).join(),
        url: item.html_url,
        descr: item.description
    }));
    return onFetched(items);
}