var express = require('express');
var fs = require('fs');

var app = express();

var puerto = 6060;

var usuarios = [
    {
        id:1,
        nombre:'Santiago',
        cedula:'123409182'
    },
    {
        id:2,
        nombre:'Fernando',
        cedula:'981237918'
    },
    {
        id:3,
        nombre:'Danny',
        cedula:'011283934'
    }
]

var contador=3;

//Para el path del archivo si no ponemos punto al inicio, estamos  buscando desde C: 
// A este se le conoce como path absoluto
// Al usar punto usamos path relativo

var quePasa ='';

quePasa='está por leer el archivo';
console.log(quePasa);

fs.readFile('./paginas/paginas.html',
            'utf8',
            function(error,archivoLeido) 
            {
            console.log(error);
           console.log(archivoLeido);
    
});

quePasa='terminó de leer el archivo';
console.log(quePasa);

//1er parámetro path, 2do codificación, 3ro función
