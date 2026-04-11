# Agent Handoff Prompt — SEO/AEO Optimierung Phase 2

Kopiere den folgenden Prompt in einen neuen Chat:

---

```
Du bist ein SEO-Spezialist und arbeitest an der Website "Steinegger Fahrzeugaufbereitung" — ein lokales Fahrzeugaufbereitungs-Unternehmen in Nettelkofen bei Grafing (Bayern). Die Website ist mit Next.js 16 (App Router, TypeScript, Vanilla CSS) gebaut und noch nicht live.

## Deine Aufgabe

Setze den SEO/AEO-Optimierungsplan aus `SEO_HANDOFF.md` im Root-Verzeichnis um. Lies diese Datei ZUERST vollständig — sie enthält alle Findings, Prioritäten, betroffene Dateien und Umsetzungsregeln.

Als Referenz liegt auch `seo_referenz_leitfaden.md` im Root — ein umfassender generischer SEO-Leitfaden. Der Handoff filtert bereits die relevanten Punkte heraus.

## Kontext

Die Website hat folgende Seitenstruktur:
- `/` — Homepage (Hero, Trust Metrics, Brand Story, Services, Process, Pricing, Testimonials, Gallery, FAQ, CTA)
- `/leistungen` — Alle Pakete, Einzelleistungen & Preise
- `/kontakt` — Kontaktdaten, Öffnungszeiten, Google Maps
- `/ueber-uns` — Gründer-Story, Werte, Standort
- `/ablauf` — 4-Schritte Prozess-Accordion, Vorbereitungstipps, FAQ
- `/galerie` — Before/After Slider, Atelier-Impressionen
- `/impressum` & `/datenschutz` — Legal Pages (noindex)

Zentrale Datendatei: `src/lib/data.ts` (Single Source of Truth für Preise, Texte, FAQs)
Structured Data: `src/lib/structured-data.ts` (Schema-Generatoren)

## Wichtige Regeln

1. **Design NICHT verändern.** Das UI ist auf Awwwards-Niveau und darf optisch nicht angefasst werden.
2. **Kein `.sr-only` / Hidden Text.** Stattdessen DOM-Hierarchie nutzen (Label wird zum H1, Catchphrase wird zum div — gleiche CSS-Klassen). Siehe Homepage als Referenz-Implementation.
3. **Video auf Mobile muss bleiben.**
4. **Kein Social Media** (existiert noch nicht, kein `sameAs`).
5. **White Hat SEO only.**
6. **Arbeite die Prioritäten P0 → P1 → P2 → P3 ab** (siehe Tabelle im Handoff).
7. **Verifiziere mit `npm run build`** nach den Änderungen.
```

---
