import {ClientFunction} from 'testcafe';
import RentaVariable_tab from '../../../pages/MercadoLocalNivel1/RentaVariable/RentaVariable_tab';
import Indices_tab from '../../../pages/MercadoLocalNivel1/RentaVariable/RentaVariable_tab';
import Widget from '../../../pages/MercadoLocalNivel1/Widget.js';

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);

fixture('Renta Variable Tab')
    .page(url)

test
    .disablePageCaching
    ('Check Renta Variable Tab', async t => {
        await t.expect(Widget.rentaVariable_tab.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Renta Variable Subtabs', async t => {
        await t.expect(Widget.rentaVariable_tab.exists).ok();

        await Widget.clickOnRentaVariable_tab();
        await t.expect(RentaVariable_tab.masNegociadas_subTab.exists).ok()
        await t.expect(RentaVariable_tab.masValorizadas_subTab.exists).ok()
        await t.expect(RentaVariable_tab.masDesvalorizadas_subTab.exists).ok()
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Más Negociadas headers', async t => {
        await t.expect(Widget.rentaVariable_tab.exists).ok();

        await Widget.clickOnRentaVariable_tab();
        await t.expect(RentaVariable_tab.masNegociadas_subTab.exists).ok();
        await RentaVariable_tab.clickOnMasNegociadas_subTab();
        await t.expect(RentaVariable_tab.nemotecnico_header.exists).ok();
        await t.expect(RentaVariable_tab.volumen_header.exists).ok();
        await t.expect(RentaVariable_tab.ultimoPrecio_header.exists).ok();
        await t.expect(RentaVariable_tab.variacion_header.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Más Valorizadas headers', async t => {
        await t.expect(Widget.rentaVariable_tab.exists).ok();

        await Widget.clickOnRentaVariable_tab();
        await t.expect(RentaVariable_tab.masNegociadas_subTab.exists).ok();
        await RentaVariable_tab.clickOnMasValorizadas_subTab();
        await t.expect(RentaVariable_tab.nemotecnico_header.exists).ok();
        await t.expect(RentaVariable_tab.volumen_header.exists).ok();
        await t.expect(RentaVariable_tab.ultimoPrecio_header.exists).ok();
        await t.expect(RentaVariable_tab.variacion_header.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Más Desvalorizadas headers', async t => {
        await t.expect(Widget.rentaVariable_tab.exists).ok();

        await Widget.clickOnRentaVariable_tab();
        await t.expect(RentaVariable_tab.masNegociadas_subTab.exists).ok();
        await RentaVariable_tab.clickOnMasDesvalorizadas_subTab();
        await t.expect(RentaVariable_tab.nemotecnico_header.exists).ok();
        await t.expect(RentaVariable_tab.volumen_header.exists).ok();
        await t.expect(RentaVariable_tab.ultimoPrecio_header.exists).ok();
        await t.expect(RentaVariable_tab.variacion_header.exists).ok();
    })
    .after( async t => {});
