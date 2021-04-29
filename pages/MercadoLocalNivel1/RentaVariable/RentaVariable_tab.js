import {Selector, t} from 'testcafe';

class RentaVariable_tab{

    constructor(){
        this.masNegociadas_subTab = Selector('h4').withText('Más Negociadas');
        this.masValorizadas_subTab = Selector('h4').withText('Más Valorizadas');
        this.masDesvalorizadas_subTab = Selector('h4').withText('Más Desvalorizadas');

        this.nemotecnico_header = Selector('span').withText('Nemotécnico');
        this.volumen_header = Selector('span').withText('Volumen');
        this.ultimoPrecio_header = Selector('span').withText('Último precio');
        this.variacion_header = Selector('span').withText('Variación');
    }

    async clickOnMasNegociadas_subTab(){
        await t
            .wait(5000)
            .click(this.masNegociadas_subTab)
            .wait(5000);
    }

    async clickOnMasValorizadas_subTab(){
        await t
            .wait(5000)
            .click(this.masValorizadas_subTab)
            .wait(5000);
    }

    async clickOnMasDesvalorizadas_subTab(){
        await t
            .wait(5000)
            .click(this.masDesvalorizadas_subTab)
            .wait(5000);
    }
}
export default new RentaVariable_tab();