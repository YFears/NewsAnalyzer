export class DataStorage {
    constructor(key, data) {
        this.key = key;
        this.data = data;
        this.setData();
    }

    setData() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    getData() {
       return JSON.parse(localStorage.getItem(this.key));
    }
}