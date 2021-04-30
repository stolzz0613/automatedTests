import {ClientFunction} from 'testcafe';
import ProductosServicios_component from '../../pages/MegaMenu/ProductosServicios_component.js'

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);

fixture('MegaMenu Productos y Servicios')
    .page(url)

test
    .disablePageCaching
    ('Check Productos y Servicios section', async t => {
        await t.expect(ProductosServicios_component.mercados_section.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Renta variable subSection', async t => {
        await t.expect(ProductosServicios_component.mercados_section.exists).ok();
        await ProductosServicios_component.hoverOnMercados_section();
        await ProductosServicios_component.clickOnRentaVariable_option();
        await ProductosServicios_component.clickOnDescripcionGeneral_option();
    })
    .after( async t => {});

