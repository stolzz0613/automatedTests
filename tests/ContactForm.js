import {ClientFunction} from 'testcafe';
import ContactForm from '../pages/ContactForm';
import CustomerService from '../pages/CustomerService';
import HomePage from '../pages/HomePage';
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

//Generate random user values
var name = generateName();
var lastName = generateName();
var email = `${name}-${lastName}@gmail.com`;

fixture('Send Contact Form')
    .page(url)

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('Send contact form', async t => {
        //Access to contact form
        await HomePage.clickOnCustomerService_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente', 'The page is valid');

        await CustomerService.clickOnContact_button(); 
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente/contactanos', 'The page is valid');

        //Fill contact form
        await ContactForm.fillInputs(name, lastName, email, 'testing automated input fill');

        //Read and accept terms
        await ContactForm.clickOnCheckBox();
        await scrollToElement(ContactForm.text);
        await ContactForm.acceptTerms();

        //Expected values inputs
        await t.expect(ContactForm.name_input.getAttribute('type')).eql('text', 'input type valid')
        await t.expect(ContactForm.lastName_input.getAttribute('type')).eql('text', 'input type valid')
        await t.expect(ContactForm.email_input.getAttribute('type')).eql('email', 'input type valid')
        await t
            .expect(ContactForm.body_input.getAttribute('type')).eql('textarea', 'input type valid')
            .wait(2000);

        //Send Form
        await ContactForm.clickOnSend();
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('Validate wrong contact form', async t => {
        //Access to contact form
        await HomePage.clickOnCustomerService_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente', 'The page is valid');

        await CustomerService.clickOnContact_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente/contactanos', 'The page is valid');

        //Send form
        await ContactForm.clickOnSend();

        //Check input warnings
        await t.expect(ContactForm.name_danger.exists).ok();
        await t.expect(ContactForm.lastName_dange.exists).ok();
        await t.expect(ContactForm.email_danger.exists).ok();
        await t.expect(ContactForm.body_danger.exists).ok();
        await t.expect(ContactForm.terms_danger.exists).ok();

        //Check if the warning disappear
        await t.typeText(ContactForm.name_input, name);
        await t.expect(ContactForm.name_danger.exists).notOk();
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('Validate breadCrumb level 1', async t => {
        //Access to contact form
        await HomePage.clickOnCustomerService_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente', 'The page is valid');

        await CustomerService.clickOnContact_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente/contactanos', 'The page is valid');

        await ContactForm.clickOnBreadCrumb_customerService();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente', 'The page is valid');
    })
    .after( async t => {});

test
    .disablePageCaching
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    ('Validate breadCrumb level 2', async t => {
        //Access to contact form
        await HomePage.clickOnCustomerService_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente', 'The page is valid');

        await CustomerService.clickOnContact_button();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/servicio-al-cliente/contactanos', 'The page is valid');

        await ContactForm.clickOnBreadCrumb_home();
        await t.expect(await getPageHref()).eql('https://plataformatest.bvc.com.co/', 'The page is valid');
    })
    .after( async t => {});
