# Filtros RGB mediante JavaScript en matrices de píxeles

## 1. Objetivo

El objetivo de este ejercicio es trabajar con operadores básicos, operaciones combinadas, condicionales y bucles junto con matrices en JavaScript mientras se aplican filtros RGB a una imagen.

## 2. Instrucciones

Completad las funciones siguiendo las instrucciones del comentario en el fichero `actividad.js`. No deberíais tener que
modificar el código en `ImageHandler.js` en ningun caso.

Por favor, no cambiéis las líneas que ya estan escritas: En cada función ya viene declarado el outputPath y
en la variable pixels tenéis la imagen ya cargada en formato matriz de valores RGB. Al mismo tiempo, al final de cada
función ya se encuentra el savePixels para guardar la imagen en el outputPath.

### 2.1 Instalación

Descargar Node.js desde su página oficial: https://nodejs.org/es/download/ que traerá incluido NPM.
Una vez tengáis `NodeJS` y `NPM` instalado, en la terminal de vuestro IDE tenéis que escribir las siguientes líneas una por una:

```
npm install fs
npm install save-pixels 
npm install get-pixels
npm install deasync
npm install ndarray
```

Si tenéis cualquier duda o problema comentadlo en el foro.

### 2.2 Operativa básica

Simplemente se crea un objeto ImageHandler con el path a la imagen y, usando la función `getPixels()`, se consigue
la información de la imagen en formato RGB.

Para guardar una imagen simplemente llamamos a la función `savePixels(pixelsToSave, newPath)`. Esta función también
acepta un nuevo ancho/alto de imagen en caso de que la imagen que queremos guardar no tenga los mismos valores que
la original.

Al final del codigo hay una sentencia de ejecucion que guarda en `output` la imagen resultante de los cambios que hayáis programado, para la opción elegida.


### 2.3 Teoría de píxeles

La función `getPixels()` devuelve una matriz de pixeles RGB.

Una matriz no es más que un array con arrays en sus posiciones para representar los pixeles en la pantalla. A su vez
cada pixel es un array con 3 posiciones, una para cada valor RGB.

Por ejemplo si tenemos una imagen 2x2 con 4 píxeles tal que:

| Rojo | Verde  |
|------|--------|
| Azul | Blanco |

Esto corresponderá a la siguiente matriz:

[<br>
&nbsp;&nbsp;&nbsp;&nbsp;    [ [255, 0, 0], [0, 255, 0]     ],<br>
&nbsp;&nbsp;&nbsp;&nbsp;    [ [0, 0, 255], [255, 255, 255] ]<br>
]

Como podéis ver tenemos un array con 2 filas.
En cada una de las filas tenemos 2 columnas.
Finalmente, en cada fila y columna tenemos un array con los 3 valores RGB del pixel.

## 3. Código de apoyo

Tenéis el código de apoyo en el archivo ``actividad.js``.
