const display = document.querySelector('#display');

document.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'clear':
            display.value = '';
            break;
        case 'button-0':
            display.value += '0';
            break
        case 'button-1':
            display.value += '1';
            break
        case 'button-2':
            display.value += '2';
            break
        case 'button-3':
            display.value += '3';
            break
        case 'button-4':
            display.value += '4';
            break
        case 'button-5':
            display.value += '5';
            break
        case 'button-6':
            display.value += '6';
            break
        case 'button-7':
            display.value += '7';
            break
        case 'button-8':
            display.value += '8';
            break
        case 'button-9':
            display.value += '9';
            break
        case 'openP':
            display.value += '(';
            break
        case 'closeP':
            display.value += ')';
            break
        case 'slash':
            display.value += '/';
            break
        case 'times':
            display.value += '*';
            break
        case 'plus':
            display.value += '+';
            break
        case 'minus':
            display.value += '-';
            break
        case 'dot':
            display.value += '.';
            break
        case 'equals':
            calculator(display.value);
            break
        case 'backspace':
            let length = display.value.length;
            display.value = display.value.substring(0, length - 1);
            break
        default:
            break
    }
})

function calculator(eq) {
    display.value = eval(eq);
}