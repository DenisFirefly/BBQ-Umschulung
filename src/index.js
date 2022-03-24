function suchfunktion() {
  // Das Eingabefeld, wo der Suchbegriff eingegeben wird, bereit stellen:
  const input = document.getElementById("suchfunktion");

  // Eine Nodelist (Liste) der Tabellenzeilen bereit stellen:
  const tr = document.getElementsByTagName("tr");

  // Schleife über alle Tabellenzeilen:
  // Die erste mit dem Index 0 wird dabei ausgeschlossen
  // weil es sich um den Kopf der Tabelle handelt
  for (let i = 1; i < tr.length; i++) {
    // Prüfen ob das HTML der Tabellenzeile den Suchbegriff enthält:
    if (tr[i].innerHTML.includes(input.value)) {
      // Suchbegriff gefunden: Die Zeile wird sichtbar gemacht:
      tr[i].style.display = "";
    } else {
      // Suchbegriff nicht gefunden: Die Zeile wird verborgen:
      tr[i].style.display = "none";
    }
  }
}
