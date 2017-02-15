

module.exports = function(req, res, next) {

    var parametros = req.allParams();
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (parametros.id == req.sesion.id) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('Usted no puede editar la información de otros usuarios.');
};
