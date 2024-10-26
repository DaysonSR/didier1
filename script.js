const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

btnYes.addEventListener('click', () => {
    alert('¡Yo sí sabía que tenía al mejor profe del mundo! Le debo una. Y por cierto, si era verdad lo del sábado pasado de ya sabe quién.');
});

btnNo.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - 150); // 150 es el ancho del botón
    const y = Math.random() * (window.innerHeight - 50); // 50 es el alto del botón

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});
