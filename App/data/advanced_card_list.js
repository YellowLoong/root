import Advanced_card from '../modal/advanced_card.js';
import Advanced_card_vagabond from '../modal/advanced_card_vagabond.js';

var vagaId_1 = Math.floor(Math.random() * 9);

do {
    var vagaId_2 = Math.floor(Math.random() * 9);
} while (vagaId_1 == vagaId_2)

export const cardList = [
    new Advanced_card("Eyrie Dynasties", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-eyrie.webp", 7),
    new Advanced_card("Marquise de Cat", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-marquise.webp", 10),
    new Advanced_card("Woodland Alliance", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-woodland.webp", 3),
    new Advanced_card_vagabond("Vagabond", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-vagabond.webp", 2.5, 1, vagaId_1),
    new Advanced_card_vagabond("Vagabond", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-vagabond.webp", 2.5, 2, vagaId_2),
    new Advanced_card("Riverfolk Company", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-riverfolk.webp", 5),
    new Advanced_card("Lizard Cult", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-cult.webp", 2),
]