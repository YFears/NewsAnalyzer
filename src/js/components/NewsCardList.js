export class NewsCardList {
    constructor(container, initialCards, getCard) {
        this.container = container;
        this.initialCards = initialCards;
        this.getCard = getCard;
        this.render();
    }

    addCard(place) {
        this.container.appendChild(this.getCard(place));
    }

    render() {
        this.container.innerHTML = '';
        let end = this.initialCards.length < 3 ? this.initialCards.length : 3
        for (let i = 0; i < end; i++) {
            this.container.appendChild(this.getCard(this.initialCards[i]));
        }
    }

    renderNexts(value) {
        let end = value + 3 < this.initialCards.length ? value + 3 : this.initialCards.length;
        for (let i = value; i < end; i++) {
            this.container.appendChild(this.getCard(this.initialCards[i]));
        }
    }

}
