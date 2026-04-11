# Steinegger Fahrzeugaufbereitung - Technical & Contextual Overview for SEO Agent

## 1. Projekt-Überblick & Konzept
Diese Website repräsentiert "Steinegger Fahrzeugaufbereitung", einen Premium Auto-Detailing Service in Nettelkofen (bei Grafing/München). Der Fokus liegt auf hochwertiger, wertsteigernder Fahrzeugpflege (Keramikversiegelungen, Leasingrückgabe-Aufbereitung, Innenraum-Tiefenreinigung).

*   **Wichtige Abgrenzung (Bitte bei allen SEO-Texten einhalten):**
    Das Unternehmen bietet **KEINE Lackierarbeiten, KEIN Spot-Repair und KEINE tiefe Kratzerbeseitigung** an. Formulierungen wie "Kratzer entfernen" oder "lackieren" sind strikt untersagt. Geeignete Alternativen für SEO sind: Hochglanzpolitur, Lackaufbereitung, intensive Oberflächenreinigung, Swirl-Reduzierung (Mikrokratzer abmildern).

## 2. Technische Architektur (Next.js App Router)
Die Website basiert auf dem modernen **Next.js App Router (`src/app`)** als React Server Components (RSC) für optimales Initial Load Rendering und bestmögliche Core Web Vitals (SEO relevant).

*   **Framework:** Next.js 14+ (TypeScript).
*   **Styling:** Custom CSS mit CSS Properties / Variables (`globals.css`) und modularer Architektur. KEIN Tailwind.
*   **Animationen:** `framer-motion` Server- & Client-Components sowie Lenis Smooth Scrolling (`src/components/ui/SmoothScroll.tsx`).
*   **SEO-Base:** Globale Metadata (Title, Description, Graph, Keywords) sind primär in `src/app/layout.tsx` definiert. Individuelle Pages überschreiben bzw. ergänzen diese via `export const metadata`.

## 3. Seitenstruktur & URLs
Für die Keyword-Recherche und On-Page SEO Optimierung sind folgende Routen relevant:

1.  **`/` (Homepage):**
    *   Fokus: Conversion, Vertrauensaufbau, Neuromarketing.
    *   Enthält Bento-Grid-Features, "Leasing-Rückläufer"-Value-Proposition und Übersicht der Services.
2.  **`/leistungen` (Services):**
    *   Fokus: Paket-Struktur (Bronze, Silber, Gold) und Spezialleistungen (Ozon, Keramikversiegelung, Leder).
    *   Zielsetzung: Ausrichtung auf Long-Tail-Keywords (z.B. "Keramikversiegelung München Umland" oder "Geruchsentfernung Auto").
3.  **`/ablauf` (Process & FAQs):**
    *   Fokus: Transparenz ("In 4 Schritten zur Perfektion") und FAQ.
    *   Die FAQs (`src/lib/data.ts`) nutzen `<details>`/`<summary>` (potenzielles Potenzial für FAQ-Schema-Markup im JSON-LD!).
4.  **`/galerie` (Portfolio):**
    *   Fokus: Visueller Proof (Vorher/Nachher-Slider, Asymmetrisches Parallax-Grid).
    *   Performance-Kritisch: Große Bilder, hier muss auf `next/image` Optimierung (WebP/AVIF, korrekte `sizes` Attribute) sowie Alt-Text-Fokus (SEO) geachtet werden.
5.  **`/kontakt`:**
    *   Fokus: Lead Generation (Formular, WhatsApp-Button).

## 4. Aktueller UI/UX-Zustand (Awwwards-Level)
Die Seite wurde mühselig auf "Premium-Editorial"-Level gestaltet. 
*   **Performance:** Animationen werden, wenn möglich, über GPU-beschleunigte CSS-Transforms oder Framer Motion `useScroll` gesteuert. WebGL wurde aufgrund massiver Ladezeit-Beeinträchtigungen (*SEO-Penalty Risiko!*) gezielt entfernt.
*   **Barrierefreiheit & Semantik:** Semantic HTML (`<section>`, `<header>`, `<main>`) wurde etabliert, jedoch kann ein SEO-Agent die Heading-Hierarchie (H1 > H2 > H3) über die gesamte App hinweg nochmal einem strengen Audit unterziehen.

## 5. Leitlinien für den SEO/Content Agenten
*   **Dateien als Referenz:** Lese `src/lib/data.ts` (hält statischen Content & FAQs) und `<Page>.tsx` aus dem `app/`-Ordner aus, um die Hierarchie zu verstehen.
*   **Ladezeiten bewahren:** Wenn du SEO-Fixes vorschlägst, verändere niemals die globalen Scroll- & Framer-Motion Patterns. Next.js `Image` Komponenten dürfen zusätzliche `priority` Flags in First-Viewport-Bereichen (Above the Fold) erhalten.
*   **Strukturierte Daten (Schema.org):** Ein massives offenes Potenzial! Es existiert noch kein JSON-LD Markup für `LocalBusiness`, `FAQPage` oder `Service`. Dies sollte höchste Priorität beim SEO-Ausbau haben!
