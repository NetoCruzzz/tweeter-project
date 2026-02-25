const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");

const maxChars = 160;

function updateCharCount() {
    let remaining = maxChars - tweetInput.value.length;
    charCount.textContent = remaining + " characters remaining";

    if (remaining < 0) {
        charCount.textContent = "Character limit exceeded! (160 max)";
        charCount.style.color = "red";
        tweetBtn.disabled = true;
    } else {
        charCount.style.color = "black";
        tweetBtn.disabled = false;
    }
}

function validateTweet() {
    if (tweetInput.value.length > maxChars) {
        tweetBtn.disabled = true;
    }
}

tweetInput.addEventListener("input", updateCharCount);
tweetBtn.addEventListener("click", validateTweet);