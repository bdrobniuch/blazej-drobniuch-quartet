# Błażej Drobniuch Quartet - Master Website Specification

## 1. Technical & Architectural Requirements
- **Tech Stack (STRICT):** Pure HTML, vanilla CSS, and vanilla JavaScript ONLY. Do NOT use any frameworks or build tools (no React, no Next.js, no Tailwind CSS, no npm dependencies). You must rely on modern native CSS features (Grid, Flexbox, custom properties, CSS variables, `@keyframes` for Ken Burns and fluid gradients). For scroll-based fade-in and transition effects, strictly use the native vanilla JavaScript `Intersection Observer API`. Implement the ECM 'film grain' overlay using lightweight CSS/SVG data-URI techniques, ensuring high performance. The goal is a highly maintainable, standalone codebase.
- **SEO, Accessibility & Semantic Structure:** The generated code must be production-ready on the first iteration. Use highly semantic HTML5
- **Mobile-First & Responsive Design:** The website must be fully responsive and perfectly scaled for mobile devices. Venue managers often check websites on their phones on the go, so the mobile layout must be flawless, fast, and easy to navigate.
- **Design, Vibe & Animations (ECM Records Aesthetic):** Elegant, minimalist, and deeply inspired by ECM Records cover art. The CSS and JavaScript must include subtle, atmospheric animations. Use CSS keyframes for slow-moving, fluid background gradients (muted colors, deep greys, washed-out blues). Implement a subtle "film grain" or noise overlay using pure CSS/SVG filters. Background images should feature a very slow, continuous pan or zoom (Ken Burns effect) to create a sense of space and melancholy. The animations must be highly stylized, seamless, and non-distracting, perfectly matching the vibe of contemporary European jazz.
- **Languages:** The website should be generated in both Polish and English. It must include a language toggle/switcher to allow users to select their preferred language, with Polish set as the default. The AI should professionally translate all provided Polish texts into English for the dual-language setup.
- **Contact Form:** Embedded Google Forms iframe for handling booking requests and general inquiries directly on the site. Use the following code:
  `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfs8z9_Ab3gWICOR7NXiY0HZhUlJd8-riAv6WyTOXL9Ni853w/viewform?embedded=true" width="640" height="1145" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>`

## Hero Section & User Experience (First Impression)
The website must be aggressively optimized for conversion (booking) and instant professional credibility aimed at venue managers. 
- **Sticky Navigation:** A global "Booking & Kontakt" button must be constantly visible (e.g., in a sticky header or a floating action button on mobile) so the contact form is always exactly one click away, regardless of scroll depth.
- **Mobile Experience:** On smartphones, the first screen must immediately convey premium quality. The background image must scale perfectly (keeping the main subject in focus), typography must be highly legible, and the CTA buttons must be large enough for easy thumb-tapping. The entire layout should scream "professionalism" the second it loads.
- **Hero Image/Video:** Use a high-quality live concert photo from the `images/concerts/piec-art-krakow-2026-07-26/` directory as a full-screen, atmospheric background (dimmed slightly to ensure text readability). *Crucial detail for AI:* The folder contains both color and grayscale photos. You must select the one that best matches the ECM color palette (or use CSS filters to perfectly match it to the muted, moody color scheme of the site). Consider adding a "Play" icon overlay linking to one of the live videos.
- **Value-Driven Headline:** "Contemporary European Acoustic Jazz" with a subheadline emphasizing reliability and top-tier repertoire: "Profesjonalna oprawa muzyczna dla wymagających scen. Hołd dla legend polskiego jazzu i estetyki ECM." (Translate to English for the EN version).
- **Immediate Social Proof:** Just below the main headline, highlight the musicians' pedigree and the recent live session: "Muzycy kwartetu współtworzyli brzmienie takich scen jak m.in. Piwnica Pod Baranami, Harris Piano Jazz Bar czy Klub Piec Art."
- **Dual Call-to-Action (CTA):** Two main buttons on the hero screen: 
  1. "Zarezerwuj koncert" (anchors instantly to the Contact Form).
  2. "Obejrzyj Live Session (Piec Art)" (anchors directly to the YouTube videos section).

