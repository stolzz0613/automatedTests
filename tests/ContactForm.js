import {ClientFunction} from 'testcafe';
import ContactForm from '../pages/ContactForm';
import CustomerService from '../pages/CustomerService';
import HomePage from '../pages/HomePage';
import { generateName } from '../utils/name';

const url = 'https://plataformatest.bvc.com.co/';
const getPageHref = ClientFunction(() => document.location.href);

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
        HomePage.clickOnCustomerService_button();
        CustomerService.clickOnContact_button();

        //Fill contact form
        ContactForm.fillInputs(name, lastName, email, 'testing automated input fill');

        //Read and accept terms
        ContactForm.clickOnCheckBox();
        await ContactForm.hoverTerms();

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
        HomePage.clickOnCustomerService_button();
        CustomerService.clickOnContact_button();

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
