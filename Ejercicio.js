function esNatural(num) {
    // Devuelve true si el num es Natural
    // Usa Recursividad
    if(num === 0) return true;

    if(num < 0){
        return false;
    } else{
        return esNatural(num-1);
    }    
}

console.log(esNatural(2))




function Colores(colores, valor, nuevoValor) {
    // Aquellos colores negros cambiar su palabra a Black
    // Devuelve el arreglo
    while(colores.indexOf(valor) != -1){
        colores.splice(colores.indexOf(valor), 1, nuevoValor);
    }
}

var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']

Colores(colores, 'Negros', 'Black');
console.log(colores)




function Filtrado(colores) {
    // Del resultado de la funcion Colores() filtra aquellos colores llamados Black
    // ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']
    const palabra = 'Black'
    const filtrar = colores.filter(c => {
        for(color of palabra){
            if(c.indexOf(color) === -1) return true
        }
        return false
    });
    return filtrar;
}
Filtrado(colores)
console.log(Filtrado(colores))




function Filtrar(personas){
    // Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
    // Mostrar arreglo
    let filtrado = personas.filter(personas => personas.edad >= 18);
    return filtrado;
}

const personas = [

    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];

console.log(Filtrar(personas))





