function aprimenu() {
    document.getElementById("tendina").style.width = "350px";
    document.getElementById("icona").style.display='none';
    document.getElementById("icona2").style.display='none';
    document.getElementById("icona3").style.display='none';
    document.getElementsByName('a').style.color = '#0cf1ad';
   }

      function chiudimenu() {
    document.getElementById("tendina").style.width = "0%";
    document.getElementById("icona").style.display='block';
    document.getElementById("icona2").style.display='block';
    document.getElementById("icona3").style.display='block';
   }