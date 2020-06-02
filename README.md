# [Яндекс.Практикум - Диплом NewsAnalyzer](https://yfears.github.io/NewsAnalyzer/ "'NewsAnalyzer' - Сервис для анализа происходящих в мире событий")
<a href="https://yfears.github.io/NewsAnalyzer/"><img src="https://pixs.ru/images/2020/06/02/NA.png" title="NewsAnalyzer" alt="Сервис для анализа происходящих в мире событий"></a>
> Версия v0.8.3
- [Описание](#Описание)
- [Стек](#Стек)
- [Установка](#Установка)
- [Использование](#Использование)

---
## Описание
Перед вами сервис для анализа происходящих в мире событий.
Его задача — установить, насколько популярны новости на определённую тему.
Сайт состоит из трёх страниц:
 - Главная. Содержит только окно поиска и результаты с возможностью просмотра аналитики.    
 - Страница «О проекте». Содержит информацию о работе: что это за проект, кто его делал, какими технологиями пользовался.
 - Страница с аналитикой. На ней отображается диаграмма популярности новостей.

Как это работает?
Пользователь вводит в строку поиска ключевые слова, по которым хочет найти новости.
По нажатию кнопки «Искать» сайт выполняет два действия:
 - находит все статьи по запросу за последнюю неделю и отрисовывает карточки с новостями;
 - подсчитывает статистику: сколько новостей вышло в каждый из последних семи дней. Статистика отрисовывается на отдельной странице

## Стек
 - Webpack - сборка проекта (Babel - минификация и транспиляция JS-кода, PostCSS для минификации CSS-кода и простановки вендорных префиксов, хеширование, локальный сервер)
 - Git - хранение проекта (создание и merge веток, создание pull request'ов)
 - HTML - семантическая разметка
 - BEM - разделение интерфейса на независимые блоки (именование, файловая структура, принцип повторного использования блоков)
 - CSS3 - Flex и Grid Layout, оформление, позиционирование, управление состоянием элементов и адаптация под разные устройства
 - JS - ООП (классы), работа с API (NewsAPI, GitHub API), асинхронность (Promise), работа с датой и временем, передача данных между страницами (localStorage)

## Установка

### Клонирование

- Клонируйте репозиторий:

```bash
git clone https://github.com/YFears/NewsAnalyzer.git
```

### Использование
- Используйте следующие комманды, чтобы собрать (1), запустить в режиме разработки (2) или задеплоить проект на GitHub Pages (3)

1. ```bash
npm run build
```

2. ```bash
npm run dev
```

3. ```bash
npm run deploy
```