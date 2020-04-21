export class NewsCard {
    constructor(data, formatDate) {
        this.placeCard = this.create(data, formatDate);
    }   

        create(data, formatDate) {
        const wrapper = document.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', `<a href="${data.url}" target="_blank" class="card">
        <img src="${data.urlToImage}" alt="${data.title}" class="card__image">
        <p class="card__date">${formatDate(data.publishedAt)}</p>
        <h2 class="card__title">${data.title}</h2>
        <p class="card__subtitle">${data.description}</p>
        <p class="card__media-source">${data.source.name}</p>
      </a>`);
        return wrapper.firstChild;
    }
    
}