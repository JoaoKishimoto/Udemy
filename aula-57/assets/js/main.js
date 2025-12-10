const ps = document.querySelectorAll('p');
const bodyStyle = getComputedStyle(document.body);

const bodyBackgroundColor = bodyStyle.backgroundColor;
console.log(bodyBackgroundColor);

for(p of ps) {
    p.style.backgroundColor =  bodyBackgroundColor;
}