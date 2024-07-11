export default class Cl_TodoPersona {
    constructor(){
        this.contPersonas = 0;
        this.contHombres = 0;
        this.contMujeres = 0;
    }

    //metodos
    procesarPersona(per) {
        this.contPersonas++;
        if(per.sexo == "M") {
            this.contHombres++;
        } else {
            this.contMujeres++;
        }
    }
    devolverContPersonas(){
        return this.contPersonas;
    }
    devolverContMujeres() {
        return this.contMujeres;
    }
    devolverContHombres() {
        return this.contHombres;
    }
}