# ClaraPerClara - Project Context

## Business Information

- **Name:** ClaraPerClara (Clara Per Clara)
- **Full Name:** Clara Per Clara Snc Di Clara Lombardi & C
- **Tagline:** "Il tempio della bellezza dove riscoprire sé stessi"
- **Quote:** "Amo creare guidata dalla mia sensibilità, trasformando in immagine i miei sogni"
- **Founded:** 1985 (40+ years)
- **Owner:** Clara Lombardi
- **Category:** Hair Salon & Beauty Atelier
- **Services:** Hair (extensions, weaves, cuts, color), Aesthetics (basic/advanced), Makeup

## Contact Details

- **Address:** Via Dante, 13, 25122 Brescia BS, Italy
- **Phone (Primary):** +39 339 752 5666
- **Phone (Landline):** +39 030 3757948
- **Email:** claraperclara@yahoo.it
- **Website:** www.claraperclara.it
- **Instagram:** @clara_per_clara_hair_brescia (~5K followers)
- **Facebook:** facebook.com/claraperclarabrescia (~6.2K followers)
- **Google Maps:** https://maps.google.com/?q=Via+Dante+13+Brescia+Italy
- **WhatsApp:** https://wa.me/393397525666

## Opening Hours

- **Monday:** Chiuso (Closed)
- **Tuesday:** 08:30 - 18:00
- **Wednesday:** 08:30 - 18:00
- **Thursday:** 08:30 - 18:00
- **Friday:** 08:30 - 18:00
- **Saturday:** 08:30 - 18:00
- **Sunday:** Chiuso (Closed)

## Reviews & Rating

- **Google Rating:** 4.9/5 (158 reviews)
- **Facebook:** 96% recommend (111 reviews)
- **Key themes:** Professional excellence, personal attention, warm atmosphere, high-end technique

## Design Choices

### Style: Modern Cream Elegant

- **Primary Color:** #4A1942 (Deep Plum)
- **Secondary Color:** #6B2D6B (Plum Light)
- **CTA/Accent:** #C9A96E (Gold)
- **Background:** #FDF8F0 (Warm Cream)
- **Text Primary:** #2D1B2D
- **Text Secondary:** #5C4A5C

### Typography

- **Headings:** Cormorant (serif) - elegant, luxury, sophisticated
- **Body:** Montserrat (sans-serif) - clean, modern, readable

### Design Philosophy

- Warm cream/ivory tones with deep plum accents for classic Italian elegance
- Gold accents for luxury feel
- Cormorant serif for headings gives timeless, editorial quality
- Floating decorative orbs and subtle animations throughout
- Preloader with brand logo on plum background

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS @theme)
- **Icons:** Lucide React + custom SVG for Instagram/Facebook
- **Fonts:** Google Fonts via next/font/google
- **Images:** Unsplash stock (placeholder, original site was down)

## File Structure

```
sites/claraperclara/
├── public/
│   └── images/
│       ├── Logo-Clara-per-Clara-Hair-Beauty-300x70px1.png  (actual brand logo)
│       ├── hero.jpg
│       ├── salon-interior.jpg
│       ├── hair-styling.jpg
│       ├── hair-color.jpg
│       ├── hair-treatment.jpg
│       ├── beauty-makeup.jpg
│       ├── salon-chair.jpg
│       ├── team-1.jpg, team-2.jpg, team-3.jpg
├── src/
│   ├── app/
│   │   ├── globals.css              (design tokens + animations)
│   │   ├── layout.tsx               (root layout with preloader, scroll progress, floating decorations)
│   │   ├── page.tsx                 (homepage)
│   │   ├── chi-siamo/page.tsx       (about page)
│   │   ├── servizi/page.tsx         (services page)
│   │   └── contatti/page.tsx        (contact page)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           (fixed navbar, transparent→solid, active link, mobile slide-in)
│   │   │   └── Footer.tsx           (footer with logo, links, hours, social)
│   │   └── ui/
│   │       ├── ScrollReveal.tsx      (IntersectionObserver animation wrapper)
│   │       ├── WhatsAppButton.tsx    (floating WhatsApp FAB)
│   │       ├── Preloader.tsx         (brand loading screen)
│   │       ├── ScrollProgress.tsx    (top progress bar)
│   │       ├── FloatingDecorations.tsx (background decorative orbs)
│   │       ├── CountingNumber.tsx    (animated number counter)
│   │       └── SocialIcons.tsx       (custom Instagram/Facebook SVG icons)
│   └── lib/
│       └── constants.ts             (SITE data, SERVICES, STATS, REVIEWS, NAV_LINKS)
```

## Key Features

1. **Preloader** - Elegant brand loading screen with logo, fades out after 2.4s
2. **Scroll Progress** - Gold progress bar at top showing scroll position
3. **Floating Decorations** - Subtle animated orbs in background
4. **Navbar** - Transparent over hero, solid cream on scroll, active link underline, mobile slide-in from right
5. **Hero** - Full-screen with gradient overlays, staggered text reveal, floating decorative dots
6. **Stats** - Animated counting numbers (IntersectionObserver triggered)
7. **Services Grid** - Equal-height cards with hover gradient border, arrow indicator
8. **Quote Section** - Large decorative quotation marks, italic serif quote
9. **CTA Banner** - Parallax image with animated gradient overlay, floating elements
10. **Gallery** - Masonry-style layout with cinematic hover reveals
11. **Reviews** - Cards with decorative quotes, star ratings, avatar initials
12. **Contact** - Info cards with hover icon effect, Google Maps embed
13. **WhatsApp FAB** - Floating button, green, always visible

## Animations (globals.css)

- `fade-in-up`, `fade-in`, `slide-in-left`, `slide-in-right`, `scale-in`
- `float`, `float-slow` - decorative element floating
- `pulse-glow` - CTA button glow
- `gradient-shift` - animated gradient backgrounds
- `clip-reveal` - clip-path based reveal
- `shimmer` - subtle shimmer on images
- `hero-text-reveal` - clip-path text reveal for hero
- `dot-float` - floating decorative dots
- `border-glow` - animated border color

## Deployment

- **GitHub:** https://github.com/solankiharsh0217-design/claraperclara
- **Vercel:** https://claraperclara.vercel.app

## Notes

- Original website (claraperclara.it) was down/timing out during build - used Unsplash stock images as placeholders
- Logo was saved manually by user to `public/images/Logo-Clara-per-Clara-Hair-Beauty-300x70px1.png`
- Instagram/Facebook icons don't exist in lucide-react - use custom SVG components from `SocialIcons.tsx`
- JPG logos on dark backgrounds: use `mix-blend-screen` CSS approach
- `Facebook` and `Instagram` named exports from lucide-react don't exist - always use custom SVGs

## Verification Checklist

- [x] `npm run build` passes with 0 errors
- [x] All 4 pages render (Home, Chi Siamo, Servizi, Contatti)
- [x] Navbar scroll effect works (transparent → solid)
- [x] Mobile hamburger menu works (slide-in from right)
- [x] WhatsApp button appears and links correctly
- [x] Phone numbers use `tel:` links
- [x] Email uses `mailto:` links
- [x] Logo visible on both dark and light backgrounds
- [x] Scroll animations work (ScrollReveal + IntersectionObserver)
- [x] Footer has all contact info
- [x] No console errors
