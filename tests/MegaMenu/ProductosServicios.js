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
        await t.expect(ProductosServicios_component.descripcionGeneral_option.exists).ok();
        await t.expect(ProductosServicios_component.acciones_option.exists).ok();
        await t.expect(ProductosServicios_component.repo_option.exists).ok();
        await t.expect(ProductosServicios_component.TTV_option.exists).ok();
        await t.expect(ProductosServicios_component.TTVOTC_option.exists).ok();
        await t.expect(ProductosServicios_component.fondosBursatiles_option.exists).ok();
        await t.expect(ProductosServicios_component.formadoresDeLiquidez.exists).ok();

        await ProductosServicios_component.clickOnRentaFija_option();
        await ProductosServicios_component.clickOnDerivados_option();
        await ProductosServicios_component.clickOnIndices_option();
    })
    .after( async t => {});

