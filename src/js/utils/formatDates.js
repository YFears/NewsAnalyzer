export function convertDate(initialDate) {
    const dateInMs = Date.parse(initialDate);
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

export function convertToShortDate(initialDate) {
    const dateInMs = Date.parse(initialDate);
    const date = new Date(dateInMs);
    const formatterDay = new Intl.DateTimeFormat("ru", {
        day: "numeric"
    });
    const formatterWeekday= new Intl.DateTimeFormat("ru", {
        weekday: "short"
    });    

    const formatDate = `${formatterDay.format(date)}, ${formatterWeekday.format(date)}`;
    return formatDate
}

export function getMonthIntl() {
    const date = new Date();
    const formatterMonth = new Intl.DateTimeFormat("ru", {
        month: "long"
    });

    const formatDate = `${formatterMonth.format(date)}`;
    return formatDate
}