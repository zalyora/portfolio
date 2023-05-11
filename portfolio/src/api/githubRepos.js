const API_ENDPOINT = 'https://api.github.com/users/zalyora/repos';

async function fetchProjects(onFetched) {
    const response = await fetch(API_ENDPOINT);
    const result = await response.json();
    const items = result.map(item => ({
        name: item.full_name.split('/').splice(-1, 1).join(),
        url: item.html_url,
        descr: item.description
    }));
    onFetched(items);
    // for (let i = 0; i < result.length; i++) {
    //     let name = result[i].full_name.split('/').splice(-1, 1).join();
    //     let url = result[i].html_url;
    //     let descr = result[i].description;
    //     if (name == "rsschool-cv" || name == "stop-russia-it" || name == "testrepo" || name == "uk.javascript.info") {
    //         continue;
    //     } else {
    //         createLi(name, url, descr);
    //     }
    // }
}