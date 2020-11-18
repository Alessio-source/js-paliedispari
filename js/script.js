// var parola = prompt("Inserisci una parola!");
//
// function palindroma(text) {
//   var parolaReverse = parola.split("").reverse().join("");
//   var palindromaElement = document.getElementById("palindromaElement");
//   var messaggio = "";
//
//   if (parola == parolaReverse) {
//     messaggio = "La parola è palindroma!";
//     palindromaElement.style.color = "green";
//   } else {
//     messaggio = "La parola non è palindroma!";
//     palindromaElement.style.color = "red";
//   }
//
//   palindromaElement.innerHTML = messaggio;
// }
//
// var palindromaVar = palindroma(parola);

// pari o dispari

var choose = prompt("Scegli tra pari o dispari!");
var numberUser = parseInt(prompt("Inserisci un numero da 1 a 5"));

function pariODispari(numberUser, parola) {
  var numberPC = Math.floor(Math.random() * 5) + 1;
  var number = numberPC + numberUser;
  var isPar = false;
  var numberElement = document.getElementById("numberElement");
  var userChoose = parola.toLowerCase();
  var messaggio = "";

  if (number %2 == 0) {
    isPar = true;
  } else {
    isPar = false;
  }

  if (userChoose == "pari" && isPar == true || userChoose == "dispari" && isPar == false ) {
    messaggio = "Hai vinto!"
  } else {
    messaggio = "Hai perso";
  }

  numberElement.innerHTML = messaggio;

}

var pariODispariVar = pariODispari(numberUser, choose);
