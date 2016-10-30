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
 
 ```html
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
 * Observamos que hemos añadido otra forma de manejar los estilos, POR ID
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
    
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/02-CSS/Informe/Im%C3%A1genes/ID.png?raw=true">
</p>

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
