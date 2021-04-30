import {Selector, t} from 'testcafe';

class PostNegociacion_component{

    constructor(){
        this.mercados_section = Selector('li').withText('Mercados');

        this.serviciosaEmisores_option = Selector('p').withText('Servicios a emisores');
        this.serviciosaDepositantes_option = Selector('p').withText('Servicios a depositantes');
        this.serviciosaInversionistas_option = Selector('p').withText('Servicios a inversionistas');
        this.documentos_option = Selector('p').withText('Documentos');
    }

    async hoverOnMercados_section(){
        await t
        .wait(2000)
        .hover(this.mercados_section)
        .wait(2000);
    }

    async clickOnServiciosaEmisores_option(){
        await t
            .wait(2000)
            .click(this.serviciosaEmisores_option)
            .wait(2000);
    }
    async clickOnServiciosaDepositantes_option(){
        await t
            .wait(2000)
            .click(this.serviciosaDepositantes_option)
            .wait(2000);
    }
    async clickOnServiciosaInversionistas_option(){
        await t
            .wait(2000)
            .click(this.serviciosaInversionistas_option)
            .wait(2000);
    }
    async clickOnDocumentos_option(){
        await t
            .wait(2000)
            .click(this.documentos_option)
            .wait(2000);
    }
   
}
export default new PostNegociacion_component();