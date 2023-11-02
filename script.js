//index.js
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


//page2.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence2');
    const resultElement = document.getElementById('result');

    const sentence2 = sentenceInput.value.trim();

    if (sentence2 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence2)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence2) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence2.endsWith('الحمد لله رب العالمين');
}


//page3.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence3');
    const resultElement = document.getElementById('result');

    const sentence3 = sentenceInput.value.trim();

    if (sentence3 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence3)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence3) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence3.endsWith('الرحمن الرحيم');
}


//page4.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence4');
    const resultElement = document.getElementById('result');

    const sentence4 = sentenceInput.value.trim();

    if (sentence4 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence4)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence4) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence4.endsWith('ملك يوم الدين');
}


//page5.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence5');
    const resultElement = document.getElementById('result');

    const sentence5 = sentenceInput.value.trim();

    if (sentence5 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence5)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence5) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence5.endsWith('اياك نعبد واياك نستعين');
}


//page6.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence6');
    const resultElement = document.getElementById('result');

    const sentence6 = sentenceInput.value.trim();

    if (sentence6 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence6)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence6) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence6.endsWith('اهدنا السراط المستقيم');
}


//page7.js
document.getElementById('validate').addEventListener('click', function() {
    const sentenceInput = document.getElementById('sentence7');
    const resultElement = document.getElementById('result');

    const sentence7 = sentenceInput.value.trim();

    if (sentence7 === '') {
        resultElement.textContent = 'Please enter a sentence.';
    } else if (isValidSentence(sentence7)) {
        //resultElement.textContent = 'Valid sentence.';
        sentenceInput.style.border = '2px solid green'; // Set the border to red
    } else {
        //resultElement.textContent = 'Invalid sentence.';
        sentenceInput.style.border = '2px solid red'; // Set the border to red
    }
});

function isValidSentence(sentence7) {
    // A simple validation rule: Check if the sentence ends with a period (full stop).
    return sentence7.endsWith('صرط الذين انعمت عليهم غير المغضوب عليهم ولا الضالين');
}
