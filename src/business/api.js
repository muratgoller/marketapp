import { url } from '../constants/api'

const apiGet = async(url) => {
    let result = null
    
    await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        }).then((response) => (result = response.json()))
        .then((responseJson) => { result = responseJson })
        .catch((error) => { alert(JSON.stringify(error)) })

    return result
}

export const getCompanies = async() => {
    let result = null
    await apiGet(url.host + url.companies).then((resp) => { result = resp })
    return result
}

export const getItems = async() => {
    let result = null
    await apiGet(url.host + url.items).then((resp) => { result = resp })
    return result
}