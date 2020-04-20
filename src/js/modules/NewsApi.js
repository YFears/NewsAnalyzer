export class NewsApi {
    constructor(req) {
        this.req = req;
    }

    getNews() {
        return fetch(this.req)
        .then(res => res.ok ? res.json() : Promise.reject())
    }
}
