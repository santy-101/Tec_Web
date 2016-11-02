# JavaScript
---

### Materia: `Tecnologías Web con JavaScript`
### Tema : `JavaScript` 
### Fecha : `2016-11-08`
### Estudiante : `Santiago Fernando Lema Orquera`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="Cabecera"></a>
## Índice de contenidos


- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#Marco Teórico">Marco Teórico</a>
  * <a href="#JavaScript">JavaScript</a>
  * <a href="#ECMAScript">ECMAScript</a>

- <a href="#Desarrollo">Desarrollo de la Práctica</a>
- <a href="#Conclusiones y Recomendaciones">Conclusiones y Recomendaciones</a> 

<a name="Tema"></a>
## Tema
`JavaScript`
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Objetivos"></a>
## Objetivos
- Desarrollar el conocimiento Web.
- Aprender a utilizar variables de JavaScript.
- Aprender a crear arreglos en JavaScript.
- Aprender a utilizar objetos en JavaScript.
- Crear funciones básicas en JavaScript.
- Utilizar la consola del navegador para observar los resultados de la programación en JavaScript.
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="Marco Teórico"></a>
## Marco Teórico


<a name="JavaScript"></a>
### JavaScript

* JavaScript (a veces abreviado como JS) es un lenguaje ligero e interpretado, orientado a objetos con  funciones de primera clase, más conocido como el lenguaje de script para páginas web, pero también usado en muchos entornos sin navegador.
* Es un lenguaje script multi-paradigma, basado en prototipos,  dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa.
* El estándar de JavaScript es ECMAScript. Desde el 2012, todos los navegadores modernos soportan completamente ECMAScript 5.1. Los navegadores más antiguos soportan por lo menos ECMAScript 3.


(Fuente: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="ECMAScript"></a>
### ECMAScript

* ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. 
* Actualmente está aceptado como el estándar ISO 16262.
* ECMAScript define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.
* Desde el lanzamiento en junio de 1997 del estándar ECMAScript 1, han existido las versiones 2, 3 y 5, que es la más usada actualmente (la 4 se abandonó). En junio de 2015 se cerró y publicó la versión ECMAScript 6.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/ECMAScript))
<br>
<a href="#Cabecera">A la cabecera</a>
<a name="Desarrollo"></a>
## Desarrollo de la práctica

* Para esta práctica, crearemos un archivo *index.html* y lo modificaremos varias veces.
* Todo código JS debe encontrarse entre los tags `<script> </script>`.

1) Primero, vamos a crear una ventana de alerta que se mostrará en el navegador y además un mensaje en consola.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
    alert('Hola');
    console.log('Hola desde la consola');
    </script>
</head>
<body>
    
</body>
</html>
```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Alerta.png?raw=true">
</p>

* `alert()` es una función que muestra el mensaje de alerta y recibe un parámetro que es el texto de la alerta.
* `console.log()` muestra en consola los parámetros que recibe.

2) Para observar la consola del navegador, hacemos clic derecho sobre el mismo, luego seleccionamos la pestaña *Inspeccionar* seguido de la pestaña *Console*.


<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Instrucciones.png?raw=true">
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Consola.png?raw=true">
</p>

3) Ahora, vamos a crear **variables** de JS.
* El formato para definir una variable es:

```javascript
    var nombreVarible = valorVariable ; 
```
* El siguiente código contiene la creación de variables de distintos tipos.

```javascript
        var texto = "Texto";
        console.log('Variable string');
        console.log(texto);

    
        var numero = 1;
        console.log('Variable entera');
        console.log(numero);

        
        var float = 1.223;
        console.log('Variable float');
        console.log(float);

      
        var booleanTrue = true;
        console.log('Variable booleanTrue');
        console.log(booleanTrue);


        var booleanFalse = false;
        console.log('Variable booleanFalse');
        console.log(booleanFalse);
        

        var varNull = null;
        console.log('Variable null');
        console.log(varNull);

      
        var varUndefined = undefined;
        console.log('Variable undefined');
        console.log(varUndefined);
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Variables.png?raw=true">
</p>

* Las variables string van entre comillas dobles o simples.
* Las variables enteras son números enteros.
* En las variables float, los decimales se separan con un punto.
* Las variables boolean pueden ser *true* o *false*.
* Las variables null son *null*.
* Las variables undefined son *undefined*.

4) En JS no es necesario hacer ningún tipo de *cast* para cambiar el tipo de una variable.

```javascript
        var textoNumero="2";
        console.log('Valor cuando es string');
        console.log(textoNumero);
        
        textoNumero=2;
        console.log('Valor cuando es número');
        console.log(textoNumero);
```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Cast.png?raw=true">
</p>

