function telltime() {
    var out = "";
    var now = new Date();
    out += "<br />Date: " + now.getDate();
    out += "<br />Month: " + now.getMonth();
    out += "<br />Year: " + now.getFullYear();
    out += "<br />Hours: " + now.getHours();
    out += "<br />Minutes: " + now.getMinutes();
    out += "<br />Seconds: " + now.getSeconds();
    var noscriptElement = document.getElementsByTagName("noscript")[0];
    noscriptElement.innerHTML += out;
  }
  
telltime();

window.onload = function() {
    document.getElementById("btn1").onclick= function() {location.reload();}
    telltime();
}
