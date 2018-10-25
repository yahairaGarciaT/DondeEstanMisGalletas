
    

window.addEventListener('DOMContentLoaded', function(){

function highlight(strings, ...values){
    let str = '';
    strings.forEach((string, i) => {
        str += `${string} <span contenteditable class='hl'>${values[i] || ''}</span>`;
    });
    return str;
}

const name = 'snickers';
const age = 100; 
const sentence = highlight `my dog's name is ${name} and he is ${age} years old `;
document.body.innerHTML = sentence;
console.log(sentence);
});