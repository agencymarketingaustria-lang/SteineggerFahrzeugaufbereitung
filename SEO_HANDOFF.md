# SEO / AEO Optimierungsplan — Steinegger Fahrzeugaufbereitung

> **Kontext**: Dies ist ein Handoff-Dokument für den nächsten AI-Agent.  
> **Referenz**: `seo_referenz_leitfaden.md` im Root-Verzeichnis enthält den vollständigen Leitfaden.  
> **Technologie**: Next.js 16.2 (App Router, Turbopack), TypeScript, Vanilla CSS.  
> **Website-Typ**: Lokales Dienstleistungs-Unternehmen (Fahrzeugaufbereitung), deutschsprachig, **noch nicht live**.  
> **Was NICHT relevant ist**: Blog, E-Commerce, International SEO, Podcast, Reddit, Backlink-Aufbau (kein Off-Page SEO).

---

## Was in Phase 1 bereits erledigt wurde

1. ✅ **Sitemap** (`src/app/sitemap.ts`): Alle statischen Routen hinzugefügt (`/kontakt`, `/ueber-uns`, `/ablauf`, `/galerie`, `/impressum`, `/datenschutz`).
2. ✅ **FAQPage Schema**: `generateFAQSchema()` in `src/lib/structured-data.ts` erstellt und auf der Homepage eingebunden.
3. ✅ **Person Schema**: `generatePersonSchema()` für Kilian Steinegger erstellt und auf der Homepage eingebunden.
4. ✅ **LocalBusiness erweitert**: `knowsAbout` und `priceRange` hinzugefügt, leeres `sameAs: []` entfernt.
5. ✅ **H1 auf Homepage**: Semantisch umgebaut. "Fahrzeugaufbereitung in Grafing" ist jetzt das `<h1>` (visuell als kleines Label dargestellt), "Dein Auto verdient mehr." ist ein `<div>` mit identischem CSS.

---

## Was noch zu tun ist (Phase 2)

### 1. Technical SEO

#### 1.1 `robots.txt` — KI-Bots erlauben (Leitfaden §1.1)
**Datei:** `src/app/robots.ts`  
**Ist:** Nur eine einzige Regel `{ userAgent: '*', allow: '/' }`.  
**Soll:** Zusätzliche explizite Regeln für KI-Crawler hinzufügen:
- `GPTBot` → `allow: '/'`
- `PerplexityBot` → `allow: '/'`
- `ClaudeBot` → `allow: '/'`
- `Google-Extended` → `allow: '/'`

Dies ist essenziell für AEO (Answer Engine Optimization), damit ChatGPT, Perplexity, Claude und Gemini die Inhalte crawlen und in ihren Antworten zitieren können.

#### 1.2 `sitemap.ts` — `lastModified` korrigieren (Leitfaden §1.2)
**Datei:** `src/app/sitemap.ts`  
**Ist:** `lastModified: new Date()` → generiert bei JEDEM Build ein neues Datum. Laut Leitfaden: *"Nur echte Änderungsdaten, nicht bei jedem Build aktualisieren"*.  
**Soll:**
- `new Date()` durch feste ISO-Datumstrings ersetzen (z.B. `'2026-04-11'`).
- `priority` und `changeFrequency` entfernen (Google ignoriert beides, Leitfaden §1.2).
- `impressum` und `datenschutz` aus der Sitemap ENTFERNEN, da sie `robots: { index: false }` gesetzt haben → noindex-Seiten gehören nicht in die Sitemap (Leitfaden §1.2: *"Nur kanonische, indexierbare, 200-Status-URLs"*).

#### 1.3 Canonical Tags (Leitfaden §1.3)
**Ist:** Keine expliziten Canonical-Tags konfiguriert. Next.js setzt KEINEN automatischen Canonical.  
**Soll:** Leitfaden: *"Jede Seite muss einen selbstreferenzierenden Canonical haben."*

- `src/app/layout.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de' }` zum globalen `metadata` hinzufügen.
- Jede Unterseite braucht ihren eigenen Canonical:
  - `leistungen/page.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de/leistungen' }`
  - `kontakt/page.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de/kontakt' }`
  - `ueber-uns/page.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de/ueber-uns' }`
  - `ablauf/page.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de/ablauf' }`
  - `galerie/page.tsx`: `alternates: { canonical: 'https://steinegger-aufbereitung.de/galerie' }`

