//fog kommunikálni a Modelllel és a View-val
//ha rákattintunk a gombra akkor történjen valami
import AdatModell from "../Modell/AdatModell.js";
import AdatView from "../View/AdatView.js";
class AdatController {
    constructor() {
        //itt példányosítjuk a Modell-t és a View-t
        const adatModell = new AdatModell();
        const szuloelem = $("p");
        //példányosítottunk egy View-t egy szülőelemmel, megkapta az adatokat és ezeket meg kell jelenítenie
        const adatView = new AdatView("alap", szuloelem);
        //itt írunk bármit a View-ba
        //itt hívjuk meg a Modell-t
        $("button").on("click", () => {
            let eredmeny = adatModell.setDuplicateErtek(); //visszatérési érték eltárolása
            adatView.setErtek(eredmeny); //majd a View megjeleníti azt
            //itt írunk bármit a View-ba
            //itt hívjuk meg a Modell-t
        });
    }
}

export default AdatController;