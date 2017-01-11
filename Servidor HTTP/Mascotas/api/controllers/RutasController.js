/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    home: function(req,res)
    {
        //res.view (String: Nombre vista, Datos JSON)
        return res.view('vistas/home',{
            titulo: 'Inicio',
            numero:1,
            mauricio:
            {
                nombre:'Mauricio',
                apellido:'Larco'
            }
            
        })
    },
    
    crearUsuario: function (req,res){
         //res.view (String: Nombre vista, Datos JSON)
        return res.view('vistas/crearUsuario')
            
        }
        
        

	
};

