import { cardList } from "./data/advanced_card_list.js";
import Advanced_card_vagabond from '../modal/advanced_card_vagabond.js';

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





