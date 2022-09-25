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
  getCC: () => {
    const names = Object.keys(images);
    const imagex = Object.values(images);

    return [
      { name: names[0], image: imagex[0] },
      { name: names[1], image: imagex[1] },
      { name: names[2], image: imagex[2] },
      { name: names[3], image: imagex[3] },
      { name: names[4], image: imagex[4] },
      { name: names[5], image: imagex[5] },
    ];
  },
};
