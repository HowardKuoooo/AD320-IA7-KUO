function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    pug_html = pug_html + '<html><head><title>My Application</title><script src="jquery.js"></script></head><body><h2>Page</h2><p>Some content</p><div class="window"><a class="close" href="#">Close</a><h2>Awesome</h2><p>Now we can extend included blocks!</p></div></body></html>';
    return pug_html;
}