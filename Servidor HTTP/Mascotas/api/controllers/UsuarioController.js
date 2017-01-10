/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//Se accede así: /Usuario/crearUsuario

module.exports = {

    crearUsuario: function (req, res) {

        //Guardando todos los parámetros en la variable parámetros

        var parametros = req.allParams();

        console.log(parametros);
        
        if(req.method=='POST')
{
        if (parametros.nombres && parametros.apellidos)

        {
            //creo el usuario

            Usuario.create({
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            }).exec(function (err, usuarioCreado) {

                if (err) {
                    return res.serverError(err);
                }

                sails.log.info(usuarioCreado);
                return res.ok(usuarioCreado);
            });

        } else {
            // bad request
            return res.badRequest('Llene su nombre y apellido');

        }
}
        else{
            return res.badRequest('Método inválido');
        }
//        Usuario.create({
//            nombres: 'Pepe José',
//            apellidos: 'Icaza Rey',
//            correo: 'pepe.icaza@gmail.com'
//        }).exec(function (err, usuarioCreado) {
//
//
//
//
//            if (err) {
//                return res.serverError(err);
//            }
//
//            sails.log.info(usuarioCreado);
//            return res.ok(usuarioCreado);
//        });
    }

};