#### 1.4 Trailing Slash Konsistenz (Leitfaden §1.6)
**Prüfen:** Werden URLs mit oder ohne Trailing Slash gerendert? Next.js lässt sich per `trailingSlash: true/false` in `next.config.ts` konfigurieren. Aktuell ist nichts konfiguriert → Default ist KEIN Trailing Slash. Sicherstellen, dass das konsistent bleibt.

---

### 2. Core Web Vitals (Leitfaden §2)

#### 2.1 CLS: `font-display` prüfen (Leitfaden §2)
**Datei:** `src/app/layout.tsx`  
**Ist:** Fonts werden mit `display: 'swap'` geladen.  
**Soll:** Leitfaden empfiehlt `font-display: optional` statt `swap` für bessere CLS (Cumulative Layout Shift), da kein Font-Swap-Shift stattfindet.  
**Achtung:** `optional` kann dazu führen, dass bei langsamen Verbindungen der Fallback-Font dauerhaft angezeigt wird. Abwägen ob das akzeptabel ist. Bei der kleinen Seitengröße und statischem Rendering vermutlich kein Risiko.

#### 2.2 Bildgrößen prüfen (Leitfaden §3.4)
**Ist:** Viele `.png` Bilder im `/public/images/` Ordner sind 600KB-1MB groß. Leitfaden: *"Max. 200KB für Hero, max. 100KB für Inline-Bilder"*.  
**Relevante Dateien:**
- `ablauf-01.png` bis `ablauf-04.png`: je ~650-780KB
- `before_*.png` / `after_*.png`: je ~800-990KB
- `bento_*.png`: je ~700-930KB
- `value_*.png`: je ~610-650KB

**Soll:** Next.js `<Image>` komprimiert zwar automatisch, aber die Originale sollten trotzdem komprimiert oder in WebP konvertiert werden, da die Originale als Fallback und für `og:image` verwendet werden könnten.

#### 2.3 Hero-Video: LCP-Optimierung
**Ist:** `preload="none"` ist gesetzt (gut), aber das Poster-Image `Hero-Sektion.webp` ist mit `priority` geladen — das ist korrekt.  
**Prüfen:** Ist das Hero-Image das LCP-Element? Falls ja, sollte ggf. ein `<link rel="preload" as="image">` in den `<head>` (via Next.js `metadata`).

---

### 3. Structured Data / Schema Upgrades (Leitfaden §5)

#### 3.1 `WebSite` Schema (fehlt komplett)
**Leitfaden §5 / §12 (Homepage):** *"Homepage braucht `Organization` + `WebSite` + `SearchAction` + `BreadcrumbList`"*.  
**Ist:** Nur `AutoRepair`, `Review`, `FAQ`, `Person`. Kein `WebSite` Schema.

**Soll:** Neue Funktion in `structured-data.ts`:
```ts
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#org` },
  };
}
```
Auf der Homepage einbinden.

#### 3.2 `BreadcrumbList` Schema (fehlt komplett)
**Leitfaden §5:** *"IMMER auf JEDER Seite: BreadcrumbList"*.  
**Ist:** Kein BreadcrumbList auf irgendeiner Seite.

**Soll:** Neue Generatorfunktion + auf JEDER Unterseite einbinden:
```ts
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

Beispiele:
- `/leistungen`: `[{Home, /}, {Leistungen, /leistungen}]`
- `/kontakt`: `[{Home, /}, {Kontakt, /kontakt}]`
- etc.

#### 3.3 `ContactPoint` Schema auf `/kontakt` (fehlt)
**Leitfaden §12 (Kontaktseite):** *"`Organization` + `ContactPoint`"*.

**Soll:** Neue Funktion:
```ts
export function generateContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer service',
      availableLanguage: 'German',
    },
  };
}
```
Auf `/kontakt` einbinden.

#### 3.4 `HowTo` Schema auf `/ablauf` (fehlt)
**Leitfaden §5:** *"`HowTo` mit `HowToStep`"* für How-To-Inhalte.  
Die Ablauf-Seite beschreibt wortwörtlich Schritt für Schritt, wie eine Aufbereitung abläuft → perfekter `HowTo` Kandidat.

**Soll:** Funktion basierend auf `extendedProcessSteps` aus `data.ts`.  
Zusätzlich: **FAQPage Schema auf `/ablauf`** einbinden — dort gibt es `extendedFaqs`, aber kein Schema dafür.

