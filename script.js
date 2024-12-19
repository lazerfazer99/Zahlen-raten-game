// Zufallszahl einmalig erzeugen und speichern
let randomNumber = Math.floor(Math.random() * 101); 

// Zufallszahl im HTML anzeigen
document.getElementById("random").innerHTML = randomNumber;

function Speichern() {
  const value = parseInt(numberfield.value, 10); // Wert als Ganzzahl parsen

  // Überprüfen, ob der Wert zwischen 0 und 100 liegt
  if (value >= 1 && value <= 100) {
    zeilen.innerHTML += '<li>' + value + '</li>'; // Zahl zur Liste hinzufügen

    // Vergleich mit der gespeicherten Zufallszahl
    if (value === randomNumber) {
      alert('Richtig! Die eingegebene Zahl entspricht der Zufallszahl.');
      document.getElementById("random").style.display = "block";
    }
    if (value < randomNumber) {
      alert('zu niedrig');
    }
    if (value > randomNumber) {
      alert('zu hoch');
    }
  } else {
    alert('Bitte eine Zahl zwischen 0 und 100 eingeben.'); // Warnung bei ungültigem Wert
  }

  numberfield.value = ''; // Eingabefeld zurücksetzen
}
