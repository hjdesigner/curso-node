module.exports = function(app) {
  app.get('/noticias', function(req, res) {
    var connection = app.config.dbConnection();
    var noticiasModels = new app.app.models.NoticiasDAO(connection);
    noticiasModels.getNoticias(function(error, result) {
      res.render('noticias/noticias', { noticias : result});
    });    
  });
}