## Band Identity
Contemporary European acoustic jazz quartet, formed in December 2025. Exploring modern jazz, ECM aesthetics, and contemporary Polish jazz compositions.

## Value Proposition / Main Projects (Homepage Highlights)
The homepage should prominently feature two main projects (value propositions) that the band offers, functioning as clickable cards or sections that reveal more details:

**1. Tribute to Tomasz Stańko**
*   **Short Teaser:** Projekt dedykowany twórczości wybitnego trębacza i wizjonera, Tomasza Stańko. 
*   **Expanded Details:** Koncert stanowiący głęboki hołd dla unikalnego brzmienia i estetyki Tomasza Stańko. Nasz kwartet sięga po kompozycje mistrza, eksplorując ich słowiańską melancholię, liryzm oraz przestrzenne, improwizowane formy charakterystyczne dla europejskiego jazzu i wytwórni ECM. To propozycja idealna dla wymagającej publiczności, ceniącej głębię i emocjonalny przekaz w muzyce improwizowanej.

**2. Tribute to Polish Jazz**
*   **Short Teaser:** Przekrój przez to, co najlepsze w historii i współczesności polskiego jazzu.
*   **Expanded Details:** Wyjątkowy program koncertowy prezentujący bogactwo polskiej szkoły jazzu. W repertuarze tego projektu znajdują się nieśmiertelne, światowej klasy kompozycje takich legend jak Krzysztof Komeda, Victor Young, Bronisław Kaper oraz Jan Ptaszyn Wróblewski. Całość dopełniają utwory współczesnych mistrzów polskiej sceny: Marcina Wasilewskiego, Macieja Obary i Tomasza Stańko. Koncert ten to fascynująca podróż łącząca tradycję z nowoczesnym, europejskim brzmieniem.

## Lineup & Bios

**Błażej Drobniuch – fortepian/syntezatory**
Aktywny muzyk na scenie krakowskiej i barcelońskiej od 2011 roku, absolwent Krakowskiej Szkoły Jazzu i Muzyki Rozrywkowej, który swoje wykształcenie poszerzał również w Taller de Musics w Barcelonie. Ma na swoim koncie liczne koncerty w krakowskich i ogólnopolskich klubach muzycznych, m.in. Piwnicy pod Baranami, Klubie Piec Art, Coltrane, Lizard King, Klubie Gwarek, Chicago Live, Jazzdze czy Starym Porcie, a także występy z wieloma różnymi składami muzycznymi. Realizuje się również jako twórca elektronicznych pejzaży dźwiękowych w ramach autorskiego projektu Zero Volume. Gra szeroki repertuar i swobodnie porusza się w wielu gatunkach, łącząc klasyczne brzmienie fortepianu jazzowego z nowoczesnymi syntezatorami. Ma doświadczenie zarówno w solowych i kameralnych występach w jazz barach czy restauracjach, jak i w roli lidera większych zespołów muzycznych. Swoje umiejętności rozwijał również podczas licznych międzynarodowych kursów i warsztatów jazzowych, m.in. na Teneryfie, w Maladze, Walencji, Begues oraz wielokrotnie na International Summer Jazz Academy w Krakowie.

**Kuba Soczek – trębacz**
Aktywny muzyk sceniczny od kilku lat, obecnie student Akademii Muzycznej im. Krzysztofa Pendereckiego w Krakowie. Ma na swoim koncie liczne koncerty w krakowskich klubach i na scenach muzycznych, m.in. Piwnicy pod Baranami, Harris Piano Jazz Bar oraz Piec Art Szewska, a także występy z big bandami i różnymi składami muzycznymi. Dwukrotnie występował w Harris Piano Jazz Bar w ramach projektu Snarky Puppy Tribute. Gra szeroki repertuar i swobodnie porusza się w wielu gatunkach muzycznych, szczególnie jazzie, funku, soulu i muzyce rozrywkowej. Ma doświadczenie zarówno w kameralnych składach klubowych, jak i większych zespołach oraz koncertach plenerowych. Swoje umiejętności rozwijał również podczas licznych kursów i warsztatów jazzowych.

