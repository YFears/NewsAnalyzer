export function renderLoading(isLoading, container) {
    if (isLoading) {
        container.classList.toggle('visually-hidden');
    } else {
        container.classList.add('visually-hidden');
    }
}