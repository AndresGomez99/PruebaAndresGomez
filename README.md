## Acerca del código
En cuanto al código la funcionalidad principal de convertir una hora dada a su equivalente en redacción se encuentra dentro de archivo **horas.js**, mientras que index.js  es un simple main el cual permite demostrar la funcionalidad indicada. Se tomó esta decisión con el fin de modularizar la funcionalidad en caso de que se requiera utilizarla en otra parte.
## Pasos para ejecutar el programa
  1. Es necesario asegurar que se tiene instalado la última versión de Node.js [Descargar Node.js](https://nodejs.org/es/download/)
  2. Una vez instalado, descargar el código de este repositorio.
  3. Descomprir el .zip que se descargó.
  4. Dirigirse a la terminal de nuestro sistema e introducir la ruta de la carpeta donde se encuentra el código.
  5. En la consola ingresar **npm install** para instalar las dependencias necesarias.
  6. Luego introducir **npm run init** (también puede ingresar node index.js) para comenzar la ejecución del programa.
  7. Y ya se puede comenzar a utilizar el programa.
## Como utilizar el programa
  1. Una vez en ejecución el programa solicita que una hora con el formato ([horas]:[minutos][am/pm]) por lo que debe ingresar una fecha válida.
    -Algunos ejemplos del formato:
      - 1:30am o 01:30am (el programa acepta tanto el formato de hora de un solo digito como con dos)
      - 12:55pm
      - 7:30am o 7:30 am (el programa acepta que el am/pm se encuentre separado o junto a la hora)
      
   2. El programa imprime el resultado y termina su ejecución. 
   3. Para realizar otra prueba hay que introducir de nuevo **npm run init**.
      
  

