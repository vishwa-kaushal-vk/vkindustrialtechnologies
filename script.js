// Filter Product Catalog by Category
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button state
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/Hide products
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Auto-populate the inquiry form when clicking "Inquire Now" on a product
function selectProductForInquiry(productSku, productName) {
    const inquiryField = document.getElementById('inquiryTextarea');
    const formSection = document.getElementById('inquiry');

    if (inquiryField && formSection) {
        inquiryField.value = `Interested in Part SKU: ${productSku} - ${productName}.\nPlease provide pricing and current stock availability.`;
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. PLC Terminal Typing Effect
    const textArray = [
        "INITIALIZING FLUID DYNAMICS...",
        "CALIBRATING CIJ PRINTHEADS...",
        "SYSTEM UPTIME: 99.9% MAINTAINED.",
        "INDUSTRIAL INNOVATION. RELIABLE SOLUTIONS."
    ];
    let textIndex = 0;
    let charIndex = 0;
    const typeSpeed = 50;
    const eraseSpeed = 30;
    const delayBetweenTexts = 2000;
    
    const terminalElement = document.getElementById("typed-text");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            terminalElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typeSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            terminalElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0; // Loop back
            setTimeout(type, typeSpeed);
        }
    }

    // Start typing effect on load
    if(terminalElement) {
        setTimeout(type, 1000);
    }
});