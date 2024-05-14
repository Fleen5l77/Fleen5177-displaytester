const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const id = icon.id;
        if (id === 'icon1') {
            window.location.href = 'dst.html';
        } else if (id === 'icon2') {
            window.location.href = 'touch.html';
        }

    });
});
