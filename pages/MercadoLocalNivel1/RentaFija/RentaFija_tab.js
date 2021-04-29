import {Selector, t} from 'testcafe';

class RentaFija_tab{

    constructor(){
        this.deudaPublica_subTab = Selector('h4').withText('Deuda Pública más negociada');
        this.deudaCorporativa_subTab = Selector('h4').withText('Deuda Corporativa más negociada');

        this.nemotecnico_header = Selector('span').withText('Nemotécnico');
        this.volumen_header = Selector('span').withText('Volumen*');
        this.ultimoPrecio_header = Selector('span').withText('Último precio');
        this.ultimaTasa_header = Selector('span').withText('Última tasa');
        this.variacionPBS_header = Selector('span').withText('Variación pbs');

        this.claseTitulo_header = Selector('span').withText('Clase de título');
        this.numeroOperaciones_header = Selector('span').withText('N° de operaciones');
    }

    async clickOnDeudaPublica_subtab(){
        await t
            .wait(5000)
            .click(this.deudaPublica_subTab)
            .wait(5000);
    }

    async clickOnDeudaCorporativa_subtab(){
        await t
            .wait(5000)
            .click(this.deudaCorporativa_subTab)
            .wait(5000);
    }

}
export default new RentaFija_tab();