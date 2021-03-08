import {Selector, t} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

class CustomerService{

    constructor(){
        this.name_input = Selector('input#name');
        this.lastName_input = Selector('input#lastName');
        this.email_input = Selector('input#email');
        this.body_input = Selector('textarea#body');
        this.checkBox = Selector('div.checkbox-icon').child('svg');

        this.modal = ReactSelector('Modalstyled__StyledScrollbar');
        this.confirmModal_button = ReactSelector('Modalstyled__StyledButton');
        this.terms_container = Selector('div.scrollbar-container');

        this.captcha_checkbox = Selector('span.recaptcha-checkbox-unchecked');
        this.send_button = Selector('button.submit_button');

        this.name_danger = Selector('span').withAttribute('color', 'danger').withText('Ingresa tu nombre');
        this.lastName_dange = Selector('span').withAttribute('color', 'danger').withText('Ingresa tu apellido');
        this.email_danger = Selector('span').withAttribute('color', 'danger').withText('Ingresa tu correo electrónico');
        this.body_danger = Selector('span').withAttribute('color', 'danger').withText('Por favor completa este campo, para BVC es importante conocer tu solicitud a detalle, así podremos brintarte el soporte adecuado.');
        this.terms_danger = Selector('span').withAttribute('color', 'danger').withText('Debes aceptar la política de tratamientos de datos para continuar');
    }
 
    async fillInputs(name, lastName, email, body){
        await t
            .typeText(this.name_input, name)
            .typeText(this.lastName_input, lastName)
            .typeText(this.email_input, email)
            .typeText(this.body_input, body)
            .wait(3000);
    }

    async clickOnCheckBox(){
        await t
            .click(this.checkBox)
            .wait(1000);
    }

    async hoverTerms(){
        await t
            .click(this.modal)
            .pressKey('end')
            .wait(2000)
        await t
            .click(this.modal)
            .pressKey('end')
            .pressKey('end')
            .pressKey('end')
            .wait(2000)
        await t
            .click(this.confirmModal_button);
    }

    async clickOnCaptcha(){
        await t
            .click(this.captcha_checkbox)
            .wait(3000);
    }

    async clickOnSend(){
        await t
            .click(this.send_button)
            .wait(8000);
    }
}
export default new CustomerService();