# Game Gallery 
 
Eine React-App zum Verwalten einer eigenen Spielesammlung.
 
## Voraussetzungen
- Git (zum Klonen des Repositorys)
- Node.js Version 18 oder höher
- npm (Note: Falls npm probleme verursacht wie "running scripts is disabled on this system" das liegt an der Execution Policy von PowerShell, die die Ausführung von Skripten blockiert. bitte diesen link folgen https://shorturl.at/flca6)
## Installation
 
1. Repository klonen und in den Projektordner wechseln:
       git clone <REPO-URL>
       cd game-gallery
 
2. Abhängigkeiten installieren:
       npm install
 
## Starten
 
Es werden **zwei Terminals** benötigt:
 
1. **json-server** starten:
       npm run server
 
   Läuft auf http://localhost:3001
2. In einem **zweiten Terminal** das Frontend starten:
       npm run dev
 
   Läuft auf http://localhost:5173 – im Browser öffnen.
## Tests ausführen
 
       npm test
 
## Projektstruktur
 
    src/
      api/          REST-Aufrufe an den json-server 
      components/   Wiederverwendbare Bausteine (Navbar, Karte, Formular)
      pages/        Die einzelnen Seiten 
      utils/        Hilfsfunktion zur Validierung
    db.json         Datenbank des json-servers


    ## Backend (M295)

Das Backend liegt im Ordner [`backend/`](backend/) und ist ein eigenständiges
Spring-Boot-Projekt … Details: siehe backend/README.md.
