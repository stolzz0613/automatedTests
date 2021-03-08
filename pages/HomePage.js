import {Selector, t} from 'testcafe';

class HomePage{

    constructor(){
        this.customerService_button = Selector('span').withText('Servicio al cliente');
    }
 
    async clickOnCustomerService_button(){
        await t
        .wait(5000)
        .click(this.customerService_button)
        .wait(5000)
    }
}
export default new HomePage();