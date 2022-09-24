export const cards = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Mastercard: /^5[1-5][0-9]{14}/,
  Amex: /^3[47][0-9]{13}/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  JCB: /^(?:2131|1800|35\d{3})\d{11}/,
};

export const images = {
  Visa: "https://i.ibb.co/ySkD7y9/visa.jpg",
  Mastercard: "https://i.ibb.co/m8LQrkZ/master.png",
  Amex: "https://i.ibb.co/pwZmyKS/amex.jpg",
  DinersClub: "https://i.ibb.co/6sZc9d7/diners.jpg",
  Discover: "https://i.ibb.co/f4TqvLn/discover.jpg",
  JCB: "https://i.ibb.co/MVYfZfp/jcb.png",
};
