// const dataCrua = new Date();
// const date = dataCrua.getDate();
// const month = dataCrua.getMonth();
// const year = dataCrua.getFullYear();
// const hora = dataCrua.getHours();
// const min = dataCrua.getMinutes();
// const day = dataCrua.getDay();


// let mes = ''
// let dia = ''

// switch (month) {
//     case 0:
//         mes = 'Janeiro';
//         break;
//     case 1:
//         mes = 'Fevereiro';
//         break;
//     case 2:
//         mes = 'Março';
//         break;
//     case 3:
//         mes = 'Abril';
//         break;
//     case 4: 
//         mes = 'Maio';
//         break;
//     case 5:
//         mes = 'Junho';
//         break;
//     case 6:
//         mes = 'Julho';
//         break;
//     case 7:
//         mes = 'Agosto';
//         break;
//     case 8:
//         mes = 'Setembro';
//         break;
//     case 9:
//         mes = 'Outubro';
//         break;    case 10:
//         mes = 'Novembro';
//         break;
//     case 11:
//         mes = 'Dezembro';
//         break;
//     default:
//         mes = 'ERROR';
// }

// switch (day) {
//     case 0:
//         dia = 'Domingo';
//         break;
//     case 1:
//         dia = "Segunda";
//         break;
//     case 2:
//         dia = "Terça"
//         break;
//     case 3:
//         dia = "Quarta";
//         break;
//     case 4:
//         dia = "Quinta";
//         break;
//     case 5:
//         dia = "Sexta";
//         break;
//     case 6:
//         dia = "Sábado";
//         break;
//     default:
//         dia = 'ERROR';

// }

// let data = `${dia}, ${date} de ${mes} de ${year} ${hora}:${min}`;
// const h1 = document.getElementById('date');
// h1.innerHTML = data;

//console.log(`${dia}, ${date} de ${mes} de ${year} ${hora}:${min}`);

const h1 = document.getElementById('date');
const date = new Date();
const options = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = date.toLocaleString('pt-BR', options);