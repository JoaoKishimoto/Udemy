function Calculadora() {
    this.display = document.querySelector('#display');

    this.iniciar = () => {
        this.dealWClick();
        this.dealWEnter();
    };

    this.dealWEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                this.display.value = eval(this.display.value);
            }
        })
    }

    this.dealWClick = () => {
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('key')){

                if (target.id == '') {
                    this.display.value += target.innerText;
                } else {
                    switch (target.id) {
                        case 'clear':
                            this.display.value = '';
                            break;
                        case 'back':
                            this.display.value = this.display.value.slice(0, -1);
                            break;
                        case 'eq':
                            this.display.value = eval(this.display.value);
                            break;
                    }
                }

            }
            this.display.focus();
        })
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();