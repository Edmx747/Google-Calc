import React from 'react'
const BASE_URL = 'http://localhost:3000'
class HttpService {
    async get (url: string) {
        return fetch(BASE_URL + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
    async post(url: string, data: any) {
        return fetch(BASE_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json();
          })
        .catch(err => {
            console.log(err)
        })
    }
}

export default new HttpService()