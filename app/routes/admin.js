module.exports = function(app) {
  app.get('/formulario-inclusao-notica', function(req, res) {
    res.render('admin/form_add_noticia');
  });
  app.post('/noticias/salvar', function(req, res) {
    var noticia = req.body;
    var connection = app.config.dbConnection();
    var noticiasModels = app.app.models.noticiasModel;
    noticiasModels.salvarNoticia(noticia, connection,  function(error, result) {
      res.redirect('/noticias');
    });
  });
}