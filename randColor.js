window.onload = function(){
  var randButton = document.getElementById("randButton");
  randButton.onclick = function(){
	  var hexNum = "0123456789ABCDEF";
	  function randGen(){
	    var randNum = Math.floor(Math.random() * hexNum.length);
		return randNum;
	  }
	  var randHex = hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen());
	  document.body.style = "background-color: #" + randHex + ";";
  };
};