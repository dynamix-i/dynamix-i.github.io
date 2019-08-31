var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', '9394');
var mystr = mykey.update('ivan', 'utf8', 'hex')
mystr += mykey.final('hex');

var cipher = mystr;



var mykey = crypto.createDecipher('aes-128-cbc', '9394');
var mystr = mykey.update(cipher, 'hex', 'utf8')
mystr += mykey.final('utf8');




console.log(mystr);

