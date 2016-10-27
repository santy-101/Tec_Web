# INTRODUCCIÓN A LA WEB
---

### Materia: `Tecnologías Web con JavaScript`
### Tema : `Introducción a la Web` 
### Fecha : `2016-10-28`
### Estudiante : `Santiago Fernando Lema Orquera`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="Cabecera"></a>
## Índice de contenidos


- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#Marco Teórico">Marco Teórico</a>
  * <a href="#WWW">Definición de WWW</a>
  * <a href="#W3C">World Wide Web Consortium</a>
  * <a href="#HTML">Definición de HTML</a>
  * <a href="#Versiones HTML">Versiones de HTML</a>
  * <a href="#EstructuraHTML">Estructura de una página HTML</a>
  * <a href="#TagsHTML">Definición de tags de HTML</a>
  * <a href="#CSS">CSS</a>
  * <a href="#DefHTTP">Definición de HTTP</a>
  * <a href="#MetHTTP">Métodos HTTP</a>
  * <a href="#CodeHTTP">Status Code HTTP</a>

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
- Conocer herramientas de desarrolladores web como: Postman.
- Aprender a utilizar tags básicos de HTML.
- Aprender el uso básico de lenguaje HTML CSS.
- Crear una página HTML básica.
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="Marco Teórico"></a>
## Marco Teórico

<a name="WWW"></a>
### World Wide Web

