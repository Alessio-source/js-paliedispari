var parola = prompt("Inserisci una parola!");

function palindroma(text) {
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
}

var palindromaVar = palindroma(parola);
