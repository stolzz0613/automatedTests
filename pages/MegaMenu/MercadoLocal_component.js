import {Selector, t} from 'testcafe';

class MercadoLocal_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.enLinea_option = Selector('p').withText('En línea');
        this.analisisTecnico_option = Selector('p').withText('Análisis técnico');
        this.graficadorTecnico_option = Selector('p').withText('Graficador técnico');
        this.calendarioMacro_option = Selector('p').withText('Calendario macro');
        this.mercadoMostrador_option = Selector('p').withText('Mercado mostrador');
    }

    async clickOnEnLinea_option(){
        await t
            .wait(5000)
            .click(this.enLinea_option)
            .wait(5000);
    }
    async clickOnAnalisisTecnico_option(){
        await t
            .wait(5000)
            .click(this.analisisTecnico_option)
            .wait(5000);
    }
    async clickOnGraficadorTecnico_option(){
        await t
            .wait(5000)
            .click(this.graficadorTecnico_option)
            .wait(5000);
    }
    async clickOnCalendarioMacro_option(){
        await t
            .wait(5000)
            .click(this.calendarioMacro_option)
            .wait(5000);
    }
    async clickOnMercadoMostrador_option(){
        await t
            .wait(5000)
            .click(this.mercadoMostrador_option)
            .wait(5000);
    }
}
export default new MercadoLocal_component();