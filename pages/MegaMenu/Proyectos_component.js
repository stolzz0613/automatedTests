import {Selector, t} from 'testcafe';

class Proyectos_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.masterTrader_option = Selector('p').withText('Master Trader');
        this.amaru_option = Selector('p').withText('Amarú');
        this.camaraDeRentaVariable_option = Selector('p').withText('Cámara de renta variable');
        this.pagaresEnLaNube_option = Selector('p').withText('Págares en la nube');
    }

    async clickOnMasterTrader_option(){
        await t
            .wait(5000)
            .click(this.masterTrader_option)
            .wait(5000);
    }
    async clickOnAmaru_option(){
        await t
            .wait(5000)
            .click(this.amaru_option)
            .wait(5000);
    }
    async clickOnCamaraDeRentaVariable_option(){
        await t
            .wait(5000)
            .click(this.camaraDeRentaVariable_option)
            .wait(5000);
    }
    async clickOnPagaresEnLaNube_option(){
        await t
            .wait(5000)
            .click(this.pagaresEnLaNube_option)
            .wait(5000);
    }
   
}
export default new Proyectos_component();