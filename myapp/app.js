var express = require('express')
var app = express()
var puerto = 6060;

var usuarios = [
    {
        id:1,
        nombre:'Pepe',
        cedula:'123456782'
    },
     {
        id:2,
        nombre:'Carlos',
        cedula:'123454782'
    },
     {
        id:3,
        nombre:'<Juan',
        cedula:'120456782'
    }

]


app.get('/Usuario/:idUsuario', function (req, res) {
  
    var idActual = req.params.idUsuario;
    for(var i=0, i<usuarios.length;i++)
        {
            if(idActual === usuarios[i].id)
                {
                    res.json(usuarios[i]);
                }
        }
    
    res.send('No existe el usuario');
})


app.get('/TecnologiasWeb', function (req, res) {
    res.send('con javascript!')
})

app.post('/TecnologiasWeb', function (req, res) {
    //request => req
    //response => res
    
    var parametros = req.params;
    
    console.log(parametros);
    
    
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
    
//    usuario.apellido = 'Lema'
//    usuario.mascotas = [];
//    usuario.casado = false;
//    
//    console.log('Lo que tengo en el REQUEST es: ');  
//    console.log(req);
//    console.log('Lo que tengo en el RESPONSE es: ');  
//    console.log(res);
//    
//    console.log('Cabeceras del REQUEST ');  
//    console.log(req.headers);
//   
//    console.log('Cabeceras del RESPONSE ');  
    
    
    res.append ('token','1234');
    
    console.log(res.headers);
    
    

    res.json(usuario);
})

app.listen(puerto, function () {
console.log('Example app listening on port ' +puerto)
})

