import {Selector, t} from 'testcafe';

class ProductosServicios_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.rentaVariable_option = Selector('p').withText('Renta variable');
        this.rentaFija_option = Selector('p').withText('Renta fija');
        this.derivados_option = Selector('p').withText('Derivados');
        this.indices_option = Selector('p').withText('Índices');

        this.descripcionGeneral_option = Selector('p').withText('Descripción general');
        this.acciones_option = Selector('p').withText('Acciones');
        this.repo_option = Selector('p').withText('Repos');
        this.TTV_option = Selector('p').withText('TTV');
        this.TTVOTC_option = Selector('p').withText('TTV OTC');
        this.fondosBursatiles_option = Selector('p').withText('Fondos bursátiles');
        this.formadoresDeLiquidez = Selector('p').withText('Formadores de liquidez');
    }

    async hoverOnMercados_section(){
        await t
        .wait(2000)
        .hover(this.mercados_section)
        .wait(2000);
    }

    async clickOnRentaVariable_option(){
        await t
            .wait(2000)
            .click(this.rentaVariable_option)
            .wait(2000);
    }

    async clickOnRentaFija_option(){
        await t
        .wait(2000)
        .click(this.rentaFija_option)
        .wait(2000);
    }

    async clickOnDerivados_option(){
        await t
        .wait(2000)
        .click(this.derivados_option)
        .wait(2000);
    }

    async clickOnIndices_option(){
        await t
        .wait(2000)
        .click(this.indices_option)
        .wait(2000);
    }
}
export default new ProductosServicios_component();