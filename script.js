document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Update carousel slide and dots
    function updateCarousel(index) {
        const carouselSlide = document.querySelector('.carousel-slide');
        carouselSlide.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active-dot', i === index);
        });
    }

    // Move to next slide
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
    }

    // Move to previous slide
    function moveToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(currentIndex);
    }

    // Add event listeners
    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPrevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Auto-slide every 3 seconds (adjust this value as needed)
    setInterval(moveToNextSlide, 1500);

    // Initialize carousel
    updateCarousel(currentIndex);
});
