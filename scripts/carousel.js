document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let index = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function showSlide() {
        const offset = -index * images[index].clientWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    window.nextSlide = function () {
        index = (index + 1) % totalImages;
        showSlide();
    };

    window.prevSlide = function () {
        index = (index - 1 + totalImages) % totalImages;
        showSlide();
    };

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);
});
