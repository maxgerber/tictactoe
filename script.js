window.addEventListener("DOMContentLoaded", function() {
  var ticTT = [ " "," "," "," "," "," "," "," "," " ],
      td = document.getElementsByTagName("td"),
      i = 0;

  function screenify() {
    for ( ; i < ticTT.length; i++ ) {
      document.getElementsByTagName("td")[i].innerHTML = ticTT[i];
    }
  }

  
  screenify();
});
