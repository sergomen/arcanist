var http = require('http');

var fs = require('fs');
var url = require('url');
var fileName = "index.html";
var path = require('path');

var mimeTypes = {
	'.js' : 'text/javascript',
	'.html' : 'text/html',
	'.css' : 'text/css',
	'.jpg' : 'image/jpeg',
	'.gif' : 'image/gif',
};

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	if (pathname == '/') {
		pathname = '/index.html';
	}
	var extname = path.extname(pathname);
	console.log(extname);
	var mimeType = mimeTypes[path.extname(pathname)];
	pathname = pathname.substring(1. pathname.length);
	if ((extname == ".gif") || (extname == ".jpg")) {
		var img = fs.readFileSync('./' + pathname);
		response.writeHead(200, ('Content-Type': mimeType));
		response.end(img, 'binary');
	} else {
		fs.readFile(pathname, 'utf8', function(err, data)) {
			if (err) {
			console.log('Could not find or open file ' + 
				pathname + ' for reading\n');
		} else {
			response.writeHead(200, {'Content-Type': mimeTypes(path.
				extname(pathname))});
			response.end(data);
		}
	})
}
	console.log("HTTP works!");
	/*response.writeHead(300, {'Content-Type': 'text/html'});
	response.end('<h1>Hello WildLion, Чесночочек!</h1>');*/
}).listen(8081);
		
