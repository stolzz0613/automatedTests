import {Selector, t} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

class Widget{

    constructor(){
        this.indices_tab = Selector('h3').withText('Índices');
        this.rentaVariable_tab = Selector('h3').withText('Renta variable');
        this.rentaFija_tab = Selector('h3').withText('Renta fija');
        this.derivados_tab = Selector('h3').withText('Derivados');
        this.divisas_tab = Selector('h3').withText('Divisas');
        
        this.masInformacion_button = Selector('h5').withText('Información de interés');
    }
 
    async clickOnIndices_tab(){
        await t
            .wait(5000)
            .click(this.indices_tab)
            .wait(5000);
    }

    async clickOnRentaVariable_tab(){
        await t
            .wait(5000)
            .click(this.rentaVariable_tab)
            .wait(5000);
    }

    async hoverMasInformacion_button(){
        await t
            .wait(1000)
            .hover(this.masInformacion_button)
            .wait(1000);
    }
}
export default new Widget();