# CSS
---

### Materia: `Tecnologías Web con JavaScript`
### Tema : `CSS` 
### Fecha : `2016-11-02`
### Estudiante : `Santiago Fernando Lema Orquera`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="Cabecera"></a>
## Índice de contenidos


- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#Marco Teórico">Marco Teórico</a>
  * <a href="#CSS">CSS</a>
  * <a href="#Bootstrap">Bootstrap</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
- <a href="#Conclusiones y Recomendaciones">Conclusiones y Recomendaciones</a> 

<a name="Tema"></a>
## Tema
`Introducción a la Web`
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Objetivos"></a>
## Objetivos
- Desarrollar el conocimiento Web.
- Utilizar recursos CSS obtenidos del framework Bootstrap.
- Aprender a utilizar tags básicos de HTML.
- Aprender el uso básico de lenguaje HTML CSS.
- Crear una página HTML básica.
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="Marco Teórico"></a>
## Marco Teórico


<a name="CSS"></a>
### CSS

* CSS significa Cascading Style Sheets (Hojas de estilo en cascada).
* CSS describe cómo los elementos HTML deben mostrarse en pantalla, papel u otra media.
* CSS puede controlar el diseño de múltiples páginas web al mismo tiempo.
* CSS puede ser añadido a elementos HTML de 3 maneras: 
    * Inline: usando el atributo `style` en elementos HTML.
    * Internal: usando un elemento `<style>` en la sección `<head>`.
    * External: usando un archivo CSS externo.
    
* Inline CSS
    * Un CSS inline es usado para aplicar un estilo único a un solo elemento HTML.
    * Utiliza el atributo `style` de un elemento HTML.
    * Por ejemplo, podemos cambiar el color de texto del elemento `<h1>` a azul:
    
        `<h1 style="color:blue;">Este texto irá en azul</h1>`
        
* Internal CSS
    * Un internal CSS es usando para definir un estilo para una sola página HTML.
    * Es definido en la sección `<head>` de una página HTML dentro de elemento `<style>`.
    * Así:
    
```html
            <head>
                <style>
                    body {background-color: powderblue;}
                    h1   {color: blue;}
                    p    {color: red;} 
                </style>
            </head>
```

* External CSS
    * Un hoja de estilos externa es usada para definir el estilo de muchas páginas HTML.
    * No debe contener nada de código HTML y debe ser guardada con una extensión .css.
    * Para usar una hoja de estilos externa, se añada un link en la sección `/head>` de la página HTML.
    
```html
        <head>
            <link rel="stylesheet" href="styles.css">
        </head>
```

