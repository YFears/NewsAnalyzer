import './../../pages/analytics.css';
import { DataStorage } from './../js/modules/DataStorage'
import { convertToShortDate, getMonthIntl } from './../js/utils/formatDates'

(function () {
    const mainWord = document.querySelector('.info-analytics__topic-title');
    const wordInSummary = document.querySelector('.main-analitycs__news-stat .info-analytics__subtitle');
    const wordInTitle = document.querySelector('.main-analitycs__note-stat .info-analytics__subtitle');
    const monthInGraph = document.querySelector('.analytics__date-title');
    const daysInGraph = document.querySelectorAll('.analytics__day');
    const noticesInGraph = document.querySelectorAll('.analytics__count');
    const analyticsData = new DataStorage();
    const keysData = analyticsData.getData();
    const lastItem = analyticsData.getLastItem();
    console.log(keysData);

    function getCountInTitle() {
        let counter = 0;
        keysData.forEach(elem => {
            if (elem.title.toLowerCase().includes(lastItem.toLowerCase())) {
                counter++;
            }            
        })
        return counter
    }

    function calculateData() {
        let beforeToday = new Date();
        beforeToday.setDate(beforeToday.getDate() - 6);
        const regExp = new RegExp(lastItem,'gi')
        let i = 0;
        daysInGraph.forEach(elem => {
            let counter = 0;
            keysData.forEach(element => {
                const regArrT = element.title.match(regExp);
                const regArrD = element.description ? element.description.match(regExp): null;
                const rule = convertToShortDate(element.publishedAt) === convertToShortDate(beforeToday);
                if (regArrT && rule) {
                    counter+= regArrT.length;
                };
                if (regArrD && rule) {
                    counter+= regArrD.length;
                };               

            })
            noticesInGraph[i].textContent = counter;
            noticesInGraph[i].setAttribute('style', `width: ${counter}%`);
            i++;
            elem.textContent = convertToShortDate(beforeToday);
            beforeToday.setDate(beforeToday.getDate() + 1);
        })
    }

    calculateData();
    mainWord.textContent = `Вы спросили: «${lastItem}»`;
    monthInGraph.textContent = `Дата (${getMonthIntl()})`;
    wordInTitle.textContent = getCountInTitle();
    wordInSummary.textContent = keysData.length;

})()