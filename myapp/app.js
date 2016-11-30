var express = require('express')
var app = express()
var puerto = 6060;

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con javascript!')
})

app.post('/TecnologiasWeb', function (req, res) {
    //request => req
    //response => res
    
    
    var usuario = {
        nombre:'Santiago',
        cedula:'000000'
    
    }
//    
//    usuario = {
//        
//        nombre:usuario.nombre,
//        cedula:usuario.cedula,
//        apellido:''
//        
//    }
    
    usuario.apellido = 'Lema'
    usuario.mascotas = [];
    usuario.casado = false;
    
    console.log('Lo que tengo en el REQUEST es: ');  
    console.log(req);
    console.log('Lo que tengo en el RESPONSE es: ');  
    console.log(res);
    
    console.log('Cabeceras del REQUEST ');  
    console.log(req.headers);
   
    console.log('Cabeceras del RESPONSE ');  
    console.log(res.headers);
    
    
    res.json(usuario);
})

app.listen(puerto, function () {
console.log('Example app listening on port ' +puerto)
})

