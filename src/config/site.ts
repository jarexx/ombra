export const siteConfig = {
  name: "Jarek",
  title: "Portfolio – graphic/web designer",
  description:
    "Jarek Sikorski's Portfolio – graphic/web designer.",
  locale: "en_US",
  defaultImage: "/og.png",
  address: {
    street: "Główna 12",
    locality: "Otwock",
    postalCode: "05-400",
    country: "Poland",
  },
  phone: "+48 607 738 846",
  email: "[EMAIL_ADDRESS]",
  nav: [
    { label: "Concept", href: "#concept" },
    { label: "Menu", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Sala", href: "#interior" },
  ],
  reservation: {
    formAction: "mailto:hello@jarek.design",
    method: "post",
    note: "Replace the mailto action with your booking provider, form endpoint, or server action when going live.",
  },
  hours: {
    serviceDays: "Mon - Fri",
    seatings: "9:00 and 17:00",
    closed: "Sat, Sun",
    schema: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "23:45",
    },
  },
  restaurant: {
    priceRange: "EUR245",
    cuisine: ["Italian", "Seasonal tasting menu", "Wood-fired"],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Journal", href: "https://substack.com/" },
    { label: "Spotify", href: "https://open.spotify.com/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
