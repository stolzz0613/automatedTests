import {Selector, t} from 'testcafe';

class MILA_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.MILA_option = Selector('p').withText('Mercado Integrado Latinoamericano');
    }

    async clickOnMILA_option(){
        await t
            .wait(5000)
            .click(this.MILA_option)
            .wait(5000);
    }
}
export default new MILA_component();