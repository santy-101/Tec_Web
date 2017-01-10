/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//Se accede así: /Usuario/crearUsuario

module.exports = {

    crearUsuario: function (req, res) {
        Usuario.create({
            nombres: 'Pepe José',
            apellidos: 'Icaza Rey',
            correo: 'pepe.icaza@gmail.com'
        }).exec(function (err, usuarioCreado) {
            
            
            
            
            if (err) {
                return res.serverError(err);
            }

            sails.log('Finn\'s id is:', finn.id);
            return res.ok();
        });
    }

};