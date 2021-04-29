import {ClientFunction} from 'testcafe';
import ContactForm from '../pages/ContactForm';
import CustomerService from '../pages/CustomerService';
import HomePage from '../pages/HomePage';
import RentaFija_nivel2 from '../pages/RentaFija_nivel2';
import { generateName } from '../utils/name';

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);
const scrollToElement = ClientFunction((selector) => {
    return new Promise( (resolve) => {
        const element = selector();
        if (element && element.scrollIntoView) {
            element.scrollIntoView();
        }
        resolve();
    });
});



fixture('Navigate to info level 2')
    .page(url)

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('widget', async t => {
        //Access to info level 2
        await HomePage.clickOnRentaFija();
        await HomePage.clickOnRentaFija_masInformacion_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#renta-fija_deuda-publica-segmento-publico', 'The page is valid');
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('menu', async t => {
        //Access to info level 2
        await HomePage.clickOnMercados();
        await HomePage.clickOnEnlinea_mercadoLocal();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#indices_accionarios', 'The page is valid');
    })
    .after( async t => {});



fixture('Check elements level 2')
    .page(url)

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('tabs', async t => {
        await HomePage.goToLevel2();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#renta-fija_deuda-publica-segmento-publico', 'The page is valid');

        await t.expect(RentaFija_nivel2.deudaPublica_segmentoPublico.exists).ok();
        await t.expect(RentaFija_nivel2.deudaPublica_segmentoPrivado.exists).ok();
        await t.expect(RentaFija_nivel2.deudaCorporativa.exists).ok();
    })
    .after( async t => {});
    
test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('abierto-cerrado message', async t => {
        await HomePage.goToLevel2();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#renta-fija_deuda-publica-segmento-publico', 'The page is valid');

        var today = new Date();
        if(today.getHours() > 18) {
            await t.expect(RentaFija_nivel2.marketClosed.exists).ok();
        } else {
            await t.expect(RentaFija_nivel2.marketOpen.exists).ok();
        }
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('delay message', async t => {
        await HomePage.goToLevel2();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#renta-fija_deuda-publica-segmento-publico', 'The page is valid');

        await t.expect(RentaFija_nivel2.delayMessage.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('description', async t => {
        await HomePage.goToLevel2();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/mercados/mercado-local/en-linea#renta-fija_deuda-publica-segmento-publico', 'The page is valid');
        console.log((await RentaFija_nivel2.description.textContent).length)
        await t
            .expect((await RentaFija_nivel2.description.textContent).length)
            .eql(300);
    })
    .after( async t => {});