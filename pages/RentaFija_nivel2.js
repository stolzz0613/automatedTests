import {Selector, t} from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

class HomePage{

    constructor(){
        this.deudaPublica_segmentoPublico = Selector('li').child('h3').withText('Deuda pública segmento público');
        this.deudaPublica_segmentoPrivado = Selector('li').child('h3').withText('Deuda pública segmento privado');
        this.deudaCorporativa = Selector('li').child('h3').withText('Deuda corporativa');

        this.marketOpen = Selector('div').child('p').withText('Mercado abierto').withAttribute('color', 'active');
        this.marketClosed = Selector('div').child('p').withText('Mercado cerrado').withAttribute('color', 'active');

        this.delayMessage = Selector('div').child('span').withText('Retraso 15 minutos');

        this.description = ReactSelector('Tablestyled__StyledSummaryContainer Row Col pn styled.p');
    }
}
export default new HomePage();