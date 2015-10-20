/*
 Functional test for Firmata Rocomb orchestration.


*/


var Board = require("../lib/firmata").Board;
var board = new Board("COM7");

board.on("ready", function() {

  board.pinMode(13, board.MODES.OUTPUT);
 
  console.log("board ready!")
  var logData = function (data) {
    var strdata = "";
	for(var i = 0; i < data.length; i++) {
	    strdata += String.fromCharCode(data[i]);
		//console.log("response data: " + data[i]);
	}
	console.log("data is: " + data);
	//console.log("response data: " + strdata);
  };

  board.rocombTest(5, logData);

  console.log("after recombTest()");
});
