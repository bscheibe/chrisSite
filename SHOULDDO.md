Newer Current Bugs
===================


Current Bugs
================
- [x] When you collapse the screen the menu becomes an 'x' instead of the triple bars. After clicking twice it becomes the triple bars. This is due to the fact that the collapsed class is not getting attached to the class after the screen is collapsed.
- [x] Only load the css needed by the select page? Or would it be better to just let it all load at once and have it cached? [Use only one to reduce http requests]
- [x] Update crossBrowser.less so it contains all the browser prefixes not just some of them
- [x] Go through and make CSS as efficient as possible while still being easy to change
- [x] Go through CSS at end and have one main file which has the css used by more than one page
- [x] Get rid of 'image-row' class on features page and use col-md instead?
- [x] Compress images for the web (Photoshop) such as those icons on the first page etc.
- [x] Don't use 'move-up' class for the button on pricing and TnC page 
- [x] Rename landing page class to something better
- [x] For filenames use only '_' or '-' but not both. Specify which one in the guide
- [x] Fix the top header issue (ie. figure out a better way then `header` classes)
- [x] What's with the error handling in app.js
- [x] Use bootstrap on the footer columns
- [x] Have webkit font-smoothing on the body?
- [x] Clean up image folder
- [x] Have colors stated at top [Not worth it with so few colors in the palette]
- [x] Add markup to blog for ease of use [should be solved via Bootstrap]
- [x] Wrap each page in it's own div if you haven't done so already
- [x] Change all border-radiuses to .border-radius()
- [x] Have a global css page imported first and a general one that is import last to reset styles (so you won't have to use !important)
- [x] Can you do a double layout for the blog (ie. reuse the original layout) [Not possible with EJS - had to simplify layout as much as possible]
- [ ] Get minify assets working
- [x] Uninstall flexslider if not working
- [x] Split up Meta and stylesheets
- [x] Put some assets in the gitignore so they do not included with the site. [Were not going to be using heroku for hosting so this shouldn' be an issues]

New Bugs
===============
- [ ] Get RWD Cleaned up for maps
- [x] Google map working on modal?
- [ ] Figure out why the form is being bound twice after adding the function (http://stackoverflow.com/questions/3775368/jquery-ajax-function-called-twice-with-same-data)
- [x] Change META data
- [x] Make pricing table use Bootstrap (no longer have pricing table)
- [x] Seperate out athletic tables into different partials
- [ ] Institue Ghost or that other easy to edit blog package
- [x] Have disqus hooked up for you and not Roadmunk
- [x] Optimize images again
- [ ] Send email to Dave asking if I can use his response
- [ ] Clean up Resume and CV
- [ ] Add inspect image package?
- [ ] Save a copy of the roadmunk website on it's own
- [ ] Page links break in header on other pages. (You can just hide them)
- [ ] Clean up Writing page
- [ ] Figure out weird cube movement
- [ ] Fix hook up of google analytics events
- [ ] Put up animations on design page