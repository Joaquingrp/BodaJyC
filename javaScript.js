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

    // Lógica para el menú desplegable
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

       // Detectar la sección visible y actualizar la URL
       document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
                history.replaceState(null, null, `#${currentSection}`);
            }
        });

  // Recargar el formulario solo una vez al llegar a #cuestionario
  if (currentSection === "cuestionario" && !hasReloaded) {
    let iframe = document.getElementById("formulario-iframe");
    if (iframe) {
        iframe.src = iframe.src; // Recarga el iframe
        hasReloaded = true; // Evita futuras recargas
    }
}
});

