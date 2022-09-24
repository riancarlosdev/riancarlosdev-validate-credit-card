import { cards, images } from "./cards";

interface riancarlosdev_I {
  executeCC(number: string):
    | false
    | {
        name: string;
        image: string;
      };
}

export const riancarlosdev: riancarlosdev_I = {
  executeCC: (number: string) => {
    const index = Object.values(cards).findIndex((i) => i.test(number));

    if (index) {
      return false;
    }

    return {
      name: Object.keys(cards)[index],
      image: Object.values(images)[index],
    };
  },
};
