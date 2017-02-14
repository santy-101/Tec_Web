/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },
    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario');
    },
    error: function (req, res) {
        return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    listarUsuarios: function (req, res) {

        Usuario.find()
            .exec(function (errorIndefinido, usuariosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/ListarUsuarios"
                        }
                    });
                }

                res.view('vistas/Usuario/ListarUsuarios', {
                    usuarios: usuariosEncontrados
                });
            })
    },

    editarUsuario: function (req, res) {

        var parametros = req.allParams();

        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id

            }).exec(
                function (errorInesperado, UsuarioEncontrado) {
                    if (errorInesperado) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Error Inesperado",
                                rawError: errorInesperado,
                                url: "/ListarUsuarios"
                            }
                        });
                    }
                    
                    sails.log.info(UsuarioEncontrado);
                })



        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parámetro ID",
                    rawError: "Faltan Parámetros",
                    url: "/ListarUsuarios"
                }
            });
        }
        return res.view('vistas/Usuario/editarUsuario')
    }

};