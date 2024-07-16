let nombre = prompt('Bienvenido al e-commerce \n ¿Cual es su nombre?')

let libros = ["El túnel by Ernesto Sabato", "El Aleph by Jorge Luis Borges", "Martín Fierro by José Hernández", "Operación Masacre by Rodolfo Walsh", "Cuentos de amor de locura y de muerte by Horacio Quiroga", "Toda Mafalda by Quino","Rayuela by Julio Cortázar","Ficciones by Jorge Luis Borges"] 
let precios= [10,20,30,40,50,60,70,80]

function numerarCatalogo(catalogo) {
    let mensaje = `Hola ${nombre}, este es el catalogo:\n`;
    catalogo.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto}\n`;
    });

    return mensaje += "Digite el numero del libro para ver su precio / 0 para salir: ";
} 

let textoMostrado = numerarCatalogo(libros);

let flag=true
while(flag){
    let respuesta= prompt(textoMostrado);

    switch (respuesta) {
        case '0':
            flag=false;
          break;
        case '1':
          let respuesta1=prompt(`el precio es de $${precios[0]} \n Presiona 1 para volver\n Presiona 0 para salir`);
          if(respuesta1=='0'){
            flag=false;
          }
          break;
        case '2':
            let respuesta2=prompt(`el precio es de $${precios[1]} \n Presiona 1 para volver\n Presiona 0 para salir`);
            if(respuesta2=='0'){
              flag=false;
            }
          break;
        case '3':
            let respuesta3=prompt(`el precio es de $${precios[2]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta3=='0'){
              flag=false;
            }
          break;
        case '4':
            let respuesta4=prompt(`el precio es de $${precios[3]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta4=='0'){
              flag=false;
            }
          break;
        case '5':
            let respuesta5=prompt(`el precio es de $${precios[4]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta5=='0'){
              flag=false;
            }
          break;
        case '6':
            let respuesta6=prompt(`el precio es de $${precios[5]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta6=='0'){
              flag=false;
            }
          break;
        case '7':
            let respuesta7=prompt(`el precio es de $${precios[6]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta7=='0'){
              flag=false;
            }
          break;
        case '8':
            let respuesta8=prompt(`el precio es de $${precios[7]} \n Presiona 1 para volver.\n Presiona 0 para salir.`);
            if(respuesta8=='0'){
              flag=false;
            }
          break;
        default:
          confirm('Entrada invalida, ingrese el numero del libro.')
    }
}

alert('¡Muchas gracias por visitarnos, vuelva pronto!')

// el programa saluda y pide el nombre
// salude con el nombre y muestre el catalogo, el usuario elige un producto y el programa debe mostrar el precio del mismo.
// se puede volver a elegir otro producto o escribir 0 para salir.
// agradece




// otra forma de hacerlo:





// let nombre = prompt('Bienvenido al e-commerce \n ¿Cuál es su nombre?');

// let libros = [
//     "El túnel by Ernesto Sabato", 
//     "El Aleph by Jorge Luis Borges", 
//     "Martín Fierro by José Hernández", 
//     "Operación Masacre by Rodolfo Walsh", 
//     "Cuentos de amor de locura y de muerte by Horacio Quiroga", 
//     "Toda Mafalda by Quino", 
//     "Rayuela by Julio Cortázar", 
//     "Ficciones by Jorge Luis Borges"
// ]; 

// let precios = [10, 20, 30, 40, 50, 60, 70, 80];

// function numerarCatalogo(catalogo) {
//     let mensaje = `Hola ${nombre}, este es el catálogo:\n`;
//     catalogo.forEach((producto, index) => {
//         mensaje += `${index + 1}. ${producto}\n`;
//     });

//     return mensaje += "Digite el número del libro para ver su precio / 0 para salir: ";
// } 

// function mostrarPrecio(indice) {
//     return prompt(`El precio es de $${precios[indice]} \nPresiona 1 para volver\nPresiona 0 para salir`);
// }

// let textoMostrado = numerarCatalogo(libros);
// let flag = true;

// while (flag) {
//     let respuesta = prompt(textoMostrado);

//     if (respuesta === '0') {
//         flag = false;
//     } else {
//         let indice = parseInt(respuesta) - 1;
//         if (indice >= 0 && indice < libros.length) {
//             let respuestaInterna = mostrarPrecio(indice);
//             if (respuestaInterna === '0') {
//                 flag = false;
//             }
//         } else {
//             alert('Entrada inválida, ingrese el número del libro.');
//         }
//     }
// }

// alert('¡Muchas gracias por visitarnos, vuelva pronto!');
