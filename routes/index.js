var express  = require('express');
var pageData = require('../data/index');
var blogData = require('../data/blog');
var router   = express.Router();

pageData.forEach( function (objData) {
  if (objData.content == "home") {
    router.get('/', function(req, res) {
      res.render(objData.content, objData);
    });
  }
  else {
    router.get('/' + objData.content, function(req, res) {
      res.render(objData.content, objData);
    });
  }
});

//Sitemap for Google and Yahoo search engines
router.get('/sitemap.xml', function(req, res) {
    res.sendfile('./sitemap.xml');
});

//Send resume
router.get('/resume', function(req, res) {
    res.sendfile('./public/pdfs/resume.pdf');
});

//Send C.V.
router.get('/cv', function(req, res) {
    res.sendfile('./public/pdfs/cv.pdf');
});

/* Create all the blog routes */
blogData.blogs.forEach(function (blog) {
  /* GET Blog page. */
  router.get('/blog/' + blog.url, function(req, res) {
    res.render('blog/' + blog.url, blog);
  });
});

router.get('*', function (req, res) {
  res.render('404',
  {
    title       : "Roadmunk 404",
    description : "Roadmunk 404 - Page Not Found. Product and software roadmapping at its best",
    author      : "Brent Scheibelhut",
    content     : "404"
  });
});

module.exports = router;
