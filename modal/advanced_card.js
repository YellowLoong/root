export default class Advanced_card {
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

    isHugeInfluence(){
        if(this.influence > 6){
            return true;
        }
        return false;
    }
}