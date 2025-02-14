// Función para generar estrellas en el fondo
function createStars() {
    const container = document.querySelector('body');
    const numberOfStars = 100;  // Número de estrellas

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`; 
        star.style.left = `${Math.random() * 100}vw`;  
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;  
        container.appendChild(star);
    }
}

// Llamar a la función para crear estrellas cuando la página cargue
window.onload = function() {
    createStars();
};


document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Carta.pdf'; 
    link.download = 'Carta_San_Valentin.pdf';
    link.click();
});

// Funcionalidad del segundo botón para redirigir a otro proyecto HTML
document.getElementById('project-btn').addEventListener('click', function() {
    window.location.href = './sanvalentin.htlm';  // Cambia la ruta a tu otro proyecto HTML
});
