import instance from "./interceptor"

export function Getlunbo() {
    return instance.get('/getlunbo')
}

export function GetShop(page = 1, limit = 10) {
    return instance.get(`/recommend?page=${page}&limit=${limit}`)
}
