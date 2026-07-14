document.addEventListener('DOMContentLoaded', () => {
    const colorListItems = document.querySelectorAll('.color_list li');
    const square = document.querySelector('.square');

    colorListItems.forEach(item => {
        item.addEventListener('click', () => {
            const colorClass = item.classList[0];
            square.className = `square ${colorClass}`;
        });
    });
});
