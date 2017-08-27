const moment = require('moment');

// var date = new Date();

// var date = moment();
// date.add(1, 'year');
// date.subtract(9, 'months');
//
// console.log(date.format('MMM Do, YYYY'));

// 10:39p

var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt= 1234
var date = new moment(createdAt);
console.log(date.format('MMM Do, YYYY h:mm a'));
