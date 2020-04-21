import './../../pages/about.css';
import  Swiper from './../js/utils/swiper/swiper.min.js'
import { CommitCard } from './../js/components/CommitCard';
import { CommitCardList } from './../js/components/CommitCardList';
import { convertDate } from './../js/utils/formatDates';
import { renderLoading } from './../js/utils/renderLoading';
import { GithubApi } from './../js/modules/GithubApi';

(function () {
    const commitCardsContainer = document.querySelector('.swiper-wrapper');
    const waitContainer = document.querySelector('.preloading-wait');
    const errorContainer= document.querySelector('.preloading-error');
    const swiperContainer = document.querySelector('.swiper-container');

    function renderSwiper() {
        const swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }      
          });
    }

    function getNewCommitCard(data) {
        const newCommitCard = new CommitCard(data, convertDate);
        return newCommitCard.gitCard;
    }

    function getInfoCard(res) {
        const addListCommitCard = new CommitCardList(commitCardsContainer, res, getNewCommitCard);
    }

    renderLoading(true, waitContainer);
    const commits = new GithubApi('https://api.github.com/repos/YFears/NewsAnalyzer/commits');
    commits.getCommits()
        .then((res) => {
            getInfoCard(res.slice(0, 20));            
            renderLoading(true, swiperContainer);
        })        
        .then(() => {
            renderSwiper();
        })        
        .catch(() => {
            renderLoading(true, errorContainer);
        })
        .finally(() => {
            renderLoading(false, waitContainer);
        });
})();