export class NewsCard {
    constructor(data) {
        this.placeCard = this.create(data);
    }

    convertDate(data) {
        const dateInMs = Date.parse(data.publishedAt)
        const date = new Date(dateInMs);
        const formatterDay = new Intl.DateTimeFormat("ru", {
            day: "numeric"
        });
        const formatterMonth = new Intl.DateTimeFormat("ru", {
            month: "long"
        });
        const formatterYear = new Intl.DateTimeFormat("ru", {
            year: "numeric"
        });

        const monthInMain = formatterMonth.format(date);
        const monthInWay = (monthInMain.match(/(ь|й)$/) ? monthInMain.replace(/(ь|й)$/, 'я') : `${monthInMain}а`);
        const formatDate = `${formatterDay.format(date)} ${monthInWay}, ${formatterYear.format(date)}`;
        return formatDate
    }

    create(data) {
        const wrapper = document.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', `<a href="${data.url}" target="_blank" class="card">
        <img src="${data.urlToImage}" alt="${data.title}" class="card__image">
        <p class="card__date">${this.convertDate(data)}</p>
        <h2 class="card__title">${data.title}</h2>
        <p class="card__subtitle">${data.description}</p>
        <p class="card__media-source">${data.source.name}</p>
      </a>`);
        return wrapper.firstChild;
    }
    
}