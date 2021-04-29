import {Selector, t} from 'testcafe';

class MegaMenu_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.enLinea_option = Selector('p').withText('En línea');
        this.analisisTecnico_option = Selector('p').withText('Análisis técnico');
        this.graficadorTecnico_option = Selector('p').withText('Graficador técnico');
        this.calendarioMacro_option = Selector('p').withText('Calendario macro');
        this.mercadoMostrador_option = Selector('p').withText('Mercado mostrador');
    }

    async clickOnEnLinea
}
export default new MegaMenu_component();