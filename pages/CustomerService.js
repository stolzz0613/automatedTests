import {Selector, t} from 'testcafe';

class CustomerService{

    constructor(){
        this.contact_button = Selector('span').withText('Contacto');
        this.h1 = Selector('h1').withText('Servicio al cliente');
    }
 
    async clickOnContact_button(){
        await t
        .click(this.contact_button)
        .wait(5000)
    }
}
export default new CustomerService();