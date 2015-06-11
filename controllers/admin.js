module.exports = function(){

  return {
    index: ArticleIndex,
    article_get: ArticleGet
  };

  function ArticleIndex(req, res, next) {
    res.render('index', { title: 'Admin Index' });
  }

  function ArticleGet(req, res, next) {
    res.render('index', { title: 'Dashboard' });
  }
};
