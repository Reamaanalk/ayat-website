document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence');
    const resultElement = document.getElementById('result');

    const sentence = sentenceInput.value.trim();

    if (sentence === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence.endsWith('بسم الله الرحمن الرحيم');
}



