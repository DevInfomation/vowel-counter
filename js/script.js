const checkVowels = document.getElementById('check-vowels');
const vowelCounter = document.getElementById('vowel-counter');

const vowelCounterDiv = document.querySelector('.vowel-counter-calculate');

function countVowelsIterative(text) {
    let matchingInstances = text.match(/[aeiou]/gi);

    if (matchingInstances) {
        return matchingInstances.length;
    } else {
        return 0;
    }
}

checkVowels.addEventListener('click', e => {
    e.preventDefault();

    const paragraph = document.createElement('p');

    paragraph.textContent = 'Number of vowels are: ';

    const result = countVowelsIterative(vowelCounter.value);

    vowelCounterDiv.append(paragraph);
    vowelCounterDiv.append(result);
});
