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
* El archivo **pipeline.js* en la aplicación Sails determina el orden en el que las plantillas propias y del clientes serán compiladas y enlazadas como `<script>`.

(Fuente: [Pipelines](http://sailsjs.com/documentation/anatomy/my-app/tasks/pipeline-js))
<br>
<a href="#Cabecera">A la cabecera</a>
<a name="Controllers"></a>

### Controllers

* Los controladores son los objetos principales en la aplicación Sails y son los responsables de responder peticiones de un navegador web, aplicación móvil u otro sistema capaz de comunicarse con un servidor.
* Generalmente actuan como un punto medio entre los modelos y las vistas. 
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
```javascript
var num1 = 1;
var num2 = 2;

var resultado = num1 + num2;

console.log(resultado);
```


<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre Sails.js.
* Se aprendió a utilizar Sails.js y npm para crear un pequeño servidor web.
* Se aprendió sobre los assets, controladores, vistas y pipelines.
* Se recomienda leer la documentación original de las herramientas utilizadas para entender de mejor manera su utilización.
* Es necesario mantener sencillo el código para que pueda ser entendido por otros.

<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)