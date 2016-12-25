# SAILS.JS
---

### Materia: `Tecnologías Web con JavaScript`
### Tema: `SAILS.JS` 
### Fecha: `2016-12-21`
### Estudiante: `Santiago Fernando Lema Orquera`
### Profesor: `Tania Calle - Adrián Eguez`
### Número de informe: `5`

<a name="Cabecera"></a>
## Índice de contenidos


- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#Marco Teórico">Marco Teórico</a>
  * <a href="#Sails">Sails.js</a>
  * <a href="#Assets">Assets</a>
  * <a href="#Views">Views</a>
  * <a href="#Pipelines">Pipelines</a>
  * <a href="#Controllers">Controllers</a>

- <a href="#Desarrollo">Desarrollo de la Práctica</a>
- <a href="#Conclusiones y Recomendaciones">Conclusiones y Recomendaciones</a> 

<a name="Tema"></a>
## Tema
`Sails.js`
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Objetivos"></a>
## Objetivos
- Desarrollar el conocimiento Web.
- Utilizar Sails.js para desarrollar aplicaciones que utilizan JavaScript.
- Aprender sobre el patrón de arquitectura de software Modelo-Vista-Controlador.
- Utilizar comandos de Sails.js para crear proyectos, controladores, etc.
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="Marco Teórico"></a>
## Marco Teórico


<a name="Sails"></a>
### Sails.js
* Sails.js es el framework MVC más popular para Node.js.
* Está diseñado para construir aplicaciones Node.js prácticas y listas para producción en cuestión de semanas o meses.
* Las aplicaciones creadas están escritas completamente en JavaScript.
* Provee una capa de acceso a los datos sin importar la base de datos con la que se trabaje.
* Autogenera APIs REST.


