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

function getQueryParametersValues() {
    const { href, search } = window.location;

    const arr = [];

    new URLSearchParams(search).forEach((value, key) => {
        arr.push(value)
    });

    return arr;
}


function setLocalStorageData(data) {
    if (typeof data !== 'string' || data === '') {
        return false;
    }

    localStorage.setItem('key', data);
    return true;
}

function setCookieData(data) {
    if (typeof data !== 'string' || data === '') {
        return false;
    }

    document.cookie = data;
    return true;
}