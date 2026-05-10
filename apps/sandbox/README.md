## AI Boguś Wszechwiedzący — demo awaryjne

To jest szybkie MVP do prezentacji uruchamiane w `apps/sandbox` z Expo Router.

### Co zostało odtworzone

- ekran Start (opis + CTA),
- ekran Czat AI (symulowane odpowiedzi demo),
- ekran Tryb Wszechwiedzący (gotowe scenariusze wypowiedzi),
- spójny motyw „fioletowy Saturn”.

### Szybki flow prezentacji (3–5 min)

1. Start: pokaż nazwę produktu i zakres działania MVP.
2. Czat AI: zadaj 1–2 pytania i pokaż odpowiedzi demo.
3. Tryb Wszechwiedzący: przejdź przez gotowe komunikaty „Problem → Rozwiązanie → Wartość → Next step”.
4. Zakończenie: podkreśl, że to działający prototyp gotowy do iteracji produkcyjnej.

### Uruchomienie lokalne (Android / Expo)

```bash
cd /home/runner/work/expo/expo/apps/sandbox
yarn start
```

Następnie uruchom przez Expo Go / dev build na Androidzie.

### Checklista publikacji do Google Play (po prezentacji)

- [ ] Ustalić finalny `applicationId` i nazwę paczki
- [ ] Wygenerować podpis release (keystore) i bezpiecznie go przechować
- [ ] Dodać politykę prywatności i URL
- [ ] Przygotować listing sklepu (opis, grafiki, ikona, zrzuty ekranu)
- [ ] Zbudować release AAB
- [ ] Przejść review w Play Console i opublikować
