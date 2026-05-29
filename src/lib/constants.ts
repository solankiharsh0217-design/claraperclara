export const SITE = {
  name: "ClaraPerClara",
  fullName: "Clara Per Clara Snc Di Clara Lombardi & C",
  tagline: "Il tempio della bellezza dove riscoprire sé stessi",
  quote: "Amo creare guidata dalla mia sensibilità, trasformando in immagine i miei sogni",
  phone: "+39 339 752 5666",
  phoneLink: "tel:+393397525666",
  phoneSecondary: "+39 030 3757948",
  phoneSecondaryLink: "tel:+390303757948",
  email: "claraperclara@yahoo.it",
  emailLink: "mailto:claraperclara@yahoo.it",
  whatsapp: "https://wa.me/393397525666",
  address: "Via Dante, 13, 25122 Brescia BS, Italy",
  mapsUrl: "https://maps.google.com/?q=Via+Dante+13+Brescia+Italy",
  website: "www.claraperclara.it",
  founded: "1985",
  hours: {
    tuesday: "08:30 - 18:00",
    wednesday: "08:30 - 18:00",
    thursday: "08:30 - 18:00",
    friday: "08:30 - 18:00",
    saturday: "08:30 - 18:00",
    sunday: "Chiuso",
    monday: "Chiuso",
  },
  social: {
    instagram: "https://www.instagram.com/clara_per_clara_hair_brescia/",
    facebook: "https://www.facebook.com/claraperclarabrescia",
  },
} as const;

export const SERVICES = [
  {
    title: "Hair Extensions",
    description: "Trasformazione completa con extension di alta qualità per un volume e una lunghezza naturali.",
    icon: "Scissors",
  },
  {
    title: "Hair Weaves",
    description: "Tecniche avanzate per un risultato impeccabile che si integra perfettamente con i tuoi capelli.",
    icon: "Sparkles",
  },
  {
    title: "Taglio & Styling",
    description: "Tagli personalizzati studiati per valorizzare la tua bellezza naturale e il tuo stile unico.",
    icon: "ScissorsLineDashed",
  },
  {
    title: "Colorazione",
    description: "Colori vivaci e sfumature naturaliCreate con prodotti professionali di alta gamma.",
    icon: "Palette",
  },
  {
    title: "Trattamenti Capillari",
    description: "Cura e ricostruzione del capello con trattamenti Medavita Bond Repair e prodotti premium.",
    icon: "Droplets",
  },
  {
    title: "Estetica",
    description: "Trattamenti viso e corpo personalizzati per una pelle luminosa e un relax totale.",
    icon: "Heart",
  },
  {
    title: "Make-up Professionale",
    description: "Make-up artistico per ogni occasione: dal look quotidiano allo styling da cerimonia.",
    icon: "Brush",
  },
  {
    title: "Consulenza Stile",
    description: "Analisi personalizzata del tuo look per trovare lo stile che ti rappresenta meglio.",
    icon: "Gem",
  },
] as const;

export const STATS = [
  { value: "40+", label: "Anni di Esperienza" },
  { value: "158+", label: "Recensioni 5 Stelle" },
  { value: "4.9", label: "Valutazione Media" },
  { value: "5000+", label: "Clienti Soddisfatti" },
] as const;

export const REVIEWS = [
  {
    name: "Debora S.",
    text: "Accoglienza e calore ti mettono immediatamente a tuo agio. Dopo ore di trattamento grazie alle sapienti mani di Clara ne sono uscita con un look totalmente nuovo, taglio e colore entrambi stupendi e azzeccatissimi.",
    rating: 5,
  },
  {
    name: "Cliente Google",
    text: "Professionalità rara e passione vera. Da Clara per Clara ti senti seguita con un'attenzione ormai difficile da trovare. Un team fantastico che consiglio a chi non si accontenta e cerca competenze tecniche e stilistiche d'alto livello.",
    rating: 5,
  },
  {
    name: "Cliente Fresha",
    text: "Decisamente il migliore salone a Brescia. Se vuoi sentirti coccolata e uscire soddisfatta del risultato è il luogo perfetto per te. Grazie Monica per aver riportato vita ai miei capelli.",
    rating: 5,
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
] as const;
