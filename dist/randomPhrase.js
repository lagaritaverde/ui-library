"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPhrase = void 0;
const randomPhrase = () => {
    const phrases = [
        'Hello there, capitain!',
        'Great wheather today.',
        'Happy, happy, happy',
    ];
    console.log('====================================');
    console.log(Math.floor(Math.random() * phrases.length + 0));
    console.log('====================================');
    return phrases[Math.floor(Math.random() * phrases.length + 0)];
};
exports.randomPhrase = randomPhrase;
console.log('====================================');
console.log((0, exports.randomPhrase)());
console.log('====================================');
