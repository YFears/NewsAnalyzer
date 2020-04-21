export class DataStorage {
    constructor(key, data) {
        this.key = key;
        this.data = data;
    }

    setData() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
        localStorage.setItem(`lastItem`, `${this.key}`);
    }

    getLastItem() {
        return localStorage.getItem(`lastItem`);
    }

    getData() {
        return JSON.parse(localStorage.getItem(this.getLastItem()));
    }
}