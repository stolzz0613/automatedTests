import {ClientFunction} from 'testcafe';
import Indices_tab from '../../../pages/MercadoLocalNivel1/Indices/Indices_tab.js';
import Widget from '../../../pages/MercadoLocalNivel1/Widget.js';
import { ReactSelector } from 'testcafe-react-selectors';

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);

fixture('Indices Tab')
    .page(url)

test
    .disablePageCaching
    ('Check Indices Tab', async t => {
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/?tab=indices_accionarios&tabNoticias=noticias-bvc', 'The page is valid');
        await t.expect(Widget.indices_tab.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Indices Subtabs', async t => {
        await t.expect(Widget.indices_tab.exists).ok();
        await Widget.clickOnIndices_tab();
        await Widget.hoverMasInformacion_button();

        await t.expect(Indices_tab.accionarios_subTab.exists).ok();
        await t.takeElementScreenshot(Selector('body'));
        await t.expect(Indices_tab.rentaFija_subTab.exists).ok();
        await t.expect(Indices_tab.mercadoMonetario_subTab.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Accionarios headers', async t => {
        await t.expect(Widget.indices_tab.exists).ok();
        await Widget.clickOnIndices_tab();
        await t.expect(Indices_tab.accionarios_subTab.exists).ok();
        await Indices_tab.clickOnAccionarios_subTab();
        await Widget.hoverMasInformacion_button();

        await t.expect(Indices_tab.indices_header.exists).ok();
        await t.expect(Indices_tab.valorHoy_header.exists).ok();
        await t.expect(Indices_tab.variacion_header.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Renta Fija headers', async t => {
        await t.expect(Widget.indices_tab.exists).ok();
        await Widget.clickOnIndices_tab();
        await t.expect(Indices_tab.accionarios_subTab.exists).ok();
        await Indices_tab.clickOnRentaFija_subTab();
        await Widget.hoverMasInformacion_button();

        await t.expect(Indices_tab.indices_header.exists).ok();
        await t.expect(Indices_tab.valorHoy_header.exists).ok();
        await t.expect(Indices_tab.variacion_header.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Mercado monetario headers', async t => {
        await t.expect(Widget.indices_tab.exists).ok();
        await Widget.clickOnIndices_tab();
        await t.expect(Indices_tab.accionarios_subTab.exists).ok();
        await Indices_tab.clickOnMercadoMonetario_subTab();
        await Widget.hoverMasInformacion_button();


        await t.expect(Indices_tab.indices_header.exists).ok();
        await t.expect(Indices_tab.valorHoy_header.exists).ok();
        await t.expect(Indices_tab.variacion_header.exists).ok();
    })
    .after( async t => {});