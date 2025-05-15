const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener('click', checkForPalindrome);

function checkForPalindrome() {
    const text = input.value;
    const cleanedText = text.replace(/[^a-zA-Z0-9çÇ]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText.length <= 1) {
        result.textContent = `"${text}" n'est pas un palindrome (texte trop court).`;
    } else if (cleanedText === reversedText) {
        result.textContent = `"${text}" est un palindrome !`;
    } else {
        result.textContent = `"${text}" n'est pas un palindrome.`;
    }
}

