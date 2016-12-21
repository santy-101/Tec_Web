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


En pipeline.js en la carpeta tasks modificamos el código

>var cssFilesToInject = [
>//  'styles/**/*.css'
>    'styles/estilo.css'
>];

esto hace que solo lea del primer archivo css de la carpeta styles.

En homepage.ejs de views podemos modicar la pagina de inicio.

Tambien en views hay archivos de errores. Los podemos modificar a nuestro gusto.

En config podemos modificar las rutas.

config y luego routes.js

Para generar controladores se utiliza :

> sails generate controller nombreControlador

este controlador se crea en api/controllers

> http://localhost:1337/Saludo/hora


## Generar Modelos en Sailsjs

> sails generate model nombreModelo

model Administrador


## Generar APIs en Sailsjs

> sails generate api nombreAPI

api Usuario

Un api es la fusión de un controlador y un modelo.

((--save para que se instale en un paquete json 
 npm install --save nodemailer))
 
 ## Migracion tipo
 
 en el archivo models.js de config se puede definir la estrategia descomentando una líenea
 
 ## Modelo usuario
 
 crear 
 
 URL:
 
 http://localhost:1337/Usuario
 
 Metodo HTTP: POST
 
 Datos
 
 :
```javascript 
{  
 nombre: 'Santiago',
 apellido: 'Lema'
 correo: 'santiago.lema01@epn.edu.ec'
 }
 ```
 con postman podemos agregar usuarios 
