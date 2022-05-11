// var nome = 'Farias'


// //if --- else
// if (nome == 'Andre') {
//     console.log('igual')
// } else if (nome == 'Farias') {
//     console.log('igual')
// } else {
//     console.log('errado')
// }

// //switch 
// switch (nome) {
//     case 'Andre':
//         console.log('igual');
//         break;
//     case 'Farias':
//         console.log('diferente');
//         break;
//     default:
//         console.log('errado')
//         break;
// }

//for
// tabuada = 7;
// for (var i = 0; i <= 10; i++) {
//     console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
// }
var numeroSort = 10;
// for (var i = 0; i < 100; i++) {
//     if (numeroSort == i) {
//         console.log('Num encontrado');
//     }
// }

//while
var achou = false;
var possivelValor = 0;
while (!achou) {
    possivelValor += 1;
    if (numeroSort === possivelValor) {
        achou = true;
    } else {
        console.log('nn conrresponde '+possivelValor);
    }

}