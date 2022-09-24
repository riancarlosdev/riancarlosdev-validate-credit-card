"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.riancarlosdev = void 0;
const cards_1 = require("./cards");
exports.riancarlosdev = {
    executeCC: (number) => {
        const index = Object.values(cards_1.cards).findIndex((i) => i.test(number));
        if (index) {
            return false;
        }
        return {
            name: Object.keys(cards_1.cards)[index],
            image: Object.values(cards_1.images)[index],
        };
    },
};
