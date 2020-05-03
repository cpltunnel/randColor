window.onload = function(){
  var style = document.getElementById("style");
  var randButton = document.getElementById("randButton");
  randButton.onclick = function(){
	  var hexNum = "0123456789ABCDEF";
	  function randGen(){
	    var randNum = Math.floor(Math.random() * hexNum.length);
		return randNum;
	  }
	  var randHex = hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen()) + hexNum.charAt(randGen());
	  style.innerHTML = "body {background-color: #" + randHex + ";}"
  };
};
