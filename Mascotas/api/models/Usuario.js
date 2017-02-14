/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Passwords = require('machinepack-passwords');

module.exports = {

    attributes: {
        nombres: {
            type: 'string',
            minLength: 5,
            required: true
        },
        apellidos: {
            type: 'string',
            minLength: 4,
            required: true
        },
        correo: {
            type: 'string',
            email: true,
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            defaultsTo: '123456'
        }
    },


    beforeCreate: function (values, cb) {
        sails.log.info(values);
        //cb (123) //Error
        //cb() //OK

        Passwords.encryptPassword({
            password: values.password,
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                cb(err)
            },
            // OK.
            success: function (result) {
                values.password = result;
                cb();
            },
        });
    },

    beforeUpdate: function (values, cb) {

        if (values.password) {

            Passwords.encryptPassword({
                password: values.password,
            }).exec({
                // An unexpected error occurred.
                error: function (err) {
                    cb(err)
                },
                // OK.
                success: function (result) {
                    values.password = result;
                    cb();
                },
            });
        } else {
            cb();
        }
    },


};