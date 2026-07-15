export const siteConfig = {
  name: "JarekDesign",
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
  email: "hello@jarek.design",
  nav: [
    { label: "What is SVG?", href: "#svg" },
    { label: "Offer", href: "#offer" },
    { label: "About Me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
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
      closes: "17:00",
    },
  },
  restaurant: {
    priceRange: "$500",
    cuisine: ["Graphic/Web Design"],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/jarek.design" },
    // { label: "Journal", href: "https://substack.com/" },
    // { label: "Spotify", href: "https://open.spotify.com/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
