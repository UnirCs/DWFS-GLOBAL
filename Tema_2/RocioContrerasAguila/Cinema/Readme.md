Implementación de un algoritmo de selección de butacas de cine
==============================

## 1. Objetivo

El objetivo de este ejercicio es trabajar con matrices en JavaScript para crear un algoritmo que permita seleccionar butacas de cine.

## 2. Instrucciones

1. En el tema anterior diseñamos una sala de cine. Se incluía una matriz de asientos (cuadrada, mismo número de filas y columnas). En código JavaScript, utilizaremos una matriz para representar los asientos. Serán objetos y tendrán dos atributos. El ``id``, que será un entero, y el ``estado``, que será un booleano (``true`` si está ocupada y ``false`` si está libre). Se pide desarrollar en JavaScript la función ``suggest`` que recibe como argumento el número de asientos que se desea reservar.

    - Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    - Si en ninguna fila hay suficientes asientos disponibles **juntos**, la función debe devolver un set vacío.
    - Se comenzará a buscar asientos **juntos** en la **fila más lejana** a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.

**IMPORTANTE: No se aceptan soluciones que violen las invariantes de un bucle**

## 3. Código de apoyo

Si lo consideras necesario, puedes utilizar el siguiente código como punto de partida para tu solución. En él se crea la matriz de asientos con la especificación indicada. Queda lista para ser tratada.
Para probar la efectividad del algoritmo, puedes modificar el estado de algunos asientos a ``true``.
Siénte libre de modificar el código a tu gusto.

```javascript
// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);
```



