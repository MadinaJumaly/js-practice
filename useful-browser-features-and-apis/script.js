function getUrlData() {
    const { href, host, protocol, search } = window.location;

    const queryParams = {};
    
    new URLSearchParams(search).forEach((value, key) => {
        queryParams[key] = value;
    });

    return {
    fullURL: href,
    domain: host,
    protocol: protocol,
    query: queryParams
  };
}