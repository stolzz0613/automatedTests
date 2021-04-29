import {Selector, t} from 'testcafe';

class Indices_tab{

    constructor(){
        this.accionarios_subTab = Selector('h4').withText('Accionarios');
        this.rentaFija_subTab = Selector('h4').withText('Renta fija');
        this.mercadoMonetario_subTab = Selector('h4').withText('Mercado monetario');

        this.indices_header = Selector('span').withText('Índices');
        this.valorHoy_header = Selector('span').withText('Valor hoy');
        this.variacion_header= Selector('span').withText('Variación');
    }

    async clickOnAccionarios_subTab(){
        await t
            .wait(5000)
            .click(this.accionarios_subTab)
            .wait(5000);
    }

    async clickOnRentaFija_subTab(){
        await t
            .wait(5000)
            .click(this.rentaFija_subTab)
            .wait(5000);
    }

    async clickOnMercadoMonetario_subTab(){
        await t
            .wait(5000)
            .click(this.mercadoMonetario_subTab)
            .wait(5000);
    }
}
export default new Indices_tab();