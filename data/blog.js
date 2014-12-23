var authorData = require('./authors');
var _          = require('lodash');
var S          = require('string');

var defaultBlog = {
	title       : "Default Title",	// The title of the blog post that will be display to the readers. This will also be converted to be used as the url of the blog post
	postImage   : "none", //The image you want to use in the http://roadmunk.com/blog/ meta page that holds all the posts. This can be the same as image or different.
	image       : "default", //The image you want to use in the top header.
	category    : "editorials", //The category of the blog post. Currently choose from ReleaseNotes, Startups & General. You can attach multiple just put a space in between them
	icon        : "star", //The icon you want to use on the main blog page. You can choose from any of the ones found here: http://getbootstrap.com/components/#glyphicons. All you need to do is add the name of the icon following `gylphicon-`
	bioOn       : true, //Whether you want the biography on or off at the bottom of the page
	date        : "May 4, 1994", //The date the blog post was published.
	description : "A blog post by Chris Rayment", //The META description of the blog post
	partial     : "A blog post by Chris Rayment", //The short partial on the main blog page describing the blog post
	url         : false, //The URL of the blog post. This is generated automatically.
	nextBlogURL : false, //The URL of the next blog post. This is generated automatically. 
	banner      : false, //Whether to use a banner at the end of you blog post
	bannerURL   : 'banner.png', //The default image for the blog banner
	content     : "blogPost" //What type of post this is. Used for some control flow 
};

var brentBlogPost = _.defaults(defaultBlog, { author : authorData.brent });

var blogData = module.exports = {

	categories : [
		"Updates",
		"Editorials",
		"Writing"
	],

	blogs : [
	
		//Don and his Dog
		/*_.defaults({
			title       : "The Stuck Man",
			postImage   : "/images/blog/the-stuck-man.jpg",
			image       : "/images/blog/the-stuck-man.jpg",
			icon        : "book",
			category    : "writing",
			date        : "October 14th, 2013",
			description : "A short story about a stuck man",
			partial     : "A short story about a stuck man"
		}, brentBlogPost),*/
	]
};
//Would be cool if you sorted by date, instead of the order they appeared

_.forEachRight(blogData.blogs, function(post, index) {
	post.url = S(post.title).decodeHTMLEntities().slugify().s;
	if (blogData.blogs[index+1]) {
		post.nextBlogURL = blogData.blogs[index+1].url;
	}
});

//Add the all category for the blog category
blogData.categories.unshift("All");