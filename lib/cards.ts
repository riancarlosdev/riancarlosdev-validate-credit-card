export const cards = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Mastercard: /^5[1-5][0-9]{14}/,
  Amex: /^3[47][0-9]{13}/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  JCB: /^(?:2131|1800|35\d{3})\d{11}/,
};

export const images = {
  Visa: "https://i.ibb.co/F3L5jkq/visa.jpg",
  Mastercard: "https://i.ibb.co/jGZpcM2/Master-Card-Logo-svg.png",
  Amex: "https://i.ibb.co/xJ3jT1w/amex.jpg",
  DinersClub: "https://i.ibb.co/jbQ04tQ/din.png",
  Discover: "https://i.ibb.co/YbzgyFD/disc.png",
  JCB: "https://i.ibb.co/SdV468n/JCB-logo-svg.png",
};
