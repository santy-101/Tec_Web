# NPM
---

### Materia: `Tecnologías Web con JavaScript`
### Tema : `NPM` 
### Fecha : `2016-12-08`
### Estudiante : `Santiago Fernando Lema Orquera`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="Cabecera"></a>
## Índice de contenidos


- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#Marco Teórico">Marco Teórico</a>
  * <a href="#Node.js">Node</a>
  * <a href="#Npm">Npm</a>
  * <a href="#Express">Express</a>

- <a href="#Desarrollo">Desarrollo de la Práctica</a>
- <a href="#Conclusiones y Recomendaciones">Conclusiones y Recomendaciones</a> 

<a name="Tema"></a>
## Tema
`NPM`
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Objetivos"></a>
## Objetivos
- Desarrollar el conocimiento Web.
- Utilizar Node.js para desarrollar aplicaciones que utilizan JavaScript.
- Manejar npm para compartir y reutilizar código.
- Crear una aplicación web sencilla para manejo de usuarios.
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="Marco Teórico"></a>
## Marco Teórico


<a name="Node"></a>
### Node.js

* Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. 
* Usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. 
* El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

(Fuente: [Node.js](https://nodejs.org/es/))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Npm"></a>
### npm

* npm facilita a los desarrolladores de JavaScript compartir y reutilizar código, además de actualizar el mismo.
* Este código compartido es reutilizado por otros desarrolladores en sus propias aplcaciones para resolver problemsa particulares.
* Las partes de código reutilizable son llamados paquetes o módulos.
    * Un paquete es un directorio con uno o más archivo él, que además tiempo un archivo llamado *package.json* con metadatos sobre el paquete.
* Una aplicación típica, como un sitio web, dependerá de decenas o cientes de paquetes.

(Fuente: [npm](https://docs.npmjs.com/getting-started/what-is-npm))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Express"></a>
### Express

* Express en un framework de aplicación web de Node.js mínimo y flexible que prové un conjunto robuto de características para aplicaciones web y móbile.
* Gracias a su variedad de métodos de utilidad HTTP y middleware, crear una API robusta es rápido y sencillo.
* Muchos frameworks populares están basados en Express.

(Fuente: [Express](http://expressjs.com/))
<br>
<a href="#Cabecera">A la cabecera</a>


<a name="Desarrollo"></a>
## Desarrollo de la práctica


1) Instalar Node.js. Para ellos accedemos al enlace [NodeJS](https://nodejs.org/es/) y hacemos clic en el botón mostrado.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/InsNode.png?raw=true">
</p>

2) Abrimos la consola (cmd) y ejecutamos el comando `node`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/cmd.png?raw=true">
</p>

3) Ahora podemos utilizar código JS.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/js.png?raw=true">
</p>

4) Salimos con *control+c* dos veces.

5) Nos movemos a la carpeta donde deseamos crear un paquete json y escribimos `npm init` para crearlo.

6) Llenamos la información que se nos pide y al final aceptamos con *yes*.
* Es importante tomar en cuenta que el campo *main* debe ser llenado como *app.js*.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/paquete.png?raw=true">
</p>

7) Observamos que se ha creado un paquete JSON en nuestro computador. Si lo abrimos se muestra la información llenada anteriormente.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/carpeta.png?raw=true">
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/cod.png?raw=true">
</p>

8)  Procemos a crear un archivo llamado app.js (recordar que el campo main debía tener este nombre) con el siguiente código:


```javascript
var num1 = 1;
var num2 = 2;

var resultado = num1 + num2;

console.log(resultado);
```

9) Para ejecutarlo escribimos *nodo nombreArchivo*. En este caso *node app.js*
* Observamos que devuelve 3 (suma de num1 y num2).

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/3.png?raw=true">
</p>

10) Para subir paquetes al internet debemos crear una cuenta en npm. Para ello vamos al enlace [Crear cuenta npm](https://www.npmjs.com/signup) y llenamos los campos pertinentes.

11) Ahora iniciamos sesión con esta cuenta. Usamos el comando `npm login` y llenamos los campos.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/cuenta.png?raw=true">
</p>

12) Podemos publicar el paquete con el comando `npm publish`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/publish.png?raw=true">
</p>

13) En la página web, observamos que, efectivamente, el paquete ha sido publicado.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/paqonline.png?raw=true">
</p>

14) Para descargar un paquete usamos `npm i -g nombrepaquete`.
* Esta es una instalación global
* El paquete se instalará en la carpeta mostrada en consola.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/desc.png?raw=true">
</p>

14) Si queremos que el paquete se descargue en una carpeta que nosotros deseamos, usamos `npm i nombrepaquete`.
* Debemos movernos primero a dicha carpeta.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/descarga2.png?raw=true">
</p>

15) Observamos que efectivamente, el paquete se ha descargado.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/nuevopaq.png?raw=true">
</p>

16) Si se desea eliminar un paquete usamos `npm uninstall nombrepaquete`.

17) Ahora, vamos a importar un paquete. Para ellos vamos a modificar el código del segundo archivo *app.js*.

```javascript
module.exports = {
    imprimirSuma1y2 : imprimirSuma1y2;
    
}

function imprimirSuma1y2() {
    var num1 = 1;
    var num2 = 2;

    var resultado = num1 + num2;

    console.log(resultado);

}
```
* Se ha creado una función *imprimirSuma1y2* que suma 1 y 2.
* *module.exports* nos va a permitir importar esta función.

18) Ahora vamos a crear otro archivo *app.js* en la misma carpeta donde se encuentra *node_modules*.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/modules.png?raw=true">
</p>

19) Este archivo tendrá el siguiente código:

```javascript
var calculadora = require("santy");

console.log(calculadora.imprimirSuma1y2());
```
* *require* llama al paquete que creamos y lo asigna a calculador
* Recordar que este paquete contenía la función *imprimirSuma1y2*.
* Mostramos el resultado de esa función en consola.

20) Si corremos este archivo obtendremos el mismo resultado.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/07-Node_js/Informe/Im%C3%A1genes/resultado.png?raw=true">
</p>

<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre Node.js y npm.
* Se aprendió a utilizar Node.js y npm para crear y publicar paquetes json.
* Se aprendió a utilizar Express para crear una pequeña aplicación web para manejo de usuarios.
* Se aprendió a utilizar Postman para verificar el comportamiento de la aplicación web.
* Se recomienda leer la documentación original de las herramientas utilizadas para entender de mejor manera su utilización.
* Es necesario mantener sencillo el código para que pueda ser entendido por otros.

<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)