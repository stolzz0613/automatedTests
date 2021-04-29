import {Selector, t} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

class HomePage{

    constructor(){
        this.customerService_button = Selector('span').withText('Servicio al cliente');
        
        this.mercados_menu = Selector('li').withText('Mercados');
        this.enLinea_mercadoLocal = ReactSelector('styled.li').withKey('En línea');
        
        this.rentaFija_button = Selector('li').child('h3').withText('Renta fija');
        this.rentaFija_masInformacion_button = Selector('span').child('a').withText('Más información');
    }
 
    async clickOnCustomerService_button(){
        await t
            .wait(5000)
            .click(this.customerService_button)
            .wait(5000);
    }

    async clickOnRentaFija(){
        await t
        .click(this.rentaFija_button)
        .wait(5000);
    }

    async clickOnRentaFija_masInformacion_button(){
        await t
            .click(this.rentaFija_masInformacion_button)
            .wait(5000);
    }

    async clickOnMercados(){
        await t
            .hover(this.mercados_menu)
            .wait(5000);
    }

    async clickOnEnlinea_mercadoLocal(){
        await t
            .click(this.enLinea_mercadoLocal)
            .wait(5000);
    }

    async goToLevel2(){
        await this.clickOnRentaFija();
        await this.clickOnRentaFija_masInformacion_button();
    }
}
export default new HomePage();