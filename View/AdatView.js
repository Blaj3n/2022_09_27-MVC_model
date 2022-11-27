class AdatView {
    constructor(adat, szuloelem) {
        this.elem = szuloelem; //HTML DOM elemre mutat
        this.elem = adat;
        //this.elem.text(adat);
        this.setErtek(this.adat)
    }

    //az eltárolt adatot az AdatController let-ben kiírjuk a View-ba
    //módosítja a saját adattag értékét, illetve berakja a HTML elembe
    setErtek(adat) {
        this.elem = adat;
        this.elem.text(this.adat);
    }
}

export default AdatView;