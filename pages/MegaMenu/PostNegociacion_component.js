import {Selector, t} from 'testcafe';

class PostNegociacion_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.serviciosaEmisores_option = Selector('p').withText('Servicios a emisores');
        this.serviciosaDepositantes_option = Selector('p').withText('Servicios a depositantes');
        this.serviciosaInversionistas_option = Selector('p').withText('Servicios a inversionistas');
        this.documentos_option = Selector('p').withText('Documentos');
    }

    async clickOnServiciosaEmisores_option(){
        await t
            .wait(5000)
            .click(this.serviciosaEmisores_option)
            .wait(5000);
    }
    async clickOnServiciosaDepositantes_option(){
        await t
            .wait(5000)
            .click(this.serviciosaDepositantes_option_option)
            .wait(5000);
    }
    async clickOnServiciosaInversionistas_option(){
        await t
            .wait(5000)
            .click(this.serviciosaInversionistas_option)
            .wait(5000);
    }
    async clickOnDocumentos_option(){
        await t
            .wait(5000)
            .click(this.documentos_option)
            .wait(5000);
    }
   
}
export default new PostNegociacion_component();