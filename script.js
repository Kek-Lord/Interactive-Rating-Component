document.addEventListener("DOMContentLoaded", function() {
    const numbers = document.getElementsByClassName('rating-number');
    const button = document.querySelector('.submit-button');
    const ratingCard = document.querySelector('.card-content');
    const thankYou = document.querySelector('.thank-you-card');
    const ratingSpan = document.querySelector('.rating-container span');

    let selectedRating = null;

    // Iterate over each element with class 'rating-number'
    for (let i = 0; i < numbers.length; i++) {
        // Add click event listener to each element
        numbers[i].onclick = function() {
            // Reset background color and text color of all elements to their original value
            for (let j = 0; j < numbers.length; j++) {
                numbers[j].style.backgroundColor = ''; // Reset to default
                // Reset text color of child element
                if (numbers[j].children.length > 0) {
                    numbers[j].children[0].style.color = ''; // Reset to default
                }
            }
            // Change background color of the clicked element
            this.style.backgroundColor = 'var(--White)';
            // Change text color of the child element
            if (this.children.length > 0) {
                this.children[0].style.color = 'black';
            }
            // Store the selected rating value
            selectedRating = this.children[0].textContent;
        }
    }

    // Add click event listener to the button
    button.onclick = function() {
        if (selectedRating !== null) {
            // Hide the rating card and show the thank you card
            ratingCard.style.display = 'none';
            thankYou.style.display = 'flex';
            // Update the rating span with the selected rating value
            ratingSpan.textContent = ` ${selectedRating} `;
        } else {
            alert('Please select a rating before submitting!');
        }
    }
});