#### 3.5 `VideoObject` Schema für Hero-Video (fehlt)
**Leitfaden §11.1:** *"VideoObject Schema mit `name`, `description`, `thumbnailUrl`, `uploadDate`, `contentUrl`"*.  
**Ist:** Hero-Video `hero-bg.mp4` hat kein Schema.

**Soll:** `VideoObject` Schema auf der Homepage oder zumindest in der Datei vorbereiten. Falls das Hero-Video rein dekorativ ist, kann man das mit niedrigerer Priorität behandeln.

#### 3.6 Verwendung von `@graph` statt separater Scripts (Leitfaden §5, Best Practice)
**Ist:** 4 separate `<script type="application/ld+json">` Tags auf der Homepage.  
**Soll optional:** Diese können in ein einzelnes `@graph` Array zusammengeführt werden (ist sauberer, nicht zwingend nötig, aber Leitfaden zeigt dieses Pattern):
```json
{ "@context": "https://schema.org", "@graph": [...] }
```

---

### 4. On-Page SEO (Leitfaden §3)

#### 4.1 Title Tags optimieren (Leitfaden §3.1)
**Leitfaden:** *"Primär-Keyword in den ersten 30 Zeichen"*, *"50–60 Zeichen"*, *"Title und H1 sollten thematisch konsistent sein"*.

| Seite | Ist (via template `%s \| STEINEGGER Fahrzeugaufbereitung`) | Soll |
|-------|------|------|
| `/leistungen` | `Leistungen & Preise \| STEINEGGER Fahrzeugaufbereitung` (55 Zeichen) | `Fahrzeugaufbereitung Preise & Pakete \| STEINEGGER Grafing` |
| `/kontakt` | `Kontakt \| STEINEGGER Fahrzeugaufbereitung` (43 Zeichen) | `Kontakt – Fahrzeugaufbereitung Grafing \| STEINEGGER` |
| `/ueber-uns` | `Über uns \| STEINEGGER Fahrzeugaufbereitung` (44 Zeichen) | `Über uns – Kilian Steinegger \| Fahrzeugaufbereitung Grafing` |
| `/ablauf` | `Ablauf \| STEINEGGER Fahrzeugaufbereitung` (42 Zeichen) | `Ablauf der Aufbereitung \| STEINEGGER Grafing` |
| `/galerie` | `Galerie \| STEINEGGER Fahrzeugaufbereitung` (43 Zeichen) | `Galerie – Ergebnisse & Impressionen \| STEINEGGER` |

Die Titles müssen das Keyword "Fahrzeugaufbereitung" und/oder "Grafing" prominent enthalten.

#### 4.2 Meta Descriptions optimieren (Leitfaden §3.2)
**Leitfaden:** *"140–155 Zeichen"*, *"Call-to-Action einbauen"*, *"Keyword einbauen"*.

| Seite | Problem |
|-------|---------|
| `/kontakt` | Kein CTA, kein "Fahrzeugaufbereitung" im Text |
| `/galerie` | Kein CTA |
| `/ablauf` | Kein CTA |
| `/ueber-uns` | OK, aber kein CTA |

**Soll:** Jede Description mit einem CTA versehen: `Jetzt Termin anfragen!`, `Jetzt informieren!`, etc.

#### 4.3 H1-Tags auf Unterseiten (Leitfaden §3.3)
**Leitfaden:** *"H1 enthält Primär-Keyword"*, *"Genau 1× pro Seite"*.

| Seite | H1 Ist | Problem |
|-------|--------|---------|
| `/kontakt` | "Lass uns über dein Auto reden" | Kein Keyword |
| `/galerie` | (in `GalleryHero` Client Component) | Prüfen ob Keyword drin ist |
| `/ablauf` | (in `AblaufHero` Client Component) | Prüfen ob Keyword drin ist |
| `/leistungen` | "Unsere Leistungen & Preise im Überblick" | ✅ OK |
| `/ueber-uns` | "Dein Fahr­zeug­auf­be­reiter des Ver­trauens" | ✅ OK (enthält "Fahrzeugaufbereiter") |

**Ansatz:** Gleicher Trick wie Homepage — das visuell kleine Label-Element (z.B. "Kontakt") wird zum semantischen `<h1>` mit Keyword-Anreicherung, die große Catchphrase wird zum `<div>`.

**Wichtig:** Die `GalleryHero` und `AblaufHero` sind `'use client'` Components in eigenen Dateien. Deren H1 muss ebenfalls geprüft und ggf. angepasst werden.

