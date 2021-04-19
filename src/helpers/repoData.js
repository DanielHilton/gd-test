const retrieveRepoData = async accountName => {
    const req = new Request(`https://api.github.com/orgs/${accountName}/repos`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        });

    const response = await fetch(req);
    if(response.status >= 500)
        throw new Error(`Unexpected error from API: ${response.status}`)

    const body = await response.text();

    return {status: response.status, body: JSON.parse(body)};
}

export default retrieveRepoData;