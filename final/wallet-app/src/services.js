//Session
export function fetchSession() {
    return fetch('/api/session', {
        method: 'GET',
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Login
export function fetchLogin(username) {
    return fetch('/api/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ username }),
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Logout
export function fetchLogout() {
    return fetch('/api/session', {
        method: 'DELETE',
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Transfer money
export function fetchTransfer({ asset, amount, mode }) {
    return fetch('/api/transfer', {
        method: 'PATCH',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ asset, amount, mode }),
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Send money
export function fetchSend({ asset, amount, receiver }) {
    return fetch('/api/send', {
        method: 'PATCH',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ asset, amount, receiver }),
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Convert money
export function fetchConvert({ fromAsset, toAsset, amount, exchangeRateToUSD }) {
    return fetch('/api/convert', {
        method: 'PATCH',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ fromAsset, toAsset, amount, exchangeRateToUSD }),
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}

//Get account info
export function fetchGetAccount(username) {
    return fetch('/api/account', {
        method: 'GET',
    })
        .catch(() => Promise.reject({ error: 'network-error' }))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return response.json()
                .catch(error => Promise.reject({ error }))
                .then(err => Promise.reject(err));
        });
}