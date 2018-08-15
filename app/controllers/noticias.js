module.exports.noticias = function(application, req, res) {
  var connection = application.config.dbConnection();
  var noticiasModels = new application.app.models.NoticiasDAO(connection);
  noticiasModels.getNoticias(function(error, result) {
    res.render('noticias/noticias', { noticias : result});
  });
}
module.exports.noticia = function(application, req, res) {
  var connection = application.config.dbConnection();
  var noticiasModels = new application.app.models.NoticiasDAO(connection);
  var id_noticia = req.query;
  noticiasModels.getNoticia(id_noticia, function(error, result) {
    res.render('noticias/noticia', { noticia : result});
  });
}