(Fuente: [W3Schools](http://www.w3schools.com/html/html_css.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Bootstrap"></a>
### Bootstrap

* Bootstrap es el framework HTML, CSS y JS más popular para desarrollar proyectos móbiles responsivos en la web.
* Gracias a Bootstrap escalar sitios web y aplicaciones  de teléfonos a tabletas y computadores de escritorio es fácil y eficiente.

(Fuente: [Bootstrap](http://getbootstrap.com/))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la práctica

* Para esta práctica, crearemos un archivo *index.html* y lo modificaremos varias veces.

1) Utilizaremos Internal CSS, para ella crearemos un tag `style` dentro `head`.


```html
    <head>
    <meta charset="UTF-8">
    <title>Aprendiendo CSS</title>
    <style>
        html{
            
            background-color: skyblue;    
        }
        
        body{
            
            background-color:aquamarine;
        }
        
    </style>
</head>
```
* Todo el documento HTML ahora tiene fondo azul cielo.

2) Ahora modificaremos el archivo para usar clases e Internal CSS.


```html

<head>
    <meta charset="UTF-8">
    <title>Aprendiendo CSS</title>
    <style>
       
        html{
            
            background-color: azure;
            
        }
        
        body{
            
            background-color:beige;
        }
        
        h1{
            background-color:#a2b42b;
        }
        
        p{
            background-color: dimgrey;
        }
        
        
        /* 
        CLASES
        
        .nombreClase
        {
        
        }
        */
        
        .nombreClaseRojo  {
             background-color:red;
        }
        
          .nombreClaseAzul  {
             background-color:blue;
        }
        
          .nombreClaseAmarillo  {
             background-color:yellow;
        }
    </style>
</head>

<body>

<h1>Hola</h1>
<p class="nombreClaseRojo">Párrafo rojo</p>
<h1>Amigos</h1>
<p class="nombreClaseAzul">Párrafo azul</p>
<h1>Amigos Poli</h1>
<p class="nombreClaseAmarillo">Párrafo Amarillo</p>

<p>Párrafo sin clase</p>

</body>

</html>

```
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/Clases.png?raw=true">
</p>

* Observamos que el documento HTML tiene en su estilo un fondo azure.
* El cuerpo es beige.
* Todos los h1 tienen un Internal CSS que los hace tener un fondo verde.
    * Por tanto, *Hola*, *Amigos*, y *Amigos Poli* tienen fondo verde.
* Todos los párrafos deberían tener un fondo gris. Sin embargo, las clases hacen que esto cambie.
* Todos los elementos que pertenezcan a la clase *.nombreClaseRojo* tendrán fondo rojo.
* Todos los elementos que pertenezcan a la clase *.nombreClaseAzul* tendrán fondo azul.
* Todos los elementos que pertenezcan a la clase *.nombreClaseAmarillo* tendrán fondo amarillo.
    * Es por esto que a pesar de que los párrafos debería mostrarse con fondo gris, tenemos párrafos con otros colores.
        * El *Párrafo rojo* pertenece a *nombreClaseRojo* y por eso su fondo es rojo.
        * El *Párrafo azul* pertenece a *nombreClaseAzul* y por eso su fondo es azul.
        * El *Párrafo amarillo* pertenece a *nombreClaseAmarillo* y por eso su fondo es amarillo.
    * El *Párrafo sin clase* no tiene clase y por tanto tendrá fondo gris debido al Internal CSS.
        
 3) No es recomendable mantener los estilos dentro del mismo archivo HTML, por tanto, vamos a crear un archivo llamado *estilos.css*.
 
 ```css
 html{
            
            background-color: azure;
            
        }
        
        body{
            
            background-color:beige;
        }
        
        h1{
            background-color:#a2b42b;
        }
        
        p{
            background-color: dimgrey;
        }
        
        /*    POR ID
        */

        #parrafoFucsia
        {
              background-color:deeppink;
        }
        
        #cualquiera
        {
               background-color:gray;
        }

 ```
 * Observamos que hemos añadido otra forma de manejar los estilos, por ID.
    * Todos los elementos cuyo ID sea *parrafoFucsia* tendrán fondo fucsia.
    * Todos los elementos con ID *cualquiera* tendrán fondo gris.
    
* Para poder enlazar el documento HTML al CSS debemos añadir un link en el tag `head`.

 ```html
<head>
    <meta charset="UTF-8">
    <title>Aprendiendo CSS</title>
    <link rel="stylesheet" href="estilos.css">
</head>
 ```
 * En este caso, el documento se encuentra dentro de la misma carpeta.
 * Si queremos acceder a carpetas más internas, simplemente usamos el signo `/`.
    * Carpeta/archivo.css
    * Carpeta/OtraCarpeta/archivo.css
    * No es posible acceder a carpetas externas.
 * Es importante tomar en cuenta que los estilos que tome el documento HTML seguirán el método cascada.
    * El último .css será el que sobrescriba, de ser el caso, los estilos pertinentes.
    
```html
<body>

    <h1>Hola</h1>
    <p class="nombreClaseRojo">Párrafo rojo</p>
    <h1 class="nombreClaseAmarillo">Amigos</h1>
    <p class="nombreClaseAzul">Párrafo azul</p>
    <h1>Amigos Poli</h1>
    <p id="parrafoFucsia" class="nombreClaseAmarillo">Párrafo Amarillo</p>
    <p>Párrafo sin clase</p>

</body>
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/ID.png?raw=true">
</p>

* *Hola* y *Amigos Poli* siguen teniendo fondo verde.
* Sin embargo, *Amigos* pertenece a *nombreClaseAmarillo* y por tanto su fondo es amarillo.
* *Párrafo rojo* y *Párrafo azul* mantienen sus colores originales.
* Pero ahora observamos que *Párrafo amarillo* tiene fondo fucsia.
    * Esto se debe a que su ID es *parrafoFucsia* y este tiene prioridad sobre su clase.
* *Párrafo sin clase* sigue siendo gris debido al Internal CSS.

4) Ahora vamos a utilizar un External CSS provisto por Bootstrap.

```html
<head>
    <meta charset="UTF-8">
    <title>Aprendiendo CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Referenciar archivos de estilo-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  
</head>
```

5) Ahora usaremos el tag `<div>`para definir divisiones o secciones en un documento HTML.

```html
<body>

    <h1>Hola</h1>
    <!--    .container-->
    <div class="container" style="background-color:yellow;">

        <!--    .row*3    -->

        <div class="row" style="background-color:green;">
            <h1>Fila 1</h1>

        </div>
        <div class="row" style="background-color:blue;">
            <h1>Fila 2</h1>

        </div>
        <div class="row" style="background-color:red;">
            <h1>Fila 3</h1>
            
        </div>

     <h1>Hola estoy dentro del DIV</h1>
    </div>
</body>
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/DIV.png?raw=true">
</p>


* Primero, observamos que todos los textos tienen un nuevo tipo y tamaño de letra, provistos por Bootstrap.
    * *Hola* es el primer elemento con este nuevo formato, pero no tiene asignado ningún color de fondo.
* Luego se crea un `div` cuya clase es `container` y cuyo fondo será amarrillo.
* Dentro de este contenedor tenemos 3 `div` que pertenecen a la clase `row`.
    * Estas filas deberían tener fondo amarillo pero debido al diseño cascada, cada una tendrá distintos fondos.
        * La primera fila (row) tiene fondo verde.
        * La segunda fila tiene fondo azul.
        * La tercer fila tiene fondo rojo.
* Finalmente *Hola estoy dentro del DIV tendrá fondo amarillo porque pertenece al `container` con este estilo.

6) En cada una de las filas podemos crear columnas dinámicas cuyo ancho sume 12.
* Dependiendo del tipo de columna estas se colocaran de arriba hacia abajo tomando en cuenta el ancho de la página.

