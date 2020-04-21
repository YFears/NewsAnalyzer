export class GithubApi {
    constructor(req) {
        this.req = req;
    }

    getCommits() {
        return fetch(this.req)
        .then(res => res.ok ? res.json() : Promise.reject())
    }
}