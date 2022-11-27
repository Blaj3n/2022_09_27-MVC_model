class AdatModell {
    #ertek; //privát adattag
    constructor() {
        this.#ertek = 22; //értékadás
    }
    //függvény ami, duplikálja az értéket
    setDuplicateErtek() {
        this.#ertek *= 2;
        return this.#ertek;
    }
}

export default AdatModell;