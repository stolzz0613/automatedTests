import {Selector, t} from 'testcafe';

class ProductosServicios_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.rentaVariable_option = Selector('p').withText('Renta variable');
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
        .wait(5000)
        .hover(this.mercados_section)
        .wait(5000);
    }

    async clickOnRentaVariable_option(){
        await t
            .wait(5000)
            .click(this.rentaVariable_option)
            .wait(5000);
    }

    async clickOnDescripcionGeneral_option(){
        await t
        .wait(5000)
        .click(this.descripcionGeneral_option)
        .wait(5000);
    }
}
export default new ProductosServicios_component();