
const getApi = (url, method) => {
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
        .catch(err => { throw err })
}

export default getApi