let answerDiv = document.querySelector('#answer');
let input = document.querySelector('#input');

function num(e) {
    input.value = input.value + e.innerHTML;
}

function calc() {
    ans = eval(input.value);
    answerDiv.innerHTML = `Answer = ${ans}`;
}

function ACbtn() {
    input.value = '';
}