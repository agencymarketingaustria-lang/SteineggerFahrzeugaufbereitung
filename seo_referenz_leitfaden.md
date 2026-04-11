# SEO- & AEO-Referenzleitfaden für Agents

> **Zweck:** Dieser Leitfaden dient als vollständige Referenz für KI-Agents, um beliebige Webinhalte auf Weltklasse-SEO-Niveau zu optimieren. Er vereint klassisches **SEO** (Search Engine Optimization) mit **AEO** (Answer Engine Optimization) – der Strategie, die HubSpot 2024/2025 zu einer **15-fachen Traffic-Steigerung** und **5-13x höheren Conversion-Rates** verholfen hat. AEO-spezifische Regeln gelten **primär für Blog-Artikel**; alle anderen Seitentypen folgen den SEO-Regeln.

---

## 1. Technical SEO

### 1.1 robots.txt

```
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /staging/
Disallow: /*?sort=
Disallow: /*?filter=
Allow: /

Sitemap: https://example.com/sitemap.xml

# KI-Bots für AEO / AI-Zitation erlauben
User-agent: GPTBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /

# Google-Extended: steuert nur AI-Training (Gemini/Vertex), NICHT Google Search
# Allow = Content darf für AI-Training genutzt werden
# Disallow = Opt-out aus AI-Training (kein Einfluss auf Search-Ranking)
User-agent: Google-Extended
Allow: /
```

| Regel | Details |
|-------|---------|
| Speicherort | Immer im Root: `https://domain.com/robots.txt` |
| Sitemap-Verweis | Immer angeben, absolute URL |
| Keine sensiblen Pfade bloßstellen | `Disallow` zeigt Pfade öffentlich → keine geheimen URLs listen |
| Crawl-Delay | Nur für schlecht konfigurierte Bots, Google ignoriert es |
| Wildcard | `*` für Muster, `$` für exakte Endung |
| Prüfung | GSC → URL-Prüfung → Live-Test (der robots.txt-Tester wurde Nov 2023 entfernt) |

### 1.2 XML-Sitemap

| Regel | Details |
|-------|---------|
| Format | XML, UTF-8, max. 50.000 URLs oder 50 MB pro Datei |
| Sitemap-Index | Bei >50.000 URLs: Sitemap-Index-Datei mit Verweisen auf Teil-Sitemaps |
| Enthält | Nur kanonische, indexierbare, 200-Status-URLs |
| Nicht enthalten | Noindex-Seiten, Redirects, 404s, paginierte Seiten, parameter-Varianten |
| `<lastmod>` | Nur echte Änderungsdaten, nicht bei jedem Build aktualisieren |
| `<priority>` / `<changefreq>` | Von Google ignoriert – optional weglassen |
| Image-Sitemap | `<image:image>` für wichtige Bilder |
| Video-Sitemap | `<video:video>` für gehostete Videos |
| Einreichen | Google Search Console + Bing Webmaster Tools |
| Dynamisch generieren | Via CMS/Framework, nicht manuell pflegen |

### 1.3 Canonical Tags

| Regel | Details |
|-------|---------|
| Syntax | `<link rel="canonical" href="https://example.com/seite/" />` |
| Selbstreferenzierend | **Jede Seite** muss einen Canonical auf sich selbst haben |
| Einzige Ausnahme | Duplikate → Canonical auf die Hauptversion |
| Protokoll | Immer `https://` |
| Trailing Slash | Konsistent: entweder immer `/` am Ende oder nie |
| Cross-Domain | Möglich, z.B. bei syndiziertem Content |
| HTTP-Header | Alternative: `Link: <URL>; rel="canonical"` im HTTP-Header |
| Fehler vermeiden | Canonical darf NICHT auf noindex, 404, oder Redirect-Ziele zeigen |

### 1.4 Redirects

| Typ | Wann verwenden |
|-----|---------------|
| **301** (Permanent) | URL dauerhaft verschoben → überträgt PageRank vollständig (kein Verlust laut Google) |
| **302** (Temporary) | Temporäre Umleitung (A/B-Test, Wartung) → kein Linkjuice-Transfer |
| **308** (Permanent, POST) | Wie 301, aber behält HTTP-Methode bei |
| **Meta Refresh** | Vermeiden – schlecht für SEO |

| Regel | Details |
|-------|---------|
| Redirect-Ketten | Max. 1 Hop (A→B), niemals A→B→C→D |
| Redirect-Loops | Verboten, sofort fixen |
| Alte URLs | Mindestens 1 Jahr weiterleiten, besser dauerhaft |
| Parameter-basiert | Per Canonical oder robots.txt lösen (URL-Parameter-Tool April 2022 aus GSC entfernt) |
| Bulk-Migration | Redirect-Map erstellen, 1:1 Zuordnung alt→neu |

### 1.5 HTTP-Statuscodes

| Code | Bedeutung für SEO |
|------|------------------|
| **200** | OK – Seite wird indexiert |
| **301** | Permanent Redirect – Linkjuice wird weitergeleitet |
| **302** | Temporary Redirect – kein Linkjuice-Transfer |
| **304** | Not Modified – Caching-Signal |
| **404** | Not Found – wird über Tage/Wochen schrittweise aus dem Index entfernt |
| **410** | Gone – schnellere Deindexierung als 404 |
| **500** | Server Error – bei häufigem Auftreten: Ranking-Verlust |
| **503** | Service Unavailable – signalisiert temporäre Downtime |

### 1.6 URL-Struktur

| Regel | Beispiel |
|-------|---------|
| Kurz & beschreibend | `/unternehmensverkauf-checkliste/` |
| Kleinbuchstaben | Immer, keine camelCase |
| Bindestriche | `-` als Wortrenner, niemals `_` |
| Keine Parameter | Keine `?id=123` in indexierbaren URLs |
| Keine Datumsangaben | `/2024/03/artikel/` → wird veraltet wirken |
| Keyword im Slug | Primär-Keyword, natürlich, 3-5 Wörter max |
| Flat Hierarchy | Max. 3 Ebenen tief: `/kategorie/unterkategorie/seite/` |
| Trailing Slash | Konsistent sein (entweder immer oder nie), per Redirect erzwingen |

### 1.7 Crawl Budget

| Regel | Details |
|-------|---------|
| Relevanz | Nur bei Seiten >10.000 URLs oder bei Crawl-Problemen |
| Optimieren | Noindex/Disallow für Low-Value-Seiten (Tags, Archive, Parameter-Seiten) |
| Internal Linking | Wichtige Seiten in max. 3 Klicks vom Root erreichbar |
| Faceted Navigation | Parameter-URLs via `robots.txt` oder `noindex` blocken |
| Sitemap pflegen | Nur indexierungswürdige Seiten |
| Server-Speed | Schnelle Antwortzeiten (TTFB <200ms) erhöhen Crawl-Rate |

