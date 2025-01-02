document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll("img");
        let index = 0;

        // Mostrar la primera imagen inicialmente
        images[index].classList.add("active");

        // Cambiar imagen cada 5 segundos
        setInterval(() => {
            images[index].classList.remove("active");
            index = (index + 1) % images.length; // Siguiente índice (cíclico)
            images[index].classList.add("active");
        }, 4000);
    });
});
