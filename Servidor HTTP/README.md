## SAILS
> npm install -g sails

## Crear un proyecto en Sailjs

> sails new NombreProyecto

> cd Mascotas


## Levantar el servidor

> sails lift

o 

> node app.js

El sails les pide opciones si no están definidas.

Opciones:

1: SAFE MODE (no se va a alterar la base de datos)
2: ALTER MODE (se va a alterar la base de datos si nosotros hicimos cambio en los modelos)
3: DELETE MODE (borra todos los datos de la base y vuelve a crear los modelos)

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**.

En este carpeta creamos una carpeta App y luego 3 archivos (html, css, js)

Editamos los archivos.

Luego el comando

>http://localhost:1337/App/index.html

Si guardamos una imagen en la carpeta assets/images podemos acceder a ella desde index.html o en el URL 
>http://localhost:1337/App/fotos/sol.jpg



