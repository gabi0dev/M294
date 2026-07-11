# gamesbackend

REST-API (Spring Boot + PostgreSQL) zur M294 Game Gallery. CRUD für Spiele mit Bewertungen (1:n).

## Voraussetzungen
- JDK 21
- Docker Desktop
- IntelliJ IDEA

## Starten
1. Datenbank starten:

       docker-compose up -d

2. Projekt in IntelliJ öffnen (`pom.xml` auswählen).
3. `GamesbackendApplication` starten (grüner Play-Button).

API: `http://localhost:8080/api/games` — beim ersten Start legt der Seeder 3 Beispiel-Spiele an.

## Endpoints
| Methode | Pfad | Zweck |
|---------|------|-------|
| GET | `/api/games` | Alle Spiele |
| GET | `/api/games/{id}` | Ein Spiel |
| POST | `/api/games` | Spiel anlegen |
| PUT | `/api/games/{id}` | Spiel ändern |
| DELETE | `/api/games/{id}` | Spiel löschen |

## Tests
Rechtsklick auf `src/test/java` → **Run All Tests** (Docker muss laufen).

## Stoppen
    docker-compose down       # Daten bleiben erhalten
    docker-compose down -v    # Daten ebenfalls löschen

## Dokumentation
Vollständige Doku: `M295_LB_Dokumentation.pdf`
