/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    hola: function(req, res) {
        if(req.method=='GET'){
            res.json({
                nombre:'hola get'
            });
        }
        else{
            
        
        if(req.method=='POST'){
            res.json({
                nombre:'hola post'
            });
        }
        else {
            res.json({
                nombre:'hola todos'
            })
        }
    }},

    adios: function (req, res) {
        res.send('adiós');
    },

    hora: function (req, res) {
        res.send('hora');
    },

};