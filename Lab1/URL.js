var url = require('url');
var add = 'http://localhost:8080/index.html?year=2999&month=feb';
var q = url.parse(add,true);

console.log("Host: "+q.host);
console.log("Path: "+q.pathname);
console.log("Search: "+q.search);
