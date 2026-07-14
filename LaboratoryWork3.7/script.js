const multiplierForFontChanging = 2 ** 0.125;


document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text');
    
    // localStorage cookie font size import
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) text.style.fontSize = savedFontSize + 'px';

    // A+
    document.getElementById('increment_size_font').addEventListener('click', () => {
        let currentFontSize = parseFloat(window.getComputedStyle(text).fontSize);
        currentFontSize *= multiplierForFontChanging; text.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });

    // A-
    document.getElementById('decrement_size_font').addEventListener('click', () => {
        let currentFontSize = parseFloat(window.getComputedStyle(text).fontSize);
        currentFontSize /= multiplierForFontChanging; text.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    });
});