### 1.8 HTTPS / SSL

| Regel | Details |
|-------|---------|
| TLS-Version | Min. TLS 1.2, besser 1.3 |
| Mixed Content | Alle Ressourcen (Bilder, Scripts, CSS) über HTTPS laden |
| HSTS-Header | `Strict-Transport-Security: max-age=31536000; includeSubDomains` |
| HTTP → HTTPS | 301-Redirect für alle HTTP-URLs |
| Zertifikat | Gültig, vertrauenswürdige CA, auto-renew (Let's Encrypt) |

### 1.9 Mobile-First Indexing

| Regel | Details |
|-------|---------|
| Responsive Design | Eine URL, ein HTML, CSS-Media-Queries |
| Viewport Meta | `<meta name="viewport" content="width=device-width, initial-scale=1">` |
| Content-Parität | Desktop- und Mobile-Version müssen identischen Content haben |
| Touch-Targets | Min. 48×48px Abstand zwischen klickbaren Elementen |
| Schriftgröße | Min. 16px für Fließtext |
| Kein Flash | Keine Plugin-abhängigen Inhalte |
| Hamburger-Menü | Inhalt darin wird normal indexiert (Google rendert vollständig) |

---

## 2. Core Web Vitals

| Metrik | Was sie misst | Gut | Mäßig | Schlecht |
|--------|--------------|-----|------|---------|
| **LCP** (Largest Contentful Paint) | Ladezeit des größten sichtbaren Elements | ≤ 2,5s | ≤ 4,0s | > 4,0s |
| **INP** (Interaction to Next Paint) | Reaktionszeit bei Interaktion (hat FID seit März 2024 ersetzt) | ≤ 200ms | ≤ 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | Visuelle Stabilität / Verschiebungen | ≤ 0,1 | ≤ 0,25 | > 0,25 |

> **Neu seit 2025 – Engagement Reliability (ER):** Misst, wie zuverlässig interaktive Elemente über verschiedene Geräte und Bedingungen hinweg funktionieren. Noch kein bestätigter Ranking-Faktor, aber in Monitoring-Tools sichtbar.

### Optimierungsmaßnahmen

| Metrik | Maßnahmen |
|--------|-----------|
| **LCP** | Hero-Bild preloaden (`<link rel="preload">`), WebP/AVIF verwenden, Critical CSS inlinen, Server-Antwortzeit <200ms, CDN verwenden |
| **INP** | Event-Handler optimieren, lange Tasks aufbrechen (`requestIdleCallback`), Third-Party-Scripts verzögert laden, Main Thread entlasten |
| **CLS** | Immer `width`/`height` auf Bildern/Iframes setzen, Webfonts mit `font-display: optional` (besser als `swap` für CLS, da kein Fontswap-Shift), keine dynamisch eingefügten Elemente über dem Fold |

### Tools zum Messen
- **Field Data:** Google Search Console → Core Web Vitals, CrUX Dashboard
- **Lab Data:** Lighthouse, PageSpeed Insights, WebPageTest

---

## 3. On-Page SEO

### 3.1 Title Tag

| Regel | Details |
|-------|---------|
| Länge | 50–60 Zeichen (ca. 580px Breite) |
| Primär-Keyword | In den ersten 30 Zeichen |
| Einzigartigkeit | Jede Seite ein eigener Title |
| Branding | Markenname am Ende: `Thema – Marke` |
| Kein Keyword-Stuffing | Max. 1 Keyword natürlich einbauen |
| Emotional Trigger | Zahl oder Power-Wort: „10 Tipps", „Der ultimative Guide" |
| Trenner | `–` (Halbgeviertstrich) oder `|`, nicht beides |

**Google Title Rewrites verhindern** (Zyppy-Studie: Google schreibt 61,6% der Titles um):

| Rewrite-Trigger | Vermeidungsstrategie |
|-----------------|---------------------|
| Zu lang / zu kurz | 50–60 Zeichen einhalten |
| Keyword-Wiederholung | Keyword max. 1× im Title |
| Boilerplate-Text | Kein identischer Text-Block in allen Titles |
| Separatoren | Nicht mehr als 1 Trenner verwenden |
| Klammern/Parenthesen | `(2026)` und `[Guide]` werden oft entfernt – nur wenn nötig |
| Fehlender Markenname | Marke immer am Ende angeben |
| Title ≠ H1 Mismatch | Title und H1 sollten thematisch konsistent sein |

### 3.2 Meta Description

| Regel | Details |
|-------|---------|
| Länge | 140–155 Zeichen |
| Call-to-Action | Handlungsaufforderung: „Jetzt erfahren", „Checkliste herunterladen" |
| Keyword | Primär-Keyword einbauen (wird gefettet in SERPs) |
| Einzigartigkeit | Jede Seite eine eigene Description |
| Nicht abgeschnitten | Kerninformation in den ersten 120 Zeichen |
| Kein Duplikat des Titles | Ergänzende Information, nicht Wiederholung |

### 3.3 Heading-Hierarchie

| Regel | Details |
|-------|---------|
| **H1** | Genau 1× pro Seite, enthält Primär-Keyword |
| **H2** | Hauptabschnitte, Sekundär-Keywords und Fragen |
| **H3–H4** | Unterabschnitte innerhalb eines H2 |
| Reihenfolge | Niemals H3 vor H2 oder H4 vor H3 |
| Keine Deko-Headings | Headings nur für Semantik, nicht für Styling |
| Keywords natürlich | Nicht jedes Heading mit Keyword beginnen |
| Frage-Format für AEO | H2 als Frage: „Was kostet...?", „Wie funktioniert...?" |

### 3.4 Bilder

| Regel | Details |
|-------|---------|
| **Alt-Text** | Beschreibend + Keyword, max. 125 Zeichen. Nicht „Bild von..." |
| **Dateiname** | Beschreibend: `unternehmensverkauf-checkliste.webp`, nicht `IMG_1234.jpg` |
| **Format** | WebP (bevorzugt) oder AVIF, Fallback JPEG |
| **Größe** | Max. 200 KB für Hero, max. 100 KB für Inline-Bilder |
| **Dimensionen** | `width` und `height` immer angeben (CLS!) |
| **Lazy Loading** | `loading="lazy"` für Below-the-Fold-Bilder |
| **Eager Loading** | `loading="eager"` + `fetchpriority="high"` für LCP-Bild |
| **Responsive** | `srcset` und `sizes` für verschiedene Viewports |
| **Dekorbild** | `alt=""` (leerer Alt-Text) für rein dekorative Bilder |

### 3.5 Interne Verlinkung

| Regel | Details |
|-------|---------|
| Anchor-Text | Beschreibend, Keyword-bezogen, variierend – **Varianz ist der #1 Faktor** (Zyppy-Studie, 23 Mio. Links) |
| Anchor-Text-Mix | Empfehlung: ~40-50% Branded/Thema, ~15-20% generisch, ~5-10% Exact-Match, Rest variiert |
| Anzahl pro Seite | Optimal: 20–45 interne Links (Plateau bei ~40-45, danach abnehmender Nutzen laut Zyppy-Studie) |
| Verteilung | Jede Seite mind. 3 interne Links, wichtige Seiten mind. 5 eingehende |
| Tiefe | Jede Seite in max. 3 Klicks erreichbar |
| Platzierung | Kontextuelle Links im Fließtext > Navigations-/Footer-Links (v.a. bei kleineren Seiten) |
| Naked URLs | Nicht schädlich – sogar ~50% mehr Traffic korreliert (Zyppy-Studie). Tragen zur Ankertext-Varianz bei |
| Hub-Pages | Pillar-Seiten bekommen die meisten internen Links |
| Broken Links | Regelmäßig prüfen und fixen (Screaming Frog, Ahrefs) |
| Nofollow intern | Vermeiden – interne Links sollten immer dofollow sein |
| Breadcrumbs | Immer implementieren + BreadcrumbList-Schema |

### 3.6 Content-Qualität

| Regel | Details |
|-------|---------|
| Einzigartigkeit | 100% eigener Content, keine Kopien oder dünne Paraphrasen |
| Search Intent Match | Content muss die Suchintention exakt treffen (informational/transactional/navigational) |
| Above the Fold | Kerninhalt sofort sichtbar, nicht hinter Ads oder Cookie-Bannern |
| Lesbarkeit | Flesch-Reading-Ease >60, kurze Sätze, aktive Sprache |
| Multimedia | Bilder, Videos, Tabellen, Infografiken zur Anreicherung |
| Aktualität | Datum anzeigen, regelmäßig aktualisieren, veraltete Infos korrigieren |
| Mehrwert | Jeder Inhalt muss die Frage beantworten: „Warum sollte jemand das verlinken?" |

---

## 4. Content SEO

### 4.1 Keyword-Recherche

| Schritt | Details |
|---------|---------|
| **Seed-Keywords** | 5-10 Haupt-Themen der Website auflisten |
| **Tool-Recherche** | Google Keyword Planner, Ahrefs, SEMrush, Ubersuggest |
| **Suchvolumen** | Monatliches Volumen für DE/AT/CH separat prüfen |
| **Keyword-Difficulty** | KD <30 für neue Seiten, KD <50 für etablierte |
| **Search Intent** | Informational (Blog), Commercial (Vergleich), Transactional (Kauf) |
| **SERP-Analyse** | Top 10 analysieren: Welcher Content-Typ rankt? (Liste, Guide, Tool) |
| **Long-Tail** | 3-5 Wort-Keywords mit niedrigem Wettbewerb |
| **Cluster bilden** | Keywords nach Thema gruppieren → 1 Seite pro Cluster |

### 4.2 Search Intent Mapping

| Intent | Query-Typ | Content-Format | CTA |
|--------|-----------|---------------|-----|
| **Informational** | „Was ist...", „Wie funktioniert..." | Blog, Guide, FAQ | Newsletter, PDF |
| **Navigational** | „[Marke] Login", „[Marke] Kontakt" | Branded Pages | Direkt-Link |
| **Commercial** | „Beste...", „...Vergleich", „...Test" | Vergleichstabelle, Review | Free Trial, Demo |
| **Transactional** | „...kaufen", „...buchen", „Preis" | Produktseite, Landingpage | Kaufen, Buchen |

### 4.3 Topical Authority / Pillar-Cluster

| Regel | Details |
|-------|---------|
| **Pillar Page** | Umfassend (2.000–4.000 Wörter), breites Thema, verlinkt auf alle Cluster |
| **Cluster Pages** | Spezifisch (800–1.500 Wörter), Unterthema, verlinkt zurück zum Pillar |
| **Interne Links** | Jeder Cluster verlinkt zum Pillar + zu 2-3 verwandten Clustern |
| **Abdeckung** | Alle relevanten Unterthemen des Hauptthemas durchdeklinieren |
| **Themen-Exklusivität** | 1 Keyword-Cluster = 1 Seite, keine Keyword-Kannibalisierung |

### 4.4 E-E-A-T Signale

| Signal | Umsetzung |
|--------|-----------|
| **Experience** | Erfahrungsberichte, „Wir haben getestet", originale Fotos/Screenshots |
| **Expertise** | Autorenprofil mit Qualifikationen, Quellennachweise, Fachsprache |
| **Authoritativeness** | Backlinks von Autoritäts-Seiten, Erwähnungen in Presse/Fachmedien |
| **Trustworthiness** | HTTPS, Impressum, Datenschutz, Adresse, Telefon, Kundenbewertungen |
| **Autoren-Schema** | `Person`-Schema mit `sameAs` zu LinkedIn, XING, etc. |
| **About-Page** | Team, Geschichte, Referenzen, Zertifikate |

### 4.5 Content-Freshness

| Regel | Details |
|-------|---------|
| Veröffentlichungsdatum | Sichtbar im Artikel + `datePublished` in Schema |
| Aktualisierungsdatum | Sichtbar + `dateModified` in Schema |
| Refresh-Zyklus | Top-Seiten alle 6 Monate überprüfen |
| Decay erkennen | Ranking-Verlust >20% in 3 Monaten → aktualisieren |
| Historische Daten | Alte Jahreszahlen aus Titeln entfernen oder aktualisieren |

---

## 5. Structured Data / Schema Markup

### Implementierung

| Regel | Details |
|-------|---------|
| **Format** | JSON-LD (bevorzugt von Google) |
| **Platzierung** | Im `<head>` oder am Ende von `<body>` |
| **Validierung** | [Google Rich Results Test](https://search.google.com/test/rich-results) + [Schema.org Validator](https://validator.schema.org/) |
| **Mehrfach** | Mehrere Schema-Typen pro Seite erlaubt und empfohlen |
| **Audit** | Vierteljährlich alle Seiten prüfen |

### Schema-Typen nach Seitentyp

| Seitentyp | Schema-Typen |
|-----------|-------------|
| **Homepage** | `Organization`, `WebSite` (mit `SearchAction`), `BreadcrumbList` |
| **Blog-Artikel** | `Article` oder `BlogPosting`, `BreadcrumbList`, `FAQPage`, `Person` (Autor) |
| **Service-Seite** | `Service`, `Organization`, `FAQPage`, `BreadcrumbList` |
| **Produktseite** | `Product` (mit `Offer`, `AggregateRating`, `Review`) |
| **FAQ-Seite** | `FAQPage` |
| **How-To** | `HowTo` (mit `HowToStep`) |
| **Kontaktseite** | `Organization` (mit `contactPoint`), `LocalBusiness` |
| **Event** | `Event` (mit `location`, `startDate`, `offers`) |
| **Rezept** | `Recipe` |
| **Job** | `JobPosting` |
| **Video** | `VideoObject` |

### Beispiel: Minimal-Schema für jede Seite

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#org",
      "name": "Firmenname",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png",
      "sameAs": ["https://linkedin.com/company/...", "https://xing.com/..."]
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com",
      "name": "Firmenname",
      "publisher": { "@id": "https://example.com/#org" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://example.com/blog/" }
      ]
    }
  ]
}
```

---

## 6. Off-Page SEO

### 6.1 Backlinks

| Regel | Details |
|-------|---------|
| **Qualität > Quantität** | 1 Link von DR60+ > 10 Links von DR10 |
| **Relevanz** | Links aus thematisch verwandten Seiten |
| **Anchor-Text** | Natürlich variieren: Marke, URL, Keyword, generisch |
| **Toxic Links** | Per Disavow-Tool in GSC entwerten |
| **Aufbau-Methoden** | Gastbeiträge, Digital PR, Broken Link Building, Linkable Assets |
| **Tempo** | Natürliches Wachstum, kein plötzlicher Spike |
| **Nofollow/UGC/Sponsored** | Diversität ist natürlich, nicht nur dofollow anstreben |

### 6.2 Brand Signals

| Signal | Umsetzung |
|--------|-----------|
| **Branded Search** | Markenname in Titeln, Meta, Schema konsistent verwenden |
| **Unlinked Mentions** | Monitoring via Alerts, Outreach für Verlinkung |
| **Knowledge Panel** | Google Business Profile + Schema + Wikipedia/Wikidata |
| **Social Profiles** | Konsistente Profile auf allen relevanten Plattformen |

### 6.3 Digital PR

| Methode | Details |
|---------|---------|
| Pressemitteilungen | Nur für echte News, mit Schema-Markup |
| Studien / Daten | Eigene Umfragen/Analysen veröffentlichen → natürliche Links |
| Expert-Kommentare | HARO (seit April 2025 unter Featured.com wiederbelebt), Qwoted, Source of Sources (SOS) |
| Infografiken | Teilbar, einbettbar, mit Quellenverweis |

---

## 7. Local SEO

| Element | Details |
|---------|---------|
| **Google Business Profile** | Vollständig ausfüllen: Name, Adresse, Telefon, Öffnungszeiten, Fotos, Services, Beschreibung (750 Zeichen) |
| **NAP-Konsistenz** | Name, Address, Phone identisch auf ALLEN Plattformen |
| **Lokale Verzeichnisse** | Branchenverzeichnisse, Gelbe Seiten, Yelp, Cylex, Das Örtliche |
| **Reviews** | Aktiv einsammeln (min. 10), auf ALLE antworten (auch negative) |
| **LocalBusiness Schema** | Mit `geo`, `address`, `openingHours`, `priceRange` |
| **Lokale Keywords** | „[Dienstleistung] + [Stadt]" in Title, H1, Content |
| **Google Maps Embed** | Auf Kontaktseite einbetten |
| **Posts** | Wöchentlich GBP-Posts (Angebote, News, Events) |

---

## 8. E-Commerce SEO

| Element | Details |
|---------|---------|
| **Produkt-Titel** | Keyword + Marke + Eigenschaft: „Rotes Herren-T-Shirt – Marke – Gr. L" |
| **Produkt-Beschreibung** | Min. 150 Wörter, einzigartig, nicht vom Hersteller kopiert |
| **Product Schema** | `Product` mit `Offer`, `priceValidUntil`, `availability`, `AggregateRating` |
| **Faceted Navigation** | Parameter-URLs via Canonical auf Hauptkategorie, oder noindex |
| **Kategorie-Seiten** | Einzigartiger Intro-Text (200+ Wörter), H1 mit Keyword |
| **Pagination** | Google ignoriert `rel="next"`/`rel="prev"` seit 2019; Bing nutzt sie nur als Crawl-Hinweis. Bevorzugt: crawlbare Seiten-URLs oder „Alle anzeigen"-Option |
| **Out of Stock** | Seite beibehalten mit „Derzeit nicht verfügbar" – NICHT 404 |
| **Bewertungen** | Review-Schema, UGC (User Generated Content) als Ranking-Signal |
| **Interne Suche** | Suchergebnis-Seiten auf `noindex` setzen |

---

## 9. International SEO

| Element | Details |
|-------|---------|
| **Hreflang** | `<link rel="alternate" hreflang="de" href="..." />` |
| **Selbstreferenz** | Jede Seite hat hreflang auf sich selbst |
| **x-default** | Für Sprachauswahl-Seite: `hreflang="x-default"` |
| **Rückverweise** | Seite A→B und B→A müssen beide hreflang haben |
| **Format** | `hreflang="de-DE"` (Sprache-Land) oder `hreflang="de"` (nur Sprache) |
| **ccTLD vs. Subfolder** | `example.de` vs. `example.com/de/` – Subfolder einfacher zu verwalten, ccTLD stärkeres Lokalsignal |
| **Content** | Nicht nur übersetzen, sondern lokalisieren (Währung, Maßeinheiten, Kultur) |
| **Search Console** | Ländertargeting pro Property einstellen |

---

## 10. JavaScript SEO

| Regel | Details |
|-------|---------|
| **SSR** (Server-Side Rendering) | Bevorzugt – HTML wird serverseitig generiert, Bot sieht fertigen Content |
| **CSR** (Client-Side Rendering) | Kritisch – Google rendert JS mit Verzögerung, manches wird nicht indexiert |
| **ISR** (Incremental Static Regeneration) | Best Practice für Next.js – statisch + dynamisch |
| **Dynamic Rendering** | ⚠️ Von Google als „Workaround, keine Langzeitlösung" eingestuft. Rendertron deprecated. SSR/ISR bevorzugen |
| **Hydration** | Sicherstellen, dass Links und Content nach Hydration identisch sind |
| **Lazy Loading** | Kritischen Content NICHT lazy loaden, nur Below-the-Fold |
| **Infinite Scroll** | Alternative paginierte URLs bereitstellen, die crawlbar sind |
| **`<a href>`-Links** | JavaScript-Navigation muss echte `<a>` Tags mit `href` verwenden |
| **Internal JS-Rendering testen** | Google Search Console → URL prüfen → „Live-Test" → gerenderten HTML prüfen |
| **Meta-Tags** | Müssen im initialen HTML oder via SSR vorhanden sein, nicht per JS nachgeladen |

---

## 11. Media SEO

### 11.1 Video SEO

| Regel | Details |
|-------|---------|
| **VideoObject Schema** | `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl` |
| **Transkript** | Volltext-Transkript auf der Seite = crawlbarer Content |
| **Thumbnail** | Eigenes, hochwertiges Thumbnail (1280×720px) |
| **Video-Sitemap** | Separate Video-Sitemap oder in Haupt-Sitemap integriert |
| **YouTube** | Titel, Beschreibung, Tags, Kapitelmarken, Untertitel optimieren |
| **Einbettung** | Lazy-Load für Embeds (z.B. via `srcdoc` Attribut im iframe) |

### 11.2 Podcast SEO

| Regel | Details |
|-------|---------|
| Episode-Seiten | Eigene URL pro Episode mit Transkript + Show Notes |
| Schema | `PodcastEpisode` + `PodcastSeries` |
| RSS-Feed | Vollständig ausgefüllt, bei Apple/Spotify/Google eingereicht |

---

## 12. Seitentyp-spezifische Regeln

### Homepage

| Element | Regel |
|---------|-------|
| H1 | Haupt-Value-Proposition, 1×, nicht „Willkommen" |
| Title | Marke + Haupt-Keyword: „[Agentur] – Websites & SEO für KMUs" |
| Schema | `Organization` + `WebSite` + `SearchAction` |
| Interne Links | Zu allen Hauptkategorien / Services / Top-Content |
| Content | Min. 300 Wörter, beschreibt Angebot, Zielgruppe, USP |

### Service-/Leistungsseite

| Element | Regel |
|---------|-------|
| H1 | Service-Name + Zielgruppe: „Website-Design für KMU" |
| Content | Min. 800 Wörter, Problem→Lösung→Prozess→Ergebnis→CTA |
| Schema | `Service` + `FAQPage` + `Organization` |
| Social Proof | Testimonials, Logos, Case-Study-Links |
| CTA | Above the Fold + Ende der Seite |

### Blog-Artikel

| Element | Regel |
|---------|-------|
| H1 | Keyword + Nutzenversprechen ODER Frage-Form (AEO: „Was kostet...?", „Wie funktioniert...?") |
| Schema | `BlogPosting` + `Person` (Autor) + `FAQPage` |
| Datum | Sichtbar, `datePublished` + `dateModified` im Schema |
| Autor | Name, Foto, Kurzbiografie mit Credentials |
| Länge | Abhängig von SERP-Analyse (800–3.000 Wörter) |
| Inhaltsverzeichnis | Bei >1.500 Wörtern, mit Sprung-Links |
| Related Posts | 3-5 verwandte Artikel am Ende verlinken |

#### AEO-Formatting für Blog-Artikel (HubSpot-Methodik)

> Diese Regeln optimieren Blog-Artikel für AI-Zitation (ChatGPT, Gemini, Perplexity, AI Overviews). HubSpot erzielte damit eine **15x Traffic-Steigerung** und **5-13x höhere Conversion-Rates**.

**Answer First Architecture:**

| Regel | Vorgabe |
|-------|---------|
| **Antwortblock** | **40–60 Wörter** direkt nach der H2-Überschrift, **fett markiert** |
| **H2-Format** | Frage-Form: „Was ist...?", „Wie funktioniert...?", „Warum...?" |
| **Erster Satz** | Direkte Antwort auf die Frage |
| **Zweiter Satz** | Beweis / Statistik / Quelle |
| **Position** | Über dem Fold (obere 300px der Seite) |

```
❌ FALSCH:
"Die Unternehmensbewertung ist ein komplexes Thema, das
viele Facetten hat. In diesem umfassenden Guide..."
[... 500 Wörter Einleitung ...]
"Die Antwort ist: das Ertragswertverfahren."

