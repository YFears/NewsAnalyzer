export class NewsCardList {
    constructor(container, initialCards, getCard) {
        this.container = container;
        this.initialCards = initialCards;
        this.getCard = getCard;
        this.render();
    }

    render() {
        let counter = 3;
        this.container.innerHTML = '';
        const end = this.initialCards.length < counter ? this.initialCards.length : counter
        for (let i = 0; i < end; i++) {
            this.container.appendChild(this.getCard(this.initialCards[i]));
        }
    }

    renderNexts(value) {
        let counter = 3;
        const end = value + counter < this.initialCards.length ? value + counter : this.initialCards.length;
        for (let i = value; i < end; i++) {
            this.container.appendChild(this.getCard(this.initialCards[i]));
        }
    }

}