```html
 <div class="row" style="background-color:green;">
            
            
<!--            .col-md-4*3>h2 Emmet-->

            <h1>Fila 1</h1>
            <div class="col-md-4">
                <h2>Columna md 4 - 1</h2>
            </div>
            <div class="col-md-4">
                <h2>Columna md 4 - 2</h2>
            </div>
            <div class="col-md-4">
                <h2>Columna md 4 - 3</h2>
            </div>
            

        </div>
```

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/Columnas.png?raw=true">
</p>

* En la fila 1 tenemos 3 columnas cuyo ancho es 4 y por tanto suman 12.
* La clase a la que pertenecen es `col-md-4`.
    * Columnas de tamaño medio y ancho 4.
    
    
* Al reducir el ancho de la página, observamos como las columnas cambian de posición.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/NuevasColumnas.png?raw=true">
</p>

7) Si deseamos que las filas y columnas tengan bordes podemos hacer uso del tag `style` y crear una clase `.borde` en donde indiquemos que deseamos un borde de color negro sólido y de 2 pixeles de ancho.

```html
 <style>
        .borde {
            border: black solid 2px;
        }
    </style>
```
8) Finalmente, utilizamos columnas de distintos ancho y tamaño para observar cómo se comportan al disminuir el ancho de la página.

```html
<h1>Fila 1</h1>

            <!--            md en 990 pixeles se hace pequeño-->
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 1</h2>
            </div>
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 2</h2>
            </div>
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 3</h2>
            </div>
```
* En la fila 1, lo único que se añadido es un borde a cada una de las columnas.
* Las columnas `md` cambian de posición cuando el ancho es de 990 pixeles.

```html
        </div>
        <div class="row" style="background-color:purple;">
            <h1>Fila 2</h1>

            <!--            .col-sm-3.borde*4>h3 Emmet-->
            <!--            sm en 770 pixeles se hace pequeño-->

            <div class="col-sm-3 borde">
                <h3>CSM3 -1</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3 -2</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3 -3</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3 -4</h3>
            </div>
   </div>
```
* En la fila 2, tenemos 4 columnas de ancho 3 (3*4=12).
* Estas filas pertenecen a la clase `sm`.
* Las columnas `sm` cambian de posición cuando el ancho es de 770 pixeles.

```html
        <div class="row" style="background-color:red;">

            <h1>Fila3</h1>

            <!--          .col-lg-6.borde*2>h3 EMMET -->

            <div class="col-lg-6 borde">
                <h3>CLG6 - 1</h3>
            </div>
            <div class="col-lg-6 borde">
                <h3>CLG6 - 2</h3>
            </div>

        </div>

```
* En la fila 3, tenemos 2 columnas de ancho 6 (2*6=12).
* Estas filas pertenecen a la clase `lg`.
* Las columnas `lg` cambian de posición cuando el ancho es de 1200 pixeles.

```html
        <!--      .row>.col-xs-2.borde+.col-xs-5.borde*2-->
        <div class="row">

            <h1>Fila4</h1>
            <div class="col-xs-2 borde">
                <h2>CXS2 - 1</h2>
            </div>
            <div class="col-xs-5 borde">
                <h2>CXS5 - 2</h2>
            </div>
            <div class="col-xs-5 borde">
                <H2>CXS5 - 3</H2>
            </div>
        </div>

```
* En la fila 4, tenemos una columna de ancho 2 y dos columnas de ancho 5 (2+5*2=12).
* Estas filas pertenecen a la clase `xs`.
* Las columnas `xs` no cambian de posición

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/XS.png?raw=true">
</p>

* Si modificamos el tamaño de la página, observamos los cambios de acuerdo al caso.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/XS2.png?raw=true">
</p>

* Este archivo HTML está disponible en [Archivo HTML](http://getbootstrap.com/)

<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre HTML y CSS.
* Se aprendió a utilizar CSS para mejorar la apariencia de las páginas Web HTML.
* Se aprendió a utilizar CSS almacenados en línea para obtener formatos ya predefinidos.
* Se aprendió a crear hojas de estilo .css y referenciarlas desde un archivo HTML.
* Se recomienda separar los archivos HTML y los archivos CSS para un mejor manejo de la página web que se está desarrollando.
* Se recomienda utilizar colores que faciliten la lectura de nuestras páginas web.

<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)
