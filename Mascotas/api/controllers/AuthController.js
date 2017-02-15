/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {

    login: function (req, res) {
        var parametros = req.allParams();

        if (parametros.correo && parametros.password) {

            Usuario.findOne({
                correo: parametros.correo

            }).exec(function (errorInesperado, UsuarioEncontrado)


                {
                    if (errorInesperado) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Error inesperado del serbidor ",
                                rawError: errorInesperado,
                                url: "/Login"
                            }
                        });
                    }

                    if (UsuarioEncontrado) {

                        Passwords.checkPassword({
                            passwordAttempt: parametros.password,
                            encryptedPassword: UsuarioEncontrado.password,
                        }).exec({
                            // An unexpected error occurred.
                            error: function (err) {
                                return res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Error inesperado",
                                        rawError: err,
                                        url: "/Login"
                                    }
                                });
                            },
                            // Password attempt does not match already-encrypted version
                            incorrect: function () {


                                return res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Ingrese su password correctamente",
                                        rawError: "Password Incorrecta",
                                        url: "/Login"
                                    }
                                });
                            },
                            // OK.
                            success: function () {
                                return res.ok("Credencial Segura")
                            },
                        });

                    } else {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "No se encontró al usuario ",
                                rawError: "No existe usuario",
                                url: "/Login"
                            }
                        });
                    }


                })

        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos su correo y password ",
                    rawError: "No envia Parámetros",
                    url: "/Login"
                }
            });
        }
    }
};