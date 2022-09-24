import { riancarlosdev_I } from "..";
import { cards, images } from "./cards";

export const riancarlosdev: riancarlosdev_I = {
  executeCC: (number: string) => {
    const index = Object.values(cards).findIndex((i) => i.test(number));

    if (index === null) {
      return false;
    }

    return {
      name: Object.keys(cards)[index],
      image: Object.values(images)[index],
    };
  },
};
