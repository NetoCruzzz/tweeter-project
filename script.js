// Part 3: Dynamic Content [cite: 21]
const tweetArea = document.getElementById('tweet-text');
const tweetBtn = document.getElementById('tweet-btn');
const charLabel = document.getElementById('char-count');
const MAX_CHARS = 160; // [cite: 23]

// Function called every time user enters text [cite: 29]
tweetArea.addEventListener('input', () => {
    const remaining = MAX_CHARS - tweetArea.value.length;
    
    // Update label [cite: 31]
    updateLabel(remaining);
    
    // Validate input [cite: 22]
    validateInput(tweetArea.value.length);
});

function updateLabel(count) {
    charLabel.textContent = `${count} characters remaining`; // [cite: 29]
    
    if (count < 0) {
        charLabel.style.color = 'red';
    } else {
        charLabel.style.color = '#657786';
    }
}

function validateInput(length) {
    // Enforce 160-character limit and disable button if exceeded [cite: 23, 26]
    if (length > 0 && length <= MAX_CHARS) {
        tweetBtn.disabled = false;
    } else {
        tweetBtn.disabled = true;
    }
}