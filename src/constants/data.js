import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "₹1560",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "₹1590",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "₹1740",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "₹2331",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "₹1260",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "₹900",
    tags: "Aperol | Villa Marchesi | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "₹1600",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "₹1800",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "₹3180",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "₹3640",
    tags: "Gin | Sweet Vermou | Campari | Orange flv",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

// eslint-disable-next-line
export default { wines, cocktails, awards };
