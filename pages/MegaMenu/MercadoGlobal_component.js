import {Selector, t} from 'testcafe';

class MercadoGlobal_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.enLinea_option = Selector('p').withText('En línea');
        this.informacionGeneral_option = Selector('p').withText('Información general');
        this.analisisTecnico_option = Selector('p').withText('Análisis técnico');
        this.graficadorTecnico_option = Selector('p').withText('Graficador técnico');
        this.listadoDeAccionesyETFs_option = Selector('p').withText('Listado de acciones y ETFs');
        this.listadoDeEmisoresMercadoGlobal_option = Selector('p').withText('Listado de emisores mercado global');
        this.patrocinadores = Selector('p').withText('Patrocinadores');
    }

    async clickOnEnLinea_option(){
        await t
            .wait(5000)
            .click(this.enLinea_option)
            .wait(5000);
    }
    async clickOnInformacionGeneral_option(){
        await t
            .wait(5000)
            .click(this.informacionGeneral_option)
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
            .click(this.graficadorTecnico_option_option)
            .wait(5000);
    }
    async clickOnListadoDeAccionesyETFS_option(){
        await t
            .wait(5000)
            .click(this.listadoDeAccionesyETFs_option)
            .wait(5000);
    }
    async clickOnListadoDeEmisoresMercadoGlobal_option(){
        await t
            .wait(5000)
            .click(this.listadoDeEmisoresMercadoGlobal_option)
            .wait(5000);
    }
    async clickOnPatrocinadores_option(){
        await t
            .wait(5000)
            .click(this.patrocinadores)
            .wait(5000);
    }
}
export default new MercadoGlobal_component();