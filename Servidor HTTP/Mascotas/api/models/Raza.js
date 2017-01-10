/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      
      nombre:{
          type:'string',
          enum:['Bulldog','Chihuahua','Pitbull'],
          required:true
          
      },
      //Mascotas es el nombre en plural del modelo a relacionarse
      mascotas: {
          //Collection *> nombre del modelo en sails
      collection: 'mascota',
          //Via; campo por el que vamos a relacionar FOREIGN KEY
      via: 'idRaza'
    }
  }
};