✅ RICHTIG:
## Was ist die gängigste Methode zur Unternehmensbewertung?

**Die gängigste Methode ist das Ertragswertverfahren.**
Es bewertet ein Unternehmen basierend auf seinen
zukünftigen Erträgen und wird von 68% der Gutachter
in Deutschland bevorzugt (DIHK 2024).
[... danach: Erklärung, Kontext, Vergleich ...]
```

**Chunkable Content:**

| Regel | Vorgabe |
|-------|---------|
| **Abschnittslänge** | **120–180 Wörter** pro H2/H3-Abschnitt |
| **Absatzlänge** | Max. 4 Zeilen |
| **Struktur** | H2/H3 → Antwort (fett) → 3-5 Bulletpoints → ggf. Tabelle |
| **Content-Anteil** | Ca. 40% des Textes in Listen oder Tabellen |
| **Selbsttest** | Jeder Abschnitt muss alleinstehend verständlich sein |

**Blog-spezifische Content-Elemente:**

| Element | Regel |
|---------|-------|
| **TL;DR-Box** | Direkt unter H1: max. 100 Wörter, 3 Bulletpoints, Fazit-Satz |
| **Quotable Fact Blocks** | `<blockquote>` + `<cite>` mit Quelle – KI-Modelle zitieren diese bevorzugt |
| **FAQ am Artikelende** | 5-7 Fragen, je max. 50 Wörter Antwort, mit `FAQPage`-Schema |
| **Fragen aus Suche** | AnswerThePublic, Google Suggest, „People also ask" |

**Ultra-Long-Tail Queries (40–60 Wörter):**

KI-Nutzer stellen komplette Fragen statt 2-Wort-Keywords:

| Klassisches Keyword | Ultra-Long-Tail Query |
|--------------------|----------------------|
| „Firma verkaufen" | „Wie kann ich als 62-jähriger Handwerksmeister mein Unternehmen in NRW verkaufen und vorher den Online-Auftritt verbessern?" |
| „Firmenwert steigern" | „Lohnt es sich 5.000 Euro in eine neue Website zu investieren bevor ich mein Handwerksunternehmen mit 20 Mitarbeitern verkaufe?" |

Optimierung: H1/H2 als Frage → Answer First (60 Wörter) → FAQ mit verwandten Long-Tail-Fragen

### Landingpage

| Element | Regel |
|---------|-------|
| H1 | Keyword + USP, emotional |
| Content | Problem→Agitation→Solution (PAS) Struktur |
| CTA | Min. 3× pro Seite (Above Fold, Mitte, Ende) |
| Formular | So kurz wie möglich (Name + E-Mail reicht oft) |
| Social Proof | Nah am CTA platzieren |
| Navigation | Reduziert oder versteckt (Conversion-Fokus) |
| Schema | `WebPage` + `FAQPage` |

### Über-uns-Seite

| Element | Regel |
|---------|-------|
| Schema | `Organization` mit vollständigen Kontaktdaten |
| Team | Echte Fotos, Namen, Rollen, LinkedIn-Links |
| E-E-A-T | Qualifikationen, Erfahrung, Referenzen |
| Trust-Signale | Zertifikate, Partner-Logos, Auszeichnungen |

### Kontaktseite

| Element | Regel |
|---------|-------|
| Schema | `Organization` + `ContactPoint` |
| NAP | Adresse, Telefon, E-Mail sichtbar (und als Text, nicht nur Bild) |
| Google Maps | Eingebettet mit korrektem Standort |
| Formular | Spam-Schutz (Honeypot > reCAPTCHA für UX) |

### 404-Seite

| Element | Regel |
|---------|-------|
| Suchfeld | Nutzern Suche anbieten |
| Interne Links | Top-3-Seiten verlinken |
| Schema | `Organization`-Schema auch hier |
| Kein noindex | 404-Status reicht, kein Meta-noindex nötig |
| Analytics | 404-Aufrufe tracken, häufige beheben |
| AEO | Für halluzinierte LLM-Links: hilfreiche Redirect-Blocks (siehe unten) |

**Smarte 404-Seite für halluzinierte AI-Links:**

LLMs halluzinieren gelegentlich URLs zu Seiten, die nicht existieren. Die 404-Seite wird so zum AEO-Asset:

| Element | Umsetzung |
|---------|-----------|
| **Freundliche Nachricht** | „Diese Seite existiert nicht – aber wir können trotzdem helfen!" |
| **Suchfeld** | Prominent platziert |
| **Meistgelesene Artikel** | 3-5 Top-Seiten automatisch verlinken |
| **FAQ-Sektion** | Mit `FAQPage`-Schema – auch die 404-Seite liefert Google strukturierte Daten |
| **CTA** | Kontaktmöglichkeit anbieten |

---

## 13. Globale SEO-Audit-Checkliste

### Crawling & Indexierung
- [ ] robots.txt korrekt und aktuell
- [ ] XML-Sitemap vorhanden, aktuell, in GSC eingereicht
- [ ] Keine versehentlichen noindex-Tags auf wichtigen Seiten
- [ ] Keine Redirect-Ketten oder -Loops
- [ ] Canonical-Tags auf allen Seiten korrekt
- [ ] HTTPS auf allen Seiten erzwungen

### Performance
- [ ] LCP ≤ 2,5s
- [ ] INP ≤ 200ms
- [ ] CLS ≤ 0,1
- [ ] TTFB < 200ms
- [ ] Bilder in WebP/AVIF, komprimiert, lazy loaded
- [ ] Critical CSS inlined, JS deferred

### On-Page
- [ ] Jede Seite hat einzigartigen Title (50–60 Zeichen)
- [ ] Jede Seite hat einzigartige Meta Description (140–155 Zeichen)
- [ ] 1× H1 pro Seite mit Primär-Keyword
- [ ] Heading-Hierarchie korrekt (H1→H2→H3)
- [ ] Bilder mit beschreibendem Alt-Text
- [ ] Min. 3 interne Links pro Seite
- [ ] Breadcrumbs mit BreadcrumbList-Schema

### Structured Data
- [ ] Organization-Schema auf Homepage
- [ ] Article/BlogPosting-Schema auf Artikeln
- [ ] FAQPage-Schema wo Q&A vorhanden
- [ ] Product-Schema auf Produkt-/Serviceseiten
- [ ] BreadcrumbList auf allen Seiten
- [ ] Alle Schema via Rich Results Test validiert

### Content
- [ ] Kein Thin Content (<300 Wörter ohne Mehrwert)
- [ ] Kein Duplicate Content (intern oder extern)
- [ ] Kein Keyword-Stuffing
- [ ] Search Intent korrekt getroffen
- [ ] E-E-A-T-Signale vorhanden (Autor, Quellen, Aktualität)
- [ ] Dates (published + modified) sichtbar und im Schema

### Technisch
- [ ] Mobile-First responsive
- [ ] Viewport Meta-Tag gesetzt
- [ ] Kein Mixed Content (HTTP-Ressourcen auf HTTPS-Seite)
- [ ] 404-Seite angepasst
- [ ] Kein Orphan-Content (Seiten ohne interne Links)
- [ ] JavaScript-Content wird gerendert (GSC-URL-Prüfung)

### Off-Page
- [ ] Google Business Profile eingerichtet und optimiert
- [ ] Backlink-Profil regelmäßig auditiert
- [ ] NAP-Daten konsistent über alle Plattformen
- [ ] Brand-Mentions monitored

### AEO & AI-Sichtbarkeit
- [ ] robots.txt erlaubt GPTBot, PerplexityBot, ClaudeBot
- [ ] Answer-First-Abschnitte auf wichtigsten Seiten
- [ ] Chunkable Content (120–180 Wörter pro Abschnitt)
- [ ] FAQ-Schema auf allen relevanten Seiten

---

## 14. Agent-Entscheidungslogik

> Diese Sektion gibt Agents konkrete Entscheidungsregeln, um ohne menschliche Intervention die richtigen SEO-Maßnahmen zu wählen.

### 14.1 Content-Länge bestimmen

**Nicht pauschal festlegen, sondern datenbasiert:**

| Schritt | Aktion |
|---------|--------|
| 1 | Primär-Keyword in Google eingeben |
| 2 | Top-5-Ergebnisse analysieren: Wortanzahl der rankenden Seiten erfassen |
| 3 | Median der Top 5 berechnen |
| 4 | Zielwortanzahl = Median + 10-20% (mehr Tiefe bieten, nicht unnötig aufblähen) |
| 5 | Search Intent prüfen: Transactional = kürzer, Informational = länger |

**Richtwerte als Fallback** (wenn SERP-Analyse nicht möglich):

| Seitentyp | Wortanzahl |
|-----------|-----------|
| Landingpage | 500–1.200 |
| Kategorie-Seite | 200–500 |
| Blog-Artikel (Informational) | 1.000–2.500 |
| Pillar Page | 2.000–4.000 |
| Produktseite | 300–800 |
| FAQ-Seite | Abhängig von Anzahl Fragen, ~80–120 Wörter pro Antwort |

### 14.2 Schema-Markup wählen

```
WENN Seite = Homepage:
  → Organization + WebSite + SearchAction + BreadcrumbList

