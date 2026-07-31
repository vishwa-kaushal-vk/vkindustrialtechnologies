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