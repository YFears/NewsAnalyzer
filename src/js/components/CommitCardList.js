export class CommitCardList {
    constructor(container, initialCards, getCommitCard) {
        this.container = container;
        this.initialCards = initialCards;
        this.getCommitCard = getCommitCard;
        this.render();
    }

    render() {
        for (let element of this.initialCards) {
            this.container.appendChild(this.getCommitCard(element));
        }
    }
}