#### 4.4 Heading-Hierarchie prüfen (Leitfaden §3.3)
**Leitfaden:** *"Niemals H3 vor H2"*, *"Keine Deko-Headings — Headings nur für Semantik"*.

Alle Seiten durchgehen und sicherstellen, dass die Heading-Reihenfolge korrekt ist (H1 → H2 → H3, keine Lücken). Auf der Homepage wird z.B. H5 verwendet (`process-step__title`), was nach einem H2 kommt — das überspringt H3 und H4.

#### 4.5 Alt-Texte semantisch aufwerten (Leitfaden §3.4)
**Leitfaden:** *"Beschreibend + Keyword, max. 125 Zeichen. Nicht ‚Bild von...'"*, *"Dateiname beschreibend"*.

**Ist-Zustand (Homepage Gallery):**
- `"Glänzender schwarzer Sportwagen"` → generisch
- `"Motorhaube nach Politur"` → generisch
- `"Armaturenbrett wird gereinigt"` → generisch

**Soll:**
- `"Schwarzer Sportwagen nach Lackpolitur – Steinegger Fahrzeugaufbereitung Grafing"`
- `"Motorhaube nach professioneller Politur und Keramikversiegelung"`
- `"Armaturenbrett Innenreinigung bei Steinegger in Nettelkofen"`

**Auch in `data.ts`** (`galleryItems`, `beforeAfterGallery`) die Alt-Texte aufwerten.

**Dateinamen** (Leitfaden: *"Nicht IMG_1234.jpg"*)**: **Einige Dateinamen in `/public/images/` sind bereits beschreibend (`brand-story.jpg`, `value_leasing.png`). Aber `gallery-1.jpg` bis `gallery-4.jpg` sind generisch → idealerweise umbennen nach z.B. `sportwagen-nach-lackpolitur.jpg`.

#### 4.6 Dekorative Bilder: leerer Alt-Text (Leitfaden §3.4)
**Leitfaden:** *"Dekorbild: `alt=\"\"` (leerer Alt-Text)"*.  
**Prüfen:** Gibt es rein dekorative Bilder (z.B. `brand-story__img-bg`, `pricing-deco`)? Falls CSS-basiert, ist es OK. Falls `<Image>`-Tags dekorativ sind, brauchen sie `alt=""`.

---

### 5. Custom 404-Seite (Leitfaden §12)

**Ist:** Keine `not-found.tsx` → Next.js zeigt generisches 404.  
**Leitfaden:** *"Freundliche Nachricht, Suchfeld, Top-3-Seiten verlinken, CTA"*. Besonders für AEO relevant: *"LLMs halluzinieren gelegentlich URLs zu Seiten, die nicht existieren. Die 404-Seite wird so zum AEO-Asset."*

**Soll:** Neue Datei `src/app/not-found.tsx`:
- Freundliche deutsche Nachricht
- Links zu Startseite, Leistungen, Kontakt
- CTA-Button "Kontakt aufnehmen"
- Design passend zum Rest der Website

---

### 6. Interne Verlinkung (Leitfaden §3.5)

**Leitfaden:** *"Kontextuelle Links im Fließtext > Navigations-/Footer-Links"*, *"Min. 3 interne Links pro Seite"*, *"Anchor-Text variieren"*.

**Ist:** Verlinkungen zwischen Seiten geschehen fast nur über CTA-Buttons und die Navigation/Footer.  
**Soll:** An strategischen Stellen im Fließtext Links einbauen:

- **Homepage Brand-Story:** "Nettelkofen" → Link zu `/kontakt`, "Handwerkskunst" → Link zu `/ueber-uns`
- **Homepage Process:** "Terminanfrage" → Link zu `/kontakt`
- **Ablauf-Seite:** "Pakete" → Link zu `/leistungen`  
- **Kontakt-Seite:** "Leistungen" → Link zu `/leistungen`, "Ablauf" → Link zu `/ablauf`
- **Über-uns-Seite:** Erwähnung von Services → Link zu `/leistungen`

**Achtung:** Da die meisten Texte als reine Strings in `data.ts` gespeichert sind, müssen die Links entweder direkt im JSX der Seiten eingebaut werden (nicht in data.ts) oder an Stellen wie Section-Subtitles/Beschreibungen.

---

### 7. Local SEO (Leitfaden §7)

