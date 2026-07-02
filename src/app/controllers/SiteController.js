class SiteController {
  // GET /
  index(req, res) {
    res.render('home');
  }

  // GET /about
  about(req, res) {
    res.render('about');
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
