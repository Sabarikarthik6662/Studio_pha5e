document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".images img");
    const spans = document.querySelectorAll(".content span");

    images.forEach(image => {
        image.addEventListener("mouseenter", function() {
            images.forEach(img => {
                if (img !== this) {
                    img.style.opacity = "0";
                    img.style.outline = "3px solid white";
                }
            });
            spans.forEach(span => {
                span.style.opacity = "0";
            });
        });

        image.addEventListener("mouseleave", function() {
            images.forEach(img => {
                img.style.opacity = "1";
                img.style.outline = "none";
            });
            spans.forEach(span => {
                span.style.opacity = "1";
            });
        });
    });
});