(Fuente: [Sails.js](http://sailsjs.com/))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Assets"></a>
### Assets

* Assets se refiere a los archivos estáticos (js, css, imágenes, etc.) en el servidor que se desea que sean accesibles para los demás.
En Sails, estos archivos se ubican en la carpeta **assets/*.
* Cuando se levanta una aplicación, se añaden archivos a la carpeta **assets/**, o se modifican assets existentes, Sails procesa y sincroniza estos archivos a una carpeta oculta **.tmp/public/**.
    * Los contenidos de esta carpeta oculta son los que Sails muestra en tiempo de ejecución.

(Fuente: [Assets](http://sailsjs.com/documentation/concepts/assets))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Views"></a>
### Views

* En Sails, las vistas son plantillas que son compiladas en el servidor en páginas HTML. 
* En la mayoría de casos, las vistas son usadas como respuestas a una petición HTTP entrante.
* Por defecto, Sails está configurado para usar EJS (JS embebido) como su motor de vistas.
* Sails soporta todos los motores de vistas compatibles con Express.

(Fuente: [Views](http://sailsjs.com/documentation/concepts/views))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Pipelines"></a>
### Pipelines

* El pipeline de assets es el lugar donde se organizan los assets que serán inyectados en las vistas.
* Puede ser encontrado en el archivo **tasks.pipeline.js**
* El archivo **pipeline.js* en la aplicación Sails determina el orden en el que las plantillas propias y del cliente serán compiladas y enlazadas como `<script>`.

(Fuente: [Pipelines](http://sailsjs.com/documentation/anatomy/my-app/tasks/pipeline-js))
<br>
<a href="#Cabecera">A la cabecera</a>
<a name="Controllers"></a>

### Controllers

* Los controladores son los objetos principales en la aplicación Sails y son los responsables de responder peticiones de un navegador web, aplicación móvil u otro sistema capaz de comunicarse con un servidor.
* Generalmente actúan como un punto medio entre los modelos y las vistas. 
* Para muchas aplicaciones, los controladores contendrán la lógica del negocio del proyecto.

(Fuente: [Controllers](http://sailsjs.com/documentation/concepts/controllers))
<br>

<a href="#Cabecera">A la cabecera</a>


<a name="Desarrollo"></a>
## Desarrollo de la práctica


1) Instalar Sails.js. Para ellos accedemos abrimos la consola y usamos el comando:
> npm install -g sails

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/inst.png?raw=true">
</p>


2) Ahora usando la consola nos movemos al directorio donde queremos crear el proyecto Sails.

3) Una vez aquí, usamos el comando:
> sails new nombreProyecto

para crear el proyecto.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/new.png?raw=true">
</p>
 
4) Observamos que se ha creado una carpeta llamada *Proyecto* dentro de dicho directorio.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/carpeta.png?raw=true">
</p>
 
5) Ingresamos a la carpeta creada en la consola y levantamos el servidor con el comando:
> sails lift

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/lift.png?raw=true">
</p>

6) En el navegador ingresamos a la URL ```http://localhost:1337/``` y observamos la siguiente página.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/web.png?raw=true">
</p>

7) Dentro de la carpeta *assets* crearemos otra carpeta llamada *App* y dentro de esta 3 archivos:
* index.html
* estilos.css
* app.js

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/archivos.png?raw=true">
</p>

8) Modificaremos el contenido de dichos archivos.

#### index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
   <h1>Hola Mundo</h1>

    <script src="app.js"></script>
    
</body>
</html>
```
- Dentro de este documento estamos enlazando el archivo estilos.css y app.js.
- Además, mostramos un texto que dice *Hola Mundo*

#### estilos.css


```javascript
body{
    background-color:darkseagreen;
    color:aliceblue;
}
```

- Aquí, hacemos que el color de fondo sea azul verdoso y el color de texto sea celeste claro.

#### app.js
```javascript
alert("No es bueno usar alertas");
```
- Mostramos una alerta.

9) Vamos a la URL ```http://localhost:1337/App/index.html``` y observamos dicha página html con los estilos y código js creados anteriormente.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/html.png?raw=true">
</p>

10) Podemos crear carpeta dentro de **App** y guardar archivos para usarlos dentro de nuestra página. Por ejemplo, crear una carpeta para fotos.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/fotos.png?raw=true">
</p>

11) Podemos acceder a esta imagen con la URL
```http://localhost:1337/App/fotos/sol.jpg``` o agregarla a nuestro *index.html* con el tag ```<img>```.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/sol.png?raw=true">
</p>

12) Dentro del archivo **pipeline.js** que se encuentra dentro de la carpeta **tasks** observamos que archivos css se inyectan en el proyecto.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/inject.png?raw=true">
</p>

13) Para inyectar archivos css debemos crearlos dentro de la carpeta **styles** dentro de **assets**.


<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/copiar.png?raw=true">
</p>

14) Si dentro del código de **pipeline.js** enlazamos el archivo css que creamos anteriormente, observamos que la próxima vez que iniciamos la página de inicio, esta usa los estilos definidos por nosotros.


<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/nuevosestilos.png?raw=true">
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/nuevapag.png?raw=true">
</p>

* Si contamos con varios archivos css, estos se leerán de acuerdo al orden en el que los coloquemos en **pipeline.js**

15) Ahora vamos a trabajar con las vistas, estas se encuentran dentro de la carpeta *views*.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/views.png?raw=true">
</p>

* El formato de las vistas es *ejs*. 

16) El archivo **homepage.ejs** contiene lo que se muestra en la página de inicio de nuestro proyecto. En este caso lo modificaremos cambiado su código.


```javascript
<style>
    .rojo{
        
        background-color:red
    
    }
</style>
<div class ="rojo">

<h1>Aquí empieza el homepage</h1>


<h1>Mensaje</h1>


<h1>Aquí finaliza el homepage</h1>
</div>
```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/homepage.png?raw=true">
</p>

17) Por otro lado, los archivos **403, 404 y 500** indican que se mostrará en el navegador en caso de error.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/404.png?raw=true">
</p>

18) Ahora, vamos a crear nuevas vistas. Para ellos simplemente debemos crear más archivos dentro de la carpeta **views**.
* En este caso usaremos Quito y Guayaquil como vistas.

#### Quito
```javascript
<h1>Quito</h1>
```
#### Guayaquil

```javascript
<h1>Guayaquil</h1>
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/quito.png?raw=true">
</p>

19) Si queremos acceder a estas nuevas vistas se nos mostrará la página de error 404.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/error.png?raw=true">
</p>

20) Para poder acceder a estas nuevas vistas, debemos modificar el archivo **routes.js** dentro de la carpeta **config**.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/arcroutes.png?raw=true">
</p>

21) Modificamos el código:

```javascript
module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': {
    view: 'homepage'
  }
```

Para que se vea así:

```javascript
module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
    '/Quito': {
    view:'Quito'
  },
     '/Guayaquil': {
    view:'Guayaquil'
  }
    
```    
22) Debido a que modificamos archivos de configuración, debemos reiniciar sails. Ahora en el navegador, colocamos la URL: ```http://localhost:1337/Quito``` o ```http://localhost:1337/Guayaquil``` y observaremos las nuevas vistas.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/newvistas.png?raw=true">
</p>

23) También podemos modificar la vista **layout.ejs** para cambiar cómo se mostrará **homepage**.

```javascript
    <!--STYLES-->
    <link rel="stylesheet" href="/styles/estilos.css">
    <!--STYLES END-->
  </head>

  <body>
    <%- body %>



    <!--
```
    Se vuelve esto:
```javascript   
 <!--STYLES-->
    <link rel="stylesheet" href="/styles/estilos.css">
    <!--STYLES END-->
  </head>
  
  
  <body>
  <h1>Hola</h1>
  <ul>
      <li><a href="/Quito">Quito</a>
      </li>
      <li>
          <a href="/Guayaquil">Guayaquil</a>
      </li>
      
  </ul>
  <%- body %>
      <h1>Adiós</h1>
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/layout.png?raw=true">
</p>

* Creamos dos textos, uno que dice Hola y otro Adiós.
* Creamos dos enlaces como listas no ordenadas, uno a la vista Quito y otro a Guayaquil.

24) Observamos que el homepage se copia automáticamente dentro del body y por eso se muestra automáticamente.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/cod.png?raw=true">
</p>

25) Finalmente, vamos a crear un controlador, para ello usamos el comando:
> sails generate controller nombreControlador

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/comando.png?raw=true">
</p>

26) Observamos que se ha creado un archivo **SaludoController.js** dentro de la carpeta **/api/controllers**


<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/api.png?raw=true">
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/saludo.png?raw=true">
</p>

27) Modificamos el contenido.

```javascript
module.exports = {

    hola: function (req, res) {
        
        
        var parametros = req.allParams()

        if (req.method == 'GET') {
            
            res.json({
                    nombre: 'hola get',
                    para:parametros
                });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'hola post'
                });
            } else {
                res.json({
                    nombre: 'hola todos'
                });
            }

        }

    },
    adios: function (req, res) {
        res.send('Adios');
    },
    hora: function (req, res) {
        res.send('Hora');
    }
     

};
```

28) Usamos el navegador para verificar que los controladores funciones correctamente CON GET.

* Si usamos la URL ```http://localhost:1337/Saludo/hora``` nos devuelve *Hora*


<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/hora.png?raw=true">
</p>

* Con ```http://localhost:1337/Saludo/adios``` devuelve *Adios*

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/adios.png?raw=true">
</p>

* Por otro lado, ```http://localhost:1337/Saludo/hola``` devuelve un objeto json.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/holaget.png?raw=true">
</p>

* Con postman podemos ver el comportamiento al usar POST.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/10-Sails-01/Informe/Im%C3%A1genes/holapost.png?raw=true">
</p>

<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre Sails.js.
* Se aprendió a utilizar Sails.js y npm para crear un pequeño servidor web.
* Se aprendió sobre los assets, controladores, vistas y pipelines.
* Se aprendió como modificar algunos archivos para hacer que las páginas web se muestren de manera distinta.
* Se recomienda leer la documentación original de las herramientas utilizadas para entender de mejor manera su utilización.
* Es necesario mantener sencillo el código para que pueda ser entendido por otros.

<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)