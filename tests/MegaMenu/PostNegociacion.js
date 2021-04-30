import {ClientFunction} from 'testcafe';
import PostNegociacion_component from '../../pages/MegaMenu/PostNegociacion_component.js'

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);

fixture('MegaMenu Post Negociación')
    .page(url)

test
    .disablePageCaching
    ('Check Post Negociación section', async t => {
        await t.expect(PostNegociacion_component.mercados_section.exists).ok();
    })
    .after( async t => {});

test
    .disablePageCaching
    ('Check Post Negociación subSection', async t => {
        await t.expect(PostNegociacion_component.mercados_section.exists).ok();
        await PostNegociacion_component.hoverOnMercados_section();
        await PostNegociacion_component.clickOnServiciosaEmisores_option();
        await PostNegociacion_component.clickOnServiciosaDepositantes_option();
    })
    .after( async t => {});