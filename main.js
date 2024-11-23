class Advanced_card {
    constructor(name, imgUrl, influence) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.influence = influence;
    }

    getName() {
        return this.name;
    }

    // Setter cho 'name'
    setName(newName) {
        this.name = newName;
    }

    // Getter cho 'imgUrl'
    getImgUrl() {
        return this.imgUrl;
    }

    // Setter cho 'imgUrl'
    setImgUrl(newImgUrl) {
        this.imgUrl = newImgUrl;
    }

    // Getter cho 'influence'
    getInfluence() {
        return this.influence;
    }

    // Setter cho 'influence'
    setInfluence(newInfluence) {
        this.influence = newInfluence;
    }

    isHugeInfluence() {
        if (this.influence > 6) {
            return true;
        }
        return false;
    }
}

class Advanced_card_vagabond extends Advanced_card {
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


var vagaId_1 = Math.floor(Math.random() * 9);

do {
    var vagaId_2 = Math.floor(Math.random() * 9);
} while (vagaId_1 == vagaId_2)

const cardList = [
    new Advanced_card("Eyrie Dynasties", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-eyrie.webp", 7),
    new Advanced_card("Marquise de Cat", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-marquise.webp", 10),
    new Advanced_card("Woodland Alliance", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-woodland.webp", 3),
    new Advanced_card_vagabond("Vagabond", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-vagabond.webp", 2.5, 1, vagaId_1),
    new Advanced_card_vagabond("Vagabond", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-vagabond.webp", 2.5, 2, vagaId_2),
    new Advanced_card("Riverfolk Company", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-riverfolk.webp", 5),
    new Advanced_card("Lizard Cult", "https://ledercardcdn.seiyria.com/cards/root/en-US/adset-setup-cult.webp", 2),
]



var adsetBtn = document.querySelector(".adset_btn");
var adsetCardEles = document.querySelectorAll(".adset_list li");
var adsetListEle = document.querySelector(".adset_list");
var adsetCont = document.querySelector(".adset_container");

var poolList = {};
var hasHuge = false;
function sumOfHuge() {
    var res = 0;
    cardList.forEach(function (item) {
        if (item.influence >= 7) {
            res++;
        }
    })
    return res;
}

function randomHugePool() {
    poolList = {}
    var gacha = Math.floor(Math.random() * sumOfHuge());
    poolList[gacha] = cardList[gacha];
}

function randomPool(num) {

    randomHugePool();
    for (var i = 0; i < num; i++) {
        do {
            var gacha = Math.floor(Math.random() * cardList.length);

        } while ((poolList.hasOwnProperty(gacha))
        || gacha == 5 && poolList.hasOwnProperty(3) && poolList.hasOwnProperty(4)
            || [3, 4].includes(gacha) && poolList.hasOwnProperty(5) && (poolList.hasOwnProperty(3) || poolList.hasOwnProperty(4))
        );
        poolList[gacha] = cardList[gacha];
    }

    // console.log(poolList);
    var cnt = 1;
    Object.entries(poolList).forEach(function ([key, value]) {
        var child = document.createElement("li");
        child.classList.add("img_wrap");
        child.setAttribute("value", key);
        child.setAttribute("style", `--i: ${cnt}s`);
        cnt += 1
        child.innerHTML = `<div class="adset_item">
            <img src="${value.imgUrl}">
            <img class="adset_selected" src="./image/selected.png" alt="">
        </div>
        `
        if (value instanceof Advanced_card_vagabond) {
            child.innerHTML += `<div class="adset_item_avatar img_wrap">
                <img src="${value.character.imgUrl}" alt=""> 
            </div>`;
        }

        ;
        adsetListEle.appendChild(child);
    });

    var adsetCardEles = document.querySelectorAll(".adset_list li");
    adsetCardEles.forEach(function (adsetCardEle) {
        var key = adsetCardEle.getAttribute("value");
        if (poolList[key].influence < 7) {
            adsetCardEle.classList.add("invalid");
        }

        adsetCardEle.onclick = function (e) {
            var _this = this;
            if (!adsetCardEle.classList.contains("invalid")) {
                adsetCardEle.classList.add("invalid");
                adsetCardEle.classList.add("chosen");
            }

            if (poolList[key].influence >= 7 && !hasHuge) {
                hasHuge = true;
                adsetCardEles.forEach(function (adsetCardEle) {
                    if (_this != adsetCardEle) {
                        adsetCardEle.classList.remove("invalid");
                    }
                })
            }

        }
    })
}

adsetBtn.onclick = function (e) {
    adsetBtn.classList.remove("show");
    adsetCont.classList.add("show");
    randomPool(4);
}





