import {Selector, t} from 'testcafe';

class CustomerService{

    constructor(){
        this.contact_button = Selector('span').withText('Ir a contáctanos');
    }
 
    async clickOnContact_button(){
        await t
        .click(this.contact_button)
        .wait(5000)
    }
}
export default new CustomerService();