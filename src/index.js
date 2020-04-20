import './../pages/index.css';
import { NewsApi } from './js/modules/NewsApi';
import { NewsCard } from './js/components/NewsCard';
import { NewsCardList } from './js/components/NewsCardList';
import { DataStorage } from './js/modules/DataStorage';

(function () {
    const formSearch = document.forms.search;
    const formInput = document.querySelector('.form__input');
    const formTip = document.querySelector('.form__tip');
    const cardsContainer = document.querySelector('.results__cards-container');
    const resultsContainerOnWait = document.querySelector('.results-wait');
    const resultsContainerNoNews = document.querySelector('.results-nonews');
    const resultsContainerOnError = document.querySelector('.results-error');
    const resultsContainerOk = document.querySelector('.results-ok');
    const resultsButton = document.querySelector('.results__button');

    function getNewCard(place) {
        const newPlace = new NewsCard(place);
        return newPlace.placeCard;
    }

    function getInfoCard(res) {
        const addListCard = new NewsCardList(cardsContainer, res, getNewCard, resultsButton);
        if (addListCard.initialCards.length <= 3) {
            resultsButton.classList.toggle('form__tip_visible');
        } else {
            let counter = 3;
            resultsButton.addEventListener('click', function showNext() {
                addListCard.renderNexts(counter);
                counter += 3;
                if (addListCard.initialCards.length <= counter) {
                    resultsButton.removeEventListener('click', showNext);
                    counter = 3;
                    resultsButton.classList.toggle('visually-hidden');
                }
            })
        }

    }

    function renderLoading(isLoading, container) {
        if (isLoading) {
            container.classList.toggle('visually-hidden');
        } else {
            container.classList.add('visually-hidden');
        }
    }

    formSearch.addEventListener('submit', function getNewsFromApi(event) {
        event.preventDefault();
        if (formInput.value.match(/[а-яёА-ЯЁa-zA-Z]+/)) {    
            formTip.classList.remove('form__tip-animation');        
            renderLoading(true, resultsContainerOnWait);
            renderLoading(false, resultsContainerNoNews);
            renderLoading(false, resultsContainerOnError);
            renderLoading(false, resultsContainerOk);
            resultsButton.classList.remove('visually-hidden');
            const today = new Date();
            const weekAgoMS = new Date().setDate(today.getDate() - 6);
            const weekAgo = new Date(weekAgoMS);
            const todayFormat = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            const weekAgoFormat = `${weekAgo.getFullYear()}-${weekAgo.getMonth() + 1}-${weekAgo.getDate()}`;
            const news = new NewsApi(`http://newsapi.org/v2/everything?` +
                `apiKey=2c8c80a1c3b048af8c0d40ee5215b9c2&` +
                `qInTitle=${formInput.value}&` +
                `from=${weekAgoFormat}&` +
                `to=${todayFormat}&` +
                `language=ru&` +
                `pageSize=100`
            )
            news.getNews()
                .then((res) => {
                    console.log(res)
                    if (res.articles.length === 0) {
                        renderLoading(true, resultsContainerNoNews);
                    } else {
                        getInfoCard(res.articles);
                        renderLoading(true, resultsContainerOk);
                        const localData = new DataStorage(formInput.value, res.articles);  
                        console.log(localData.getData());                      
                    }
                })
                .catch(err => {
                    renderLoading(true, resultsContainerOnError);
                    console.log(err)
                })
                .finally(() => {
                    renderLoading(false, resultsContainerOnWait);
                });
        } else {      
            formTip.classList.remove('form__tip_visible'); 
            void formTip.offsetWidth;
            formTip.classList.add('form__tip_visible'); 
        }
    });

})();