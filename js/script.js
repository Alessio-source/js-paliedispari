
function palindroma() {

  for (var y = 0; y < 1; y++) {
    var parola = prompt("Inserisci una parola!");

    if (!(parola == "")) {
      var parolaReverse = parola.split("").reverse().join("");
      var palindromaElement = document.getElementById("palindromaElement");
      var messaggio = "";

      if (parola == parolaReverse) {
        messaggio = "La parola è palindroma!";
        palindromaElement.style.color = "green";
      } else {
        messaggio = "La parola non è palindroma!";
        palindromaElement.style.color = "red";
      }

      palindromaElement.innerHTML = messaggio;
    } else {
      alert("La parola inserita non è valida riprova!");
      y--;
    }
  }

  return null;
}

var palindromaVar = palindroma();

// pari o dispari

function pariODispari() {

  for (var i = 0; i < 1; i++) {

    var choose = prompt("Scegli tra pari o dispari!");
    var userChoose = choose.toLowerCase();

    if (userChoose == "pari" || userChoose == "dispari") {

      for (var z = 0; z < 1; z++) {
        var numberUser = parseInt(prompt("Inserisci un numero da 1 a 5"));

        if (!(isNaN(numberUser)) && numberUser >= 1 && numberUser <= 5) {
          var numberPC = Math.floor(Math.random() * 5) + 1;
          var number = numberPC + numberUser;
          var isPar = false;

          var chooseElement = document.getElementById("scelta");
          var numberUserElement = document.getElementById("numeroUser");
          var numberPcElement = document.getElementById("numeroPc");
          var sommaElement = document.getElementById("somma");
          var numberElement = document.getElementById("numberElement");

          var messaggio = "";

          if (number %2 == 0) {
            isPar = true;
          } else {
            isPar = false;
          }

          if (userChoose == "pari" && isPar == true || userChoose == "dispari" && isPar == false ) {
            messaggio = "Hai vinto!"
            numberElement.style.color = "green";
          } else {
            messaggio = "Hai perso!";
            numberElement.style.color = "red";
          }

          chooseElement.innerHTML = "Scelta: " + choose;
          numberUserElement.innerHTML = "Numero utente: " + numberUser;
          numberPcElement.innerHTML = "Numero pc: " + numberPC;
          sommaElement.innerHTML = "Somma: " + number;
          numberElement.innerHTML = messaggio;
        } else {
          alert("Il numero inserito non è valido riprova!");
          z--;
        }
      }
    } else {
      alert("Il valore inserito non è valido riprova!");
      i--;
    }

  }

  return null;
}

var pariODispariVar = pariODispari();
