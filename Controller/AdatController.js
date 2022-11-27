//fog kommunikálni a Modelllel és a View-val
//ha rákattintunk a gombra akkor történjen valami
import AdatModell from "../Modell/AdatModell";
import AdatView from "../View/AdatView";
class AdatController {
    constructor() {
        //itt példányosítjuk a Modell-t és a View-t
        //példányosítottunk egy View-t egy szülőelemmel, megkapta az adatokat és ezeket meg kell jelenítenie
        const adatModell = new AdatModell();
        const szuloelem = $("p");
        const adatView = new AdatView("alap", szuloelem);
        //itt írunk bármit a View-ba
        //itt hívjuk meg a Modell-t
        $("button").on("click", () => {
            //itt írunk bármit a View-ba
            //itt hívjuk meg a Modell-t
        })
    }
}

export default AdatController;