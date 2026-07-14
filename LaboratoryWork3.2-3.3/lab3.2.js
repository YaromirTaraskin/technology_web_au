document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (event) => {
        document.getElementById('info_mouse').innerHTML = 
            `Mouse cursor coordinates (inside the page): (${event.clientX}, ${event.clientY})`;
    });
    document.addEventListener('keydown', (event) => {
        document.getElementById('info_key_pressed').innerHTML = 
            `Last key pressed (codename): ${event.key}`;
    });
});
