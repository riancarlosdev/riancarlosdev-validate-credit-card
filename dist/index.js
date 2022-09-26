"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.riancarlosdev = void 0;
const cards_1 = require("./cards");
exports.riancarlosdev = {
    executeCC: (number) => {
        const index = Object.values(cards_1.cards).findIndex((i) => i.test(number));
        if (index === null) {
            return false;
        }
        return {
            name: Object.keys(cards_1.cards)[index],
            image: Object.values(cards_1.images)[index],
        };
    },
    getCC: () => {
        const names = Object.keys(cards_1.images);
        const imagex = Object.values(cards_1.images);
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
