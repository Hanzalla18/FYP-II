/*function addToCart(item, price, quantity) {
    // Toggle the success message
    var message = document.getElementById('successMessage');
    
    // Show success message
    message.style.display = 'block';
    
    // Optionally, you can hide the message after a few seconds (for example, 3 seconds)
    setTimeout(function() {
        message.style.display = 'none';
    }, 3000);
}
*/
// Add to Cart Function
function addToCart(button) {
    // Get Item Details
    const itemName = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const quantity = parseInt(button.getAttribute('data-quantity'));

    // Create a Cart Item Object
    const cartItem = {
        name: itemName,
        price: price,
        quantity: quantity,
        total: price * quantity
    };

    // Add Item to Cart Array (if needed for later use)
    console.log(cartItem); // Log item for debugging

    // Show Success Message
    showSuccessMessage(itemName);
}

// Function to Show Success Message
function showSuccessMessage(itemName) {
    const message = document.getElementById('successMessage');

    // Update Message Text
    message.textContent = `${itemName} has been added to the cart successfully!`;

    // Add 'show' Class to Make Message Visible
    message.classList.add('show');
    message.style.display = 'block'; // Ensure it's visible

    // Remove 'show' Class After 3 Seconds to Hide Message
    setTimeout(() => {
        message.classList.remove('show');
        // Delay hiding until animation is done
        setTimeout(() => {
            message.style.display = 'none';
        }, 500); // Matches CSS transition duration
    }, 3000); // Message visible for 3 seconds
}
