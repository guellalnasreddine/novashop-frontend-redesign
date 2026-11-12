
// =========================
// Mobile Navigation
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";
    });
});


// =========================
// Add to Cart
// =========================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Added to Cart ✓";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.disabled = false;
        }, 1500);
    });
});