* *textoNumero* es de tipo String y es igual a 2 (string 2).
* Luego, se convierte en un entero igual a 2.
    * Se observa que el tipo se cambia automáticamente al realizar la nueva asignación.
    
5) Para utilizar **arreglos** en JS, se debe utilizar el siguiente formato:

```javascript
var nombreDelArreglo = [valor1, valor2,..., valorN ];
```
* El siguiente código contiene la creación de arreglos de distintos tipos.

```javascript
        var arregloString = ['Hola', '2', '5'];
        console.log(arregloString);
        
        var arregloNumeros= [1, 2, 3];
        console.log(arregloNumeros);
        
        var arregloFloat = [1.3, 2.15, 0.84];
        console.log(arregloFloat);
        
        var arregloBooleano = [false,true,true];
        console.log(arregloBooleano);
        
        var arregloNull = [null,null,null];
        console.log(arregloNull);
        
        var arregloUndefined= [undefined,undefined,undefined];
        console.log(arregloUndefined);
        
        var arregloTodo = ["Nombre", 123, 3.1416, true, false, undefined, null, "Apellido"];
        console.log(arregloTodo);
        
        console.log('Longitud de arregloTodo');
        console.log(arregloTodo.length);
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Arreglos.png?raw=true">
</p>

* Se observa que es posible crear arreglos cuyas variables sean de distintos tipos.
* Por otro lado, para acceder a la longitud de un arreglo se utiliza la propiedad *length*.

6) Para crear *objetos* se utiliza el siguiente formato:

```javascript

var nombreObjeto = { 
                'atributo1' : valorAtributo1 ,
                'atributo2' : valorAtributo2 
                ...

                    }
```
* A continuación, se muestra un código en el que se muestra la creación de objetos.

```javascript
            var santy = {
            'nombre': 'Santiago',
            'apellido': 'Lema',
            'edad': 21,
            'mascota': ['Perlita', 'Panchito'],
            'padres': [
                {
                    nombre: 'Roberto',
                    apellido: 'Lema'
                 },
                {
                    nombre: 'Cecilia',
                    apellido: 'Orquera'
                 }],


        }

        console.log('Acceder Nombre');
        console.log(santy.nombre);
        console.log('Acceder Apellido');
        console.log(santy.apellido);

        console.log('Acceder Padres');
        console.log(santy.padres);
```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Objetos.png?raw=true">
</p>

* Hay que tomar en cuenta que dentro de un objeto no solo podemos tener atributos, sino también vectores y otros objetos.
* *santy* tiene atributos: nombre, apellido y edad.
* *mascotas* que es un vector con dos elementos.
* *padres* que es un vector de otros objetos.
* Para acceder a cualquier elemento de un objeto, simplemente escribimos el nombre del objeto seguido de un punto y el nombre del elemento.
    * Por ejemplo, *santy.padres* accede a los padres de *santy*.

7) Cada uno de los objetos puede tener sus propias funciones, las cuales pueden ser llamadas posteriormente. El formato de una función es:
```javascript

    nombreFunción : function ( parámetros ) {

    return ___ ;

    }
```
8) Para llamar a una función: 
```javascript

    nombreObjeto.nombreFunción ( parámetros );
```

* A continuación, se muestran algunas funciones: 

```javascript
 getNombre: function () {
                return this.nombre;
            },
            
getApellido: function () {
                return this.apellido;
            },
            
setApellido: function (nuevoApellido) {
                this.apellido = nuevoApellido;
            }
```

* Estas son las respectivas llamadas: 

```javascript
console.log('getNombre');
console.log(santy.getNombre());
console.log('getApellido');
console.log(santy.getApellido());
console.log('setApellido');
santy.setApellido('Orquera');
console.log('Nuevo Apellido');
console.log(santy.getApellido());
 
```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/Imágenes/Funciones.png?raw=true">
</p>

* Se observan llamadas a *getNombre()* y *getApellido()* que devuelven el nombre y apellido, respectivamente.
* También se usa *setApellido()* que recibe un nuevo apellido como parámetro.

<br>
* Este archivo HTML está disponible en [Archivo HTML](https://github.com/santy-101/Tec_Web/blob/04-JS/Informe/index.html).

<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre JS y ECMAScript.
* Se aprendió a utilizar variables de distintos tipos en JS.
* Se aprendió a utilizar vectores con elementos de distintos tipos.
* Se aprendió a crear objetos con sus respectivas funciones.
* A pesar de que no es obligatorio, se recomienda utilizar `;` en favor de mantener el estándar.
* Se recomienda 


<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)