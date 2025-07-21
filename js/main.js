document.addEventListener("DOMContentLoaded", function () {
const sliders = document.querySelectorAll(".Birthdays-slider");

sliders.forEach(slider => {
    const slides = slider.querySelectorAll(".Birthdays-slide");
    const parentContainer = slider.closest(".Birthdays-slider-container");
    const prevBtn = parentContainer.querySelector(".slider-prev");
    const nextBtn = parentContainer.querySelector(".slider-next");
    const dotsContainer = parentContainer.querySelector(".slider-dots");
    
    let currentIndex = 0;
    const slideCount = slides.length;

    // إنشاء نقاط التوجيه
    dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    // الانتقال لشريحة محددة
    function goToSlide(index) {
        if (index >= slideCount) index = 0;
        if (index < 0) index = slideCount - 1;

        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // تحديث النقاط النشطة
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    // الشريحة التالية
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // الشريحة السابقة
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // إضافة معالجي الأحداث
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // التمرير التلقائي (اختياري)
    let slideInterval = setInterval(nextSlide, 5000);

    // إيقاف التمرير التلقائي عند التوقف
    parentContainer.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
    });

    parentContainer.addEventListener("mouseleave", () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});
});


// WhatsApp links
let span = document.querySelector(".up");
window.onscroll = function () {
this.scrollY >= 50 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
window.scrollTo({
top: 0,
// behavior: "smooth",
});
};
