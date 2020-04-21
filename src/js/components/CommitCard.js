export class CommitCard {
    constructor(data, formatDate) {
        this.gitCard = this.create(data, formatDate);
    }

    create(data, formatDate) {
        const wrapper = document.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', 
        `<div class="swiper-slide">
            <div class="commit-card">
            <p class="commit-card__date">${formatDate(data.commit.committer.date)}</p>
            <div class="commit-card__author-container">
                <img src="${data.author.avatar_url}" alt="" class="commit-card__author-image">
                <div class="commit-card__author-subcontainer">
                    <p class="commit-card__author-name">${data.commit.committer.name}</p>
                    <p class="commit-card__author-mail">${data.commit.committer.email}</p>
                </div>
            </div>
            <p class="commit-card__author-comment">${data.commit.message}</p>
            </div>
        </div>`);
        return wrapper.firstChild;
    }
}