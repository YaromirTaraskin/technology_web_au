document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('jumping_img');

    function getRandomPosition() {
        // (картинка всегда полностью на экране)
        const maxWidth = window.innerWidth - img.clientWidth;
        const maxHeight = window.innerHeight - img.clientHeight;
        // новом месте экрана
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        return { x: randomX, y: randomY };
    }

    function moveImage() {
        const { x, y } = getRandomPosition();
        // каждую секунду возникает в новом месте экрана
        // Используя свойства элемента IMG style.top и style.left, 
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    }
    /*
    каждую секунду возникает в новом месте экрана (картинка всегда полностью на экране). 
    Используйте setInterval.*/
    setInterval(moveImage, 1000);
});
