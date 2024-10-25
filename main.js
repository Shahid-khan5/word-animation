const words = document.querySelectorAll('.menu-word');
let currentIndex = 0;

function showNextWord() {
    // Remove active class from all words
    words.forEach(word => {
        word.classList.remove('active');
        word.classList.remove('exit');
    });

    // Add active class to current word
    words[currentIndex].classList.add('active');

    // Add exit class to previous word
    const prevIndex = (currentIndex - 1 + words.length) % words.length;
    words[prevIndex].classList.add('exit');

    // Update index
    currentIndex = (currentIndex + 1) % words.length;
}

// Initial display
words[0].classList.add('active');

// Start the rotation
setInterval(showNextWord, 1000); // 1000ms = 1 second per word

// Add click event listeners
words.forEach(word => {
    word.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your URL navigation logic here
        console.log('Clicked:', word.textContent);
    });
});