En informática, la World Wide Web (WWW) o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. 
(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="W3C"></a>
### World Wide Web Consortium
El World Wide Web Consortium (W3C) es una comunidad internacional que desarrolla estándares que aseguran el crecimiento de la Web a largo plazo.
(Fuente: [W3C España](http://www.w3c.es/))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="HTML"></a>
### Definición HTML

HTML es el lenguaje de etiquetas estándar para creación de páginas Web. Sus siglas en inglés significan Hyper Text Markup Language (Lenguaje de Etiquetas  de Hipertexto). Los elementos de HTML son los bloques de construcción de las páginas HTML. 
(Fuente: [W3Schools](http://www.w3schools.com/html/html_intro.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Versiones HTML"></a>
### Versiones de HTML

Versión | Año
---|---
HTML|1991
HTML 2.0 |	1995
HTML 3.2 |	1997
HTML 4.01 |	1999
XHTML |	2000
HTML5	| 2014 
(Fuente: [W3Schools](http://www.w3schools.com/html/html_intro.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="EstructuraHTML"></a>
### Estructura de una página HTML

<p align="center">
<img src="https://programacionweb1.files.wordpress.com/2015/03/dibujo.jpg?raw=true" >
</p>

* La declaración `<!DOCTYPE html>` define que el documento será HTML5.
* El elemento `<html>` es el elemento raíz de una página HTML.
* El elemento `<head>` contiene meta información sobre el documento.
* El elemento `<title>` especifica un título para el documento.
* El elemento `<body>` contiene el contenido visible de la página.


(Fuente: [W3Schools](http://www.w3schools.com/html/html_intro.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="TagsHTML"></a>
### Tags de una página HTML

* Los tags HTML generalmente vienen en partes como `<p>` y `</p>`.
* El primer tag en un par es el tag de inicio, el segundo tag es el tag final.


Tag| Descripción
---|---
`<!DOCTYPE>` |	Define el tipo de documento
`<html>`	| Define un documento HTML
`<title>`|	Defune un título para el documento
`<body>`|	Define el cuerpo del documento
`<h1>` a `<h6>`|	Define títulos HTML
`<p>`|	Define un párrafo
`<br>`	|Inserta un salto de línea
`<img>` |	Define una imagen
`<a>` |	Define un hipervínculo
`<ul>` |	Define una lista no ordenada
`<ol>`	|Define una lista ordenada
`<li>`	| Define un elemento de la lista

(Fuente: [W3Schools](http://www.w3schools.com/tags/ref_byfunc.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="CSS"></a>
### CSS

* CSS significa Cascading Style Sheets (Hojas de estilo en cascada).
* CSS describe cómo los elementos HTML deben mostrarse en pantalla, papel u otra media.
* CSS puede controlar el diseño de múltiples páginas web al mismo tiempo.
* Un CSS inline es usado para aplicar un estilo único a un solo elemento HTML.
    * Utiliza el atributo `style` de un elemento HTML.
    * Por ejemplo, pordemos cambiar el color de texto del elemento `<h1>` a azul:
    
        `<h1 style="color:blue;">Este texto irá en azul</h1>`


(Fuente: [W3Schools](http://www.w3schools.com/html/html_css.asp))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="DefHTTP"></a>
### Definición de HTTP

* El Protocolo de Transferencia de Hipertexto (Hypertext Transfer Protocol) está diseñado para permitir comunicaciones entre clientes y servidores.
* HTTP trabaja como un protocolo de respuesta a peticiones entre un cliente y un servidor.
* Un navegador web puede ser el cliente, y una aplicación en un computador que almacena el sitio web puede ser el servidor.
(Fuente: [W3Schools](http://www.w3schools.com/TAGS/ref_httpmethods.asp))
<br>

<a href="#Cabecera">A la cabecera</a>

<a name="MetHTTP"></a>
### Métodos HTTP

Método | Descripción
---|---
GET | Solicita datos de un recurso especificado
POST |Envia datos a ser procesados a un recurso especificado
HEAD	| Igual que GET para retorna solo encabezados HTTP y no el cuerpo del documento
PUT	|Carga una representación a una URI especificada
DELETE|	Elimina el recurso especificado
OPTIONS|	Retorna los métodos HTTP que el servidor soporta
CONNECT|	Convierta la conexión de petición a un túnel TCP/IP transparenteConverts

(Fuente: [W3Schools](http://www.w3schools.com/TAGS/ref_httpmethods.asp))
<br>
<a href="#Cabecera">A la cabecera</a>


<a name="CodeHTTP"></a>
### Status Code HTTP

El primer dígito del código de respuesta específica una de las cinco clases de respuesta.

Código | Definición
---|---
1xx| Respuestas informativas
2xx| Peticiones correctas
3xx| Redirecciones
4xx| Errores del cliente
5xx| Errores de servidor

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP))
<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la práctica

1) Primero abrimos el navegador Google Chrome y nos dirigimos a la URL [www.google.com.ec](www.google.com.ec).

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Chrome.png?raw=true">
</p>

2) Luego, hacemos clic derecho y seleccionamos la pestaña `Inspeccionar`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Inspeccionar.png?raw=true" >
</p>

3) Escogemos la pestaña `Network` y observaremos variedad de información.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Recursos.png?raw=true " >
</p>

* Debajo de la columna Name encontraremos todos los recursos que deben cargarse para mostrar la página HTML.
    * Por ejemplo el recurso `photo.jpg` que es una imagen de mi cuenta de Google.
    
* La columna Status indica los Status Code HTTP de cada uno de los recursos.
    * El recurso `www.google.com` devolvió 200 (la petición ha sido exitosa).
    * El recurso `photo.jpg` devolvió 304 (no modificado).
    
* La columna Type muestra el tipo de cada uno de los recursos.
    * `photo.jpg` es una imagen jpeg.
    * `www.google.com.ec` es un documento.
    
* La columna Size muetra el tamaño de los recursos.
    * `photo.jpg` pesa 113 B.
    
* Time muestra el tiempo que tardaron los recursos en cargarse.
    * El tiempo está en ms.

* Finalmente en la barra inferior observamos:
    * 22 peticiones se realizaron para mostrar la página.
    * Se transfirieron 79.5 KB.
    * El proceso terminó en 6.54 segundos.
    
* Por otro lado, si hacemos clic en algún recurso (en este caso `www.google.com.ec`) se mostrará lo siguiente:

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Remote Address.png?raw=true" >
</p>

* La Request URL: `https://www.google.com.ec/`.
* El Método de Request: `GET`.
* El Status Code: 200.
* La dirección remota y el puerto mediante el cual se accede a este recurso: *[2607:f8b0:4008:80a::2003]:443*
    
3) Ahora, vamos a la pestaña `Elements`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Elements.png?raw=true" >
</p>

4) En la parte superior, se muestra el código HTML de la página.
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/HTML.png?raw=true" >
</p>

5) En la parte inferior, podemos observar los Estilos de esta página.
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Estilos.png?raw=true" >
</p>

* En este punto es posible modificar, por ejemplo, el color de fondo de algún elemento.
* Si añadimos `background-color: blue;` podremos mostrar algún elemento con un fondo azul.
    * También es posible utilizar notación de colores en HTML (#80BFFF para un tono de celeste).
    
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Color.png?raw=true" >
</p>

6) Ahora, descargamos e instalamos la extensión de Postman en Google Chrome.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Postman.png?raw=true" >
</p>

7) La extensión se ve de la siguiente manera.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Postman%202.png?raw=true" >
</p>

8) Junto a la pestaña `GET` escribimos alguna URL. En este caso `www.google.com` y luego hacemos clic en `Send`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/HTML%20Postman.png?raw=true" >
</p>

* Actualmente, nos encontramos en la pestaña `Body`.
* Observamos en la parte central derecha que el Status Code devuelto es 200 (la petición ha sido exitosa) y que se ha tardado 956 ms.
* Por otro lado, se observa el código HTML.

9) Ahora cambiamos a la pestaña `Headers`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Headers.png?raw=true" >
</p>

* La mayoría de estos headers nos son desconocidos pero existen algunos que podemos entender.
    * `content-type` indica que es un documento de texto HTML y que utiliza formato de codificación UTF-8.
    * `date` es la fecha y hora actual.
    * `status` muestra el Status Code.

10) Ahora cambiaremos la pestaña que dice `GET` por `POST`.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Post.png?raw=true" >
</p>

* Observamos que el Status Code es 405 - Método No Permitido y que se ha tardado 158 ms.

11) Finalmente procederemos a crear una sencilla página web en HTML. Para ellos crearemos un nuevo documento llamado `index` de tipo html.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Documento.png?raw=true" >
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/index.png?raw=true" >
</p>


12) El código de la misma está disponible en [Código HTML](https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/index.html).
* Para esta página se han utilizado los tags mostradas en el <a href="#Marco Teórico">Marco Teórico</a>.

---
### Explicación del código HTML

`<html lang="en" style="background-color:#3690a2;">` 
* Lenguaje de la página: inglés. 

* Color de fondo: #3690a2 (el azul que está a los bordes de la página).

---
`<meta charset="UTF-8">`
* Utilizamos codificación UTF-8.

---
`<title>Aprendiendo HTML</title>`
* El título de la página HTML es *Aprendiendo HTML*.

---
`<body style="background-color:#62b99c;">`

* El color de fondo del cuerpo es #62b99c (verde que ocupa casi toda la página).

---
`<h1>Caballeros del Zodiaco</h1>`

* Un encabezado grande que dice *Caballeros del Zodiaco*.

---

` <img src="https://static.betazeta.com/www.fayerwayer.com/up/2015/02/Armaduras-de-Caballeros-del-Zodiaco-en-tama%C3%B1o-real-llegar%C3%A1n-a-M%C3%A9xico-960x623.jpg" alt="Caballero dorado posando" ;>`

* Una imagen cuyo texto alternativo es *Caballero dorado posando*.

---
` <a href="https://es.wikipedia.org/wiki/Saint_Seiya" ; target="_blank">
        Caballeros del Zodiaco Wikipedia
    <img src="https://static.betazeta.com/www.fayerwayer.com/up/2015/02/Armaduras-de-Caballeros-del-Zodiaco-en-tama%C3%B1o-real-llegar%C3%A1n-a-M%C3%A9xico-960x623.jpg" alt="Caballero dorado posando"; >
    </a>` 

* Un enlace a Wikipedia al cual se accede haciendo clic en la imagen.

---
 `<p style="background-color:#97bcc3;">`
 
* Un párrafo con fondo gris.

---

`<ul>`

        <li>Saint Seiya</li>

        <li>Aioria</li>

        <li>Shiryu</li>

`</ul>`

* Una lista no ordenada (unordered list - ul) con tres elementos (list items - li).

---

`<ol>`

        <li>Saint Seiya</li>
        
       <li>Aioria</li>
       
       <li>Shiryu</li>
    
    </ol>
    
* Una lista ordenada (ordered list - ol) con tres elementos (list items - li).

---

`<h2>Cabecera menos grande</h2>`

`<h3>Cabecera 3</h3>`

`<h4>Cabecera 4</h4>`

`<h5>Cabecera 5</h5>`

`<h6>Cabecera 6</h6>`

* Cabeceras de distintos tamaños (h1 es la más grande y h6 es la más pequeña).

---
    
13) Iniciamos un servidor HTTP en nuestro máquina, para ellos nos dirigimos a la carpeta donde está index.html, presionamos `SHIFT` y hacemos clic derecho para seleccionar *Abrir ventana de comandos aquí*.

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/Comandos.png?raw=true" >
</p>

14) Ahora, escribimos los siguientes comandos

> npm install -g http-server

* -g hace que la instalación sea global.

> http-server -c10


15) Ahora en el navegador accedemos a nuestra página web mediante `localhost:8080 `. Los resultados son los siguientes:
<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/pag%201.png?raw=true" >
</p>

<p align="center">
<img src="https://github.com/santy-101/Tec_Web/blob/01-HTML/Informe/Im%C3%A1genes/pag%202.png?raw=true" >
</p>

<br>
<a href="#Cabecera">A la cabecera</a>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones
* Se aprendieron conocimientos básicos sobre HTML y HTTP.
* Se aprendió a utilizar Postman para observar cómo trabajan las páginas web cuando reciben peticiones.
* Se aprendió a utilizar el navegador para observar la estructura de las páginas web.
* Se aprendió a iniciar un servidor HTTP en Windows.
* Se aprendió a crear una pequeña página web utilizando tags de HTML.
* Se recomienda anotar los tópicos abarcados en la práctica para poder realizar el informe de mejor manera.
* Se recomienda tomar capturas para poder anexarlas al informe.
* Se recomienda realizar varios commits para observar cómo cambian los archivos.

<br>
<a href="#Cabecera">A la cabecera</a>

Autor: [Santiago Lema](https://github.com/santy-101)
