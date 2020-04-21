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