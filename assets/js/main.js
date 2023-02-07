// Selektieren der HTML-Elemente

// Hier wird das "Form-Element" selektiert das die Usereingaben enthält
const form = document.querySelector("form")

// Hier wird das "Input-Text-Element" selektiert mit dem text fdas ver/entschlüsselt werden soll
const textInput = document.querySelector("#text") 

// Hier wird das "Input-Number-Element" selektiert wo der "Schlüssel" eingegeben werden soll
const keyInput = document.querySelector("#key")

// Hier wird das "Output-Element" selektiert wo das Ergebniss angezeigt werden soll
const output = document.querySelector("#output")

// EventListener wiord dem Form-Element "auferlegt" um die Button "aktivietät zu Überwachen"
form.addEventListener("submit", event => {

// Unterbindet das Standard-Verhalten der elemente (In unserem fall das Neuladen der Seite)
    event.preventDefault();  

// hier wird der vom User eingegebene Input "gelesen" (Text)
    const text = textInput.value; 

// hier wird der vom User eingegeben Schlüssel "gelesen"
// mit hilfe von "Number" wird der wert zu einer "Ganzen Zahl" konvertiert
    const key = Number(keyInput.value);

// Hier wird der wert der Radio-Button gelesen (which one is checked) -> Ver oder Entschjlüsseln!
    const operation = document.querySelector("input[name='operation']:checked").value;

    let result = "";

// Hier wird eine Schleife gestartet die für jedes Zeichen im Text ausgeführt wird
// Schleifen Var. -> i wird auf den wert 0 gesetzt
// bedingung dafür dass die for-schleife ausgeführt wird ist das i kleiner ist als die Länge des Textes
// i++ erhöht den wert von i jewals um 1 (Short Hand) --> Lang Hand Wäre i = i + 1 :) 
    for (let i = 0; i < text.length; i++) {

// Hier wird der ASCII wert des aktuellen Zeichens ermittelt 
        let charCode = text.charCodeAt(i);

// Hier kann man sehen wlcher Buchstabe welche nummer (wert) hat. (a ist zb 97...)
        console.log(charCode);

// Hier wird ermittelt um wieviel Zeichen der Wert "verschoben" wird.
// abhängig von der ausgewählten Operation -> Key: zb 3..
// das Alphapet hat 26 Buchstaben - den wert den der User im Key-Input-Fled eingegeben hat.. :)
        let shift = (operation === "encrypt") ? key : 26 - key;

// Hier wird ermittlet ob es sich um Klein oder Großbuchstaben handelt
    if (charCode >= 97 && charCode <= 122) {

// Kleinbuchstaben (a=97 / z=122)
        charCode = ((charCode - 97 + shift) % 26) + 97;

// Hier wird ermittlet ob es sich um Klein oder Großbuchstaben handelt
    } else if (charCode >= 65 && charCode <= 90) {

// Großbuchstaben (A=65 / Z=90)
        charCode = ((charCode - 65 + shift) % 26) + 65;
    }

// hier wird das ergebniss der Berechnung bz der for-schleife wiede4r in Text (String) umgewandelt -->
    result += String.fromCharCode(charCode);
    }

// --> um hier im HTML auszugebvn !
    output.textContent = result;
});

// --> https://www.w3schools.com/charsets/ref_html_ascii.asp