WENN Seite = Blog-Artikel:
  → BlogPosting + Person (Autor) + BreadcrumbList
  → WENN Fragen im Content: + FAQPage

WENN Seite = Service/Leistung:
  → Service + Organization + BreadcrumbList
  → WENN Fragen: + FAQPage
  → WENN Bewertungen: + AggregateRating

WENN Seite = Produkt:
  → Product + Offer + BreadcrumbList
  → WENN Bewertungen: + AggregateRating + Review

WENN Seite = Kontakt:
  → Organization + ContactPoint + BreadcrumbList
  → WENN lokales Geschäft: + LocalBusiness

WENN Seite = Event:
  → Event + BreadcrumbList

WENN Seite = Video-Hauptinhalt:
  → VideoObject + BreadcrumbList

IMMER auf JEDER Seite: BreadcrumbList
IMMER validieren: Google Rich Results Test
```

### 14.3 Interne Links setzen

| Seitentyp | Min. ausgehende Links | Anchor-Strategie |
|-----------|----------------------|-----------------|
| Homepage | 10–20 (alle Hauptbereiche) | Branded + generisch |
| Pillar Page | 8–15 (alle Cluster) | Keyword-variiert |
| Cluster/Blog | 3–5 (Pillar + verwandte Cluster) | Keyword-nah, variiert |
| Service-Seite | 3–5 (verwandte Services + Blog) | Thematisch |
| Produkt | 3–5 (Kategorie + verwandte Produkte) | Produktnamen + Kategorie |

### 14.4 Wann welche Heading-Struktur

| Seitentyp | H1 | H2 | H3 |
|-----------|----|----|-----|
| Blog-Artikel | 1× Keyword + Nutzen | Hauptabschnitte / Fragen | Details unter H2 |
| Landingpage | 1× USP + Keyword | Problem, Lösung, Social Proof, CTA | Features, Testimonial-Details |
| Service-Seite | 1× Service + Zielgruppe | Was, Warum, Wie, FAQ | Einzelne Schritte, Vorteile |
| Produktseite | 1× Produktname + Eigenschaften | Beschreibung, Specs, Reviews | Einzelne Specs, Nutzerfragen |

---

## 15. Google Rendering & Nicht-200-Seiten (2025/2026)

| Regel | Details |
|-------|---------|
| **Nicht-200 Rendering-Skip** | Google kann seit Dez 2025 das Rendering von Seiten mit nicht-200 HTTP-Status überspringen. Wenn eine Seite einen 4xx/5xx-Status zurückgibt, wird sie möglicherweise nicht gerendert, selbst wenn JavaScript Content anzeigt |
| **Konsequenz** | Alle indexierbaren Seiten MÜSSEN einen 200-Status zurückgeben |
| **Soft 404s** | Google erkennt Seiten, die 200 zurückgeben aber „Not Found" anzeigen → als 404 behandelt |
| **Custom 404** | Muss echten 404-Status senden, NICHT 200 mit Error-Content |
| **503 für Wartung** | Bei temporärer Downtime: 503 + `Retry-After` Header |

---

## 16. Semantic SEO & Entity-Optimierung

> Basierend auf der Methodik von Koray Tugberk GUBUR (Holistic SEO) und aktuellen Entity-SEO-Erkenntnissen.

### Kernkonzepte

| Konzept | Umsetzung |
|---------|-----------|
| **Zentrale Entity** | Definieren: Was ist das Hauptthema der gesamten Website? (z.B. „Webdesign-Agentur") |
| **Source Context** | Die einzigartige Perspektive/den USP der Marke klarstellen |
| **Semantic Content Networks** | Seiten logisch verknüpfen, sodass Entity-Beziehungen für Suchmaschinen klar werden |
| **Entity-Attribute** | Jede Entity hat Eigenschaften → als Content-Abschnitte strukturieren |

### Entity-Optimierung für Agents

| Schritt | Aktion |
|---------|--------|
| 1 | Zentrale Entity der Website definieren |
| 2 | Verwandte Entities auflisten (Unterthemen, Kunden, Services) |
| 3 | Beziehungen mappen: Entity A → hat Service → Entity B |
| 4 | Pro Entity eine Content-Seite erstellen |
| 5 | Interne Links spiegeln die Entity-Beziehungen wider |
| 6 | Schema-Markup die Entities explizit benennen (`Organization`, `Service`, `Person`, `sameAs`) |

### Topical Map erstellen

| Ebene | Inhalt |
|-------|--------|
| **Core Section** | Haupt-Entity + wichtigste Attribute → Pillar Page |
| **Inner Sections** | Unterthemen mit direktem Bezug → Cluster Pages |
| **Outer Sections** | Historische/kontextuelle Tiefe → Vertrauensaufbau |
| **Trending Nodes** | Aktuelle Themen, die Topics verbinden → frische Relevanz |

---

## 17. Title-Tag-CTR-Optimierung

### A/B-Testing-Methodik

| Schritt | Details |
|---------|---------|
| 1 | Seiten mit hohen Impressions aber niedrigem CTR in GSC identifizieren |
| 2 | Hypothese formulieren: „Wenn ich X ändere, steigt CTR um Y%" |
| 3 | Nur 1 Variable ändern (z.B. Zahl hinzufügen, Trigger-Wort) |
| 4 | 2 Wochen warten für statistisch signifikante Daten |
| 5 | GSC-Daten vorher/nachher vergleichen |
| 6 | Bei Verbesserung: auf ähnliche Seiten übertragen. Bei Verschlechterung: zurücksetzen |

### CTR-Booster-Techniken

| Technik | Beispiel |
|---------|---------|
| **Zahlen** | „7 Tipps" statt „Tipps" |
| **Aktualität** | „(2026)" oder „Aktualisiert" |
| **Klammern** | „[Checkliste]" oder „(mit Vorlage)" – ⚠️ Google entfernt manchmal Klammern |
| **Power-Wörter** | „Ultimativ", „Komplett", „Kostenlos", „Sofort" |
| **Frage** | „Wie viel kostet...?" statt „Kosten von..." |
| **Negation** | „Fehler vermeiden" statt „Richtig machen" |

---

## 18. AEO & AI-Sichtbarkeit (Search Everywhere Optimization)

> AEO **ergänzt** SEO – es ersetzt es nicht. SEO sorgt für Indexierung und Crawlbarkeit. AEO sorgt dafür, dass Content in AI-Antworten **zitiert** wird. Quellen: Kevin Indig (Growth Memo), HubSpot-Daten (Kipp Bodnar), aktuelle AI-Visibility-Erkenntnisse.

### 18.1 Der Business Case (HubSpot-Daten)

| Metrik | Ergebnis |
|--------|----------|
| **Traffic-Steigerung** durch AEO | **15x** innerhalb eines Jahres |
| **Conversion Rate** von AI-Traffic | **5x bis 13x höher** als organischer Google-Traffic |
| **Schema-Markup Effekt** auf Zitationen | **Bis zu 300%** höhere Zitierwahrscheinlichkeit |

Warum? AI-Nutzer haben ihre Recherche bereits abgeschlossen → höhere Kaufabsicht, mehr Vertrauen.

### 18.2 Die 60%-Regel

> **60% der KI-Zitationen stammen NICHT aus den Top-20-Google-Ergebnissen.**

| Konsequenz | Aktion |
|-----------|--------|
| Ranking ≠ AI-Zitation | Content-Qualität und Struktur wichtiger als Position |
| Chance für kleinere Sites | „Chunkable", gut strukturierter Content schlägt etablierte Player |
| Nischen-Expertise | Spezifischer Content > generischer Content |
| Eigene Daten | Einzigartige Statistiken = bevorzugte Quelle |

### 18.3 Von Keyword-First zu Topic-First

| Alt (Keyword-First) | Neu (Topic-First) |
|---------------------|------------------|
| 1 Keyword = 1 Seite | 1 Thema = 1 Seiten-System (Pillar + Cluster) |
| Keyword-Density optimieren | Semantische Vollständigkeit |
| Rankings tracken | Visibility + Mentions + Citations tracken |
| CTR optimieren | Share of Voice in AI-Antworten messen |

### 18.4 Ungated Content

> **Gated Content (hinter Paywall/Login) = 0% KI-Zitation.** LLMs können nur öffentlich zugängliche Inhalte crawlen.

| Öffentlich machen ✅ | Gated lassen darf 📧 |
|---------------------|---------------------|
| Blog-Artikel (vollständig) | Detaillierte Checklisten-PDFs (Lead-Magnet) |
| FAQ-Seiten | Vollständige Templates |
| Service-Beschreibungen mit Preistransparenz | Video-Kurse |
| Case Studies (Zusammenfassungen) | — |
| Glossar / Definitionen | — |
| Statistiken und eigene Daten | — |

**80/20-Regel:** 80% Content öffentlich (für AI-Zitationen), 20% gated (für Leads).

### 18.5 Reddit-Optimierung für ChatGPT

OpenAI/ChatGPT zitiert Reddit **überproportional häufig** – besonders Outside-Top-20-Quellen.

| Schritt | Details |
|---------|---------|
| 1. Subreddits finden | Relevante Communities in deiner Nische |
| 2. Hilfreiche Antworten | Ausführlich, mit Fakten, wie ein Experte – NICHT werblich |
| 3. Struktur beachten | Frage wiederholen → Bulletpoint-Antwort → Quelle/Link |
| 4. Ziel: 50+ Upvotes | Hochwertige Antworten werden häufiger indexiert |
| 5. Bio-Link | Reddit-Profil mit Link zu Website |

> ⚠️ **Niemals Spam oder Werbung.** Reddit erkennt das sofort. Mehrwert zuerst.

### 18.6 Semantic Triples

Semantic Triples verknüpfen deine **Marke mit Themen** im Knowledge Graph.

**Format: Subjekt → Prädikat → Objekt**

| Im Content | Im Schema (JSON-LD) |
|----------|-------------------|
| „Wir bei [Agentur] sind spezialisiert auf digitale Verkaufsvorbereitung." | `Organization.description`: „Spezialisiert auf digitale Verkaufsvorbereitung für KMU" |
| Begriffe überall konsistent verwenden | `sameAs`, `hasOfferCatalog`, `Service` |

**Konsistenz = Stärke:** Gleiche Begriffskombinationen auf Website, Social Profiles, Schema, Meta-Descriptions.

### 18.7 AEO-Metriken (Unified)

| Metrik | Was sie misst | Wie tracken | Zielwert |
|--------|-------------|-------------|----------|
| **AI Citations** | URL als Quelle in AI-Antworten verlinkt | GSC AI-Impressionen + manuell | Steigende Tendenz |
| **Mentions** | Markenname in AI-Antworten genannt | 50+ Queries/Woche manuell prüfen | >20% der relevanten Queries |
| **Share of Voice** | Anteil vs. Wettbewerber in AI-Outputs | Stichproben-Monitoring (Otterly.ai) | >20% in Nische |
| **Sentiment** | Positiv/negativ in AI-Antworten | Antworten screenen | Überwiegend positiv |
| **Zero-Click Impression** | Sichtbarkeit ohne Klick (AI Overviews, Snippets) | GSC Impressions ohne Klicks | Steigende Tendenz |

**Tracking-Workflow (wöchentlich, 30 Min):**

1. **10 Core-Queries** in ChatGPT, Gemini, Perplexity eingeben
2. Ergebnis dokumentieren: Erwähnt? Zitiert? Link? Sentiment?
3. **Vergleich mit Vorwoche** → Trend erkennen
4. Content-Prioritäten anpassen

### 18.8 Community-Validation

| Plattform | Relevanz |
|-----------|----------|
| **Reddit** | Höchste AI-Zitationsquelle (v.a. für ChatGPT und Perplexity) |
| **YouTube** | Video-Snippets in AI-Antworten, Transkript-basierte Zitation |
| **Fachforen** | Nischen-Expert-Content wird als vertrauenswürdig eingestuft |
| **LinkedIn** | Author Authority Signal, unterstützt E-E-A-T |

---

## 19. Häufige Agent-Fehler vermeiden

| Fehler | Korrekte Vorgehensweise |
|--------|------------------------|
| Pauschal 2.000+ Wörter schreiben | SERP-Analyse machen → Content-Länge datenbasiert bestimmen |
| Alle Keywords in H1 packen | 1 Primär-Keyword natürlich im H1, Rest in H2s und Fließtext |
| Schema-Markup nur auf Homepage | Schema auf JEDER Seite, typspezifisch |
| `noindex` statt `nofollow` verwechseln | `noindex` = nicht indexieren, `nofollow` = Links nicht folgen (intern nie nutzen) |
| Alt-Text vergessen bei Icons/Deko | Deko-Bilder: `alt=""` (leer), Content-Bilder: beschreibender Alt |
| Title = H1 kopieren | Thematisch konsistent, aber nicht identisch |
| Alle internen Links mit Exact-Match-Anchors | Anchor-Varianz ist wichtiger als Exact-Match (Zyppy-Studie) |
| Content ohne Datum veröffentlichen | `datePublished` + `dateModified` immer im Schema + sichtbar |
| Canonical vergessen | JEDE Seite braucht einen selbstreferenzierenden Canonical |
| Mobile nur „responsive" machen | Content-Parität, Touch-Targets, Font-Größe, Performance prüfen |