#### 7.1 NAP-Konsistenz
**Leitfaden:** *"Name, Address, Phone identisch auf ALLEN Plattformen"*.  
**Prüfen:** Der SITE-Name ist "STEINEGGER Fahrzeugaufbereitung", aber im Schema steht die gleiche Schreibweise. ✅ OK.  
**Hinweis:** Im `LEGAL` Objekt in `data.ts` sind `street`, `zip`, `city` noch PLATZHALTER (`[STRASSE + HAUSNUMMER]`). Diese MÜSSEN vor dem Launch mit echten Daten ersetzt werden — sonst sind Schema und Impressum inkonsistent.

#### 7.2 Google Business Profile
**Leitfaden:** *"Vollständig ausfüllen, min. 10 Reviews einsammeln"*.  
**Status:** Außerhalb des Code-Scopes, aber im Handoff erwähnen: Vor dem Launch MUSS ein GBP angelegt und verifiziert werden. Die Schema-Daten (`LocalBusiness`) sollten dann mit der GBP-URL via `sameAs` verknüpft werden.

#### 7.3 Lokale Keywords im Content
**Leitfaden:** *"[Dienstleistung] + [Stadt] in Title, H1, Content"*.  
**Ist:** "Grafing" und "Nettelkofen" tauchen in einigen Seiten auf, aber nicht systematisch.  
**Soll:** Bei Title-Tag und H1-Optimierung (Punkte 4.1 und 4.3) konsequent "Grafing" / "Nettelkofen" einbauen. Im Footer ggf. einen kurzen "Service-Area" Text ergänzen: *"Fahrzeugaufbereitung für Grafing, Ebersberg, Kirchseeon, Poing und Umgebung."*

---

### 8. Semantic SEO & Entity-Optimierung (Leitfaden §16)

#### 8.1 Semantic Triples / Konsistenz
**Leitfaden §18.6:** *"Gleiche Begriffskombinationen auf Website, Social Profiles, Schema, Meta-Descriptions."*  
**Soll:** Sicherstellen, dass die Kern-Begriffe konsistent verwendet werden:
- Immer "Fahrzeugaufbereitung" (nicht mal "Autoaufbereitung", mal "Car Detailing")
- Immer "Grafing" oder "Nettelkofen bei Grafing"
- Immer "STEINEGGER Fahrzeugaufbereitung" als Markenname

#### 8.2 `@id` Referenzen in Schema (Leitfaden §5, Best Practice)
**Ist:** Die verschiedenen Schemas (`AutoRepair`, `Review`) sind nicht miteinander verknüpft.  
**Soll:** `@id` Pattern verwenden:
```json
// LocalBusiness
{ "@id": "https://steinegger-aufbereitung.de/#business", ... }

// WebSite
{ "publisher": { "@id": "https://steinegger-aufbereitung.de/#business" } }
```
So versteht Google, dass alles zur selben Entity gehört.

---

### 9. E-E-A-T Signale (Leitfaden §4.4)

**Leitfaden:** *"Autorenprofil mit Qualifikationen, Impressum, Datenschutz, Adresse, Telefon, Kundenbewertungen"*.

**Was bereits da ist:** ✅ Impressum, Datenschutz, Telefon, E-Mail, Testimonials, Person-Schema.  
**Was fehlt:**
- **Über-uns-Seite:** Das Gründer-Portrait ist ein Platzhalter (`about-founder__placeholder`). Vor dem Launch MUSS ein echtes Foto her.
- **Trust-Signale:** Zertifikate, Partner-Logos, Auszeichnungen → falls vorhanden, auf der Über-uns-Seite einbauen.

---

### 10. Security & Performance Headers (Leitfaden §1.8)

**Bereits implementiert in `next.config.ts`:** ✅
- HSTS mit `max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- AVIF/WebP Bildformate aktiviert
- Aggressive Caching für `/images/` und `/videos/`

**Nichts zu tun hier.**

---

## Zusammenfassung: Alle zu ändernden Dateien

| Datei | Änderungen |
|-------|-----------|
| `src/app/robots.ts` | KI-Bot-Regeln hinzufügen (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) |
| `src/app/sitemap.ts` | Feste Daten statt `new Date()`, `priority`/`changeFrequency` entfernen, noindex-Seiten entfernen |
| `src/app/layout.tsx` | Globaler Canonical, ggf. font-display prüfen |
| `src/lib/structured-data.ts` | +`generateWebSiteSchema`, +`generateBreadcrumbSchema`, +`generateContactPointSchema`, +`generateHowToSchema`, ggf. `@id` Referenzen |
| `src/app/page.tsx` | WebSite Schema, Breadcrumb, kontextuelle Fließtext-Links, Alt-Text Upgrade |
| `src/app/leistungen/page.tsx` | Title, Description, Canonical, Breadcrumb Schema |
| `src/app/kontakt/page.tsx` | Title, Description, Canonical, Breadcrumb, ContactPoint Schema, H1-Keyword |
| `src/app/ueber-uns/page.tsx` | Title, Description, Canonical, Breadcrumb Schema |
| `src/app/ablauf/page.tsx` | Title, Description, Canonical, Breadcrumb, HowTo Schema, FAQPage Schema, H1-Keyword |
| `src/app/galerie/page.tsx` | Title, Description, Canonical, Breadcrumb Schema, H1-Keyword |
| `src/lib/data.ts` | Alt-Texte in `galleryItems` und `beforeAfterGallery` semantisch aufwerten |
| `src/components/layout/Footer.tsx` | Ggf. Service-Area Text für lokale Keywords |
| **[NEU]** `src/app/not-found.tsx` | Custom 404-Seite |
| `src/app/ablauf/_components/AblaufHero.tsx` | H1 prüfen/anpassen |
| `src/app/galerie/_components/GalleryHero.tsx` | H1 prüfen/anpassen |

---

## Prioritäten

| Prio | Aufgabe | Impact |
|------|---------|--------|
| 🔴 P0 | Canonical Tags auf allen Seiten | Verhindert Duplicate-Content-Probleme |
| 🔴 P0 | robots.txt KI-Bots erlauben | Grundlage für AEO-Sichtbarkeit |
| 🔴 P0 | Sitemap fixen (lastModified, noindex-Seiten raus) | Korrekte Indexierung |
| 🟠 P1 | BreadcrumbList Schema auf JEDER Seite | Rich Snippets in Google |
| 🟠 P1 | WebSite Schema auf Homepage | Entity-Verknüpfung |
| 🟠 P1 | Title Tags + Meta Descriptions optimieren | CTR in SERPs |
| 🟠 P1 | H1 Keywords auf Unterseiten | On-Page Ranking-Signal |
| 🟡 P2 | HowTo Schema auf `/ablauf` | Rich Snippet Potenzial |
| 🟡 P2 | ContactPoint Schema auf `/kontakt` | Strukturierte Kontaktdaten |
| 🟡 P2 | Alt-Texte aufwerten | Bildersuche + Accessibility |
| 🟡 P2 | Custom 404-Seite | AEO + UX |
| 🟡 P2 | Kontextuelle interne Links | Link-Juice Verteilung |
| 🟢 P3 | Bildkomprimierung/WebP-Konversion | Performance |
| 🟢 P3 | Heading-Hierarchie (H5→H3) fixen | Semantische Korrektheit |
| 🟢 P3 | Service-Area Text im Footer | Lokale Keywords |
| 🟢 P3 | font-display optimieren | CLS |
| 🟢 P3 | VideoObject Schema | Nice-to-have |
| 🟢 P3 | Schema `@id` Verknüpfungen | Entity Kohärenz |

---

## Regeln für die Umsetzung

1. **Design NICHT anfassen.** Alle SEO-Änderungen müssen optisch unsichtbar sein. Keine neuen sichtbaren Text-Blöcke, keine "Faktenboxen". Das Awwwards-Level-Design ist heilig.
2. **H1-Trick:** Wenn ein H1 geändert werden muss, den gleichen Ansatz wie auf der Homepage verwenden: Das visuell kleine Label wird zum semantischen `<h1>` mit Keywords. Die große Catchphrase wird zum `<div>`, behält aber alle CSS-Klassen.
3. **Kein `.sr-only` / Hidden Text.** Das ist Richtung Black Hat SEO. Stattdessen DOM-Hierarchie-Tricks.
4. **Social Media:** Existiert noch nicht, also kein `sameAs` in Schemas.
5. **Video:** Soll auf Mobile erhalten bleiben (nicht entfernen).
6. **White Hat only.**

---

## Verifizierung nach Umsetzung

1. `npm run build` — Muss fehlerfrei durchlaufen.
2. Visueller Check: Sicherstellen, dass keine Heading-Änderung das Layout bricht.
3. JSON-LD validieren: Im gerenderten HTML die `<script type="application/ld+json">` Tags prüfen.
4. Nach Deployment: [Google Rich Results Test](https://search.google.com/test/rich-results) mit jeder URL testen.