**Kacper Działdowski – kontrabas**
Po trwającym ok. dekadę epizodzie w death metalu, w trakcie którego jako basista nagrał dwie studyjne płyty i zagrał niezliczone koncerty na scenach klubowych i festiwalowych w środkowej Europie, Kacper zdecydował się podjąć subtelniejszych artystycznych wyzwań. Zmierzywszy się z akustyczną gitarą fingerstyle, odkrył zamiłowanie do bogatej harmonii, co ostatecznie doprowadziło go do jazzu. Po jakimś czasie powrócił do gitary basowej, na której czuł się swobodnie i na którą było większe zapotrzebowanie. Zdobywszy na tym instrumencie formalne wykształcenie w Krakowskiej Szkole Jazzu i Muzyki Rozrywkowej, zdecydował się rozszerzyć swój arsenał o kontrabas, ucząc się od wytrawnych specjalistów krakowskiej sceny jazzowej. Dziś stanowi niezachwiany fundament sekcji rytmicznej kwartetu, wnosząc do niej ogromną precyzję i otwartość na różnorodne formy muzyczne.

**Kuba Berlin – perkusja**
Aktywny muzyk sceniczny, perkusista i kompozytor, obecnie student Akademii Muzycznej w Krakowie na kierunku jazz i muzyka improwizowana. Ukończył fakultet z aranżacji i kompozycji. Blisko związany z krakowską sceną jazzową, występując na scenach takich klubów jak Jazz Club u Muniaka, Klub Pod Jaszczurami, Klub Gwarek czy Klub Studio. Koncertował na scenach w Polsce, Francji, Finlandii, Estonii i na Litwie. Jego wszechstronność i międzynarodowe doświadczenie pozwalają mu swobodnie poruszać się w otwartych formach współczesnego jazzu, nadając zespołowi głęboki i niepowtarzalny puls.

## Technical Rider
- **Trumpet:** Musician provides their own microphone.
- **Piano:** Acoustic piano strongly preferred (mic'd and amplified by the venue). If an acoustic piano is unavailable, the band can provide an electric piano.
- **Double Bass:** Venue backline (bass amplifier) is strongly preferred. If necessary, the band can provide their own bass amplifier upon prior arrangement.
- **Drums:** Prefer venue backline (drum shell pack and hardware); drummer will bring their own cymbals. If necessary, the band can provide a full drum kit upon prior arrangement.
- **PA & Monitoring:** 
  - A minimum of 1 stage monitor is requested for the band.
  - The venue's PA system must have the capacity to amplify the piano, double bass, and trumpet.

## Upcoming Concerts


## Past Concerts
- **2026-07-26** – Piec Art Acoustic Jazz Club, Kraków

## Photos Directory
- `images/concerts/piec-art-krakow-2026-07-26/` (featuring live shots from Piec Art Acoustic Jazz Club on July 26, 2026)
- `images/band-members/`
  - `blazej-drobniuch.jpg`
  - `kuba-soczek.jpeg`
  - `kacper-dzialdowski.jpg`
  - `kuba-berlin.jpeg`

## Media / Videos Section (Live at Piec Art)
- Night Train to You (Marcin Wasilewski) - https://youtu.be/-TSlHHmTCYw
- Euforila (Tomasz Stańko) - https://youtu.be/7US985dAuNo
- Glimmer of Hope (Marcin Wasilewski) - https://youtu.be/vxuFP-Xwrq4
- Celina (Tomasz Stańko) - https://youtu.be/FgKs2QfFlXk