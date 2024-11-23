import Advanced_card from "./advanced_card.js";

export default class Advanced_card_vagabond extends Advanced_card {
    static characterList = [
        {
            name: "Thief",
            imgUrl: "https://ledergames.com/cdn/shop/files/The-Vagabond_6206fe8d-03e4-413a-a1cd-490979470aca.png?v=1635211915"
        },
        {
            name: "Tinker",
            imgUrl: "https://cf.geekdo-images.com/ePd-9iKLjnqNtDDPBsRjrA__imagepage/img/jG5jsdDN3unrHEjjMy8_ooLkkQs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3810244.jpg"
        },
        {
            name: "Ranger",
            imgUrl: "https://i.kickstarter.com/assets/018/930/231/91ee641373ee11b01bbc7cd940c1e61c_original.jpg?fit=scale-down&origin=ugc&q=50&v=1509034069&width=700&sig=R7a7Bc8IGo%2BpJptrSEFVcfl7w6WSl9MJx%2FfCkcX07EM%3D"
        },
        {
            name: "Vagrant",
            imgUrl: "https://i.pinimg.com/control2/736x/04/90/86/0490863e991c30f89425f3cb60802318.jpg"
        },
        {
            name: "Arbiter",/* x */
            imgUrl: "https://i.pinimg.com/control2/736x/1f/ae/eb/1faeeba2273c903c134a69e9ac3229e6.jpg"
        },
        {
            name: "Scoundrel",
            imgUrl: "https://i.pinimg.com/736x/93/0a/9e/930a9e215516dbe66179a63665b8f1fa.jpg"
        },
        {
            name: "Adventurer",
            imgUrl: "https://ledergames.com/cdn/shop/files/RootVagabondPack_Adventurer.png?v=1647536487&width=1080"
        },
        {
            name: "Ronin",
            imgUrl: "https://ledergames.com/cdn/shop/files/RootVagabondPack_Ronin.png?v=1647536487&width=1080"
        },
        {
            name: "Harrier",
            imgUrl: "https://ledergames.com/cdn/shop/files/RootVagabondPack_Harrier.png?v=1647536487&width=1080"
        },
    ];

    constructor(name, imgUrl, influence, index, charId) {
        super(name, imgUrl, influence);
        this.index = index;
        this.character = Advanced_card_vagabond.characterList[charId];
    }
}