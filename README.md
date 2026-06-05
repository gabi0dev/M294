# Game Gallery 

Eine React-App zum Verwalten einer eigenen Spielesammlung mit voller
CRUD-Funktion (anzeigen, hinzufügen, bearbeiten, löschen).

## Voraussetzungen
- Node.js Version 18 oder höher
- npm

## Installation

1. Abhängigkeiten installieren:

       npm install

## Starten

Es werden **zwei Terminals** benötigt:

1. **json-server** starten (die REST-API):

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
