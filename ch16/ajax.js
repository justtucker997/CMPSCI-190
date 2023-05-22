function getXMLHttpRequest() {
	try {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e) {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	catch(e) {
		return new XMLHttpRequest();
	}
}
function callAjax() {
    var url = "clock.php";
    var myRandom = parseInt(Math.random() * 99999999);
    myRequest.open("GET", url + "?rand=" + myRandom, true);
    myRequest.onreadystatechange = responseAjax;
    myRequest.send(null);
}

function responseAjax() {
    if (myRequest.readyState == 4) {
        if (myRequest.status == 200) {
            var serverTimeString = myRequest.responseText;
            var serverTime = new Date(serverTimeString);
            var localTime = new Date();
            
            document.getElementById("clock").innerHTML = "Server: " + serverTime.toLocaleTimeString() + "<br />Local: " + localTime.toLocaleTimeString();
        } else {
            alert("An error has occurred: " + myRequest.statusText);
        }
    }
}

var myRequest = getXMLHttpRequest();
