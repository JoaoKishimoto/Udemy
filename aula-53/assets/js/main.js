elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i in elements) {
    let {tag, text} = elements[i];
    let element = document.createElement(tag);
    let message = document.createTextNode(text);
    element.appendChild(message);
    div.appendChild(element);
}

container.appendChild(div);
console.log(container.innerHTML);