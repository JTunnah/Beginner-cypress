import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('i am on the bymiles Homepage {string}', (URL) => {
  cy.visit('https://www.bymiles.co.uk')
})

When('the user enters {string} into the search box',  (RegCode) => {
  cy.get('.content-wrapper > .reg-to-qq > .formbox > .formbox__form-express > .formbox__input').type("x314mcw")
})

When('the user clicks the quick quote button', () => {
  cy.get('.content-wrapper > .reg-to-qq > .formbox > .formbox__form-express > .button').click()
})

When('the user clicks yes continue', () => {
  cy.get('.formbox__estimated-mileage-cta-continue').click()
})

When('the user fills the form out that is displayed', (dataTable) => {
  dataTable.hashes().forEach(elem => {
  cy.get('[name="ncd-wrapper"] > .Select > .Select-control > .Select-arrow-zone > .form-element__arrow').click()
  cy.get(elem.NcdValue).click()
cy.get('#dob > .form-element__input').type(elem.DobValue)
cy.get('#postcode > .form-element__input').type(elem.Postcode)
cy.get(':nth-child(7) > .form-element > .Select > .Select-control > .Select-arrow-zone > .form-element__arrow').click()
cy.get(elem.RenewalDate).click()
cy.get('#email > .form-element__input').type(elem.email)
cy.get('div:contains("Drag car to circle")').dblclick({force: true})
cy.get('#quick-quote-form > .button > .button__label').click()
  })
})

When('the users quote should be {string}', (QuotePrice) => {
cy.get('.figure > .sc-fznZeY').contains("£1222.10")
})

When('the user wants to get a quote', () => {
  cy.get('.sc-fzoXWK').click()
})

When('the user wants to click got it', () => {
  cy.get('.modal__btn').click()
})

When('the user wants to click i understand', () => {
  cy.get('#gtm-brochure-intro-modal-3').click()
})

When('the user wants to click got it', () => {
  cy.get('.modal__btn').click()
})

When('the user wants to fill the form out', () => {
  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get(':nth-child(2) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('.col-xs-12 > .form-element > .default-submit > div > input').type("february")
  cy.get('.col-xs-4 > .row > .col-xs-12 > .form-element > .default-submit > input').type("2019")
  cy.get(':nth-child(3) > :nth-child(2) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-owner-option-0').click()
  cy.get('.default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-keeper-option-0').click()
  cy.get(':nth-child(6) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(1) > .radio').click()
  cy.get(':nth-child(1) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(1) > .radio').click()
  cy.get('.button-section').click()
  cy.get('[style="max-width: 200px;"] > .row > .col-xs-12 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-title-option-0').click()
  cy.get(':nth-child(3) > .input-wrapper > .row > .col-xs-12 > .form-element > .default-submit > input').type("joshua")
  cy.get(':nth-child(4) > .input-wrapper > .row > .col-xs-12 > .form-element').type("Bunnah")
  cy.get('.col-xs-3 > .row > .col-xs-12 > .form-element').type("09")
  cy.get('.col-xs-5 > .row > .col-xs-12 > .form-element').type("june")
  cy.get('.col-xs-4 > .row > .col-xs-12 > .form-element').type("1996")
  cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(1) > .radio').click()
  cy.get('.col-xs-12 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-children-option-0').click()
  cy.get('.address-search-input > .form-element').type("cm77 6ad")
  cy.get('.address-search').click(16)
  cy.get('[data-index="14"]').click()
  cy.get(':nth-child(2) > :nth-child(2) > .row > .col-xs-12 > .form-element').type("joshua-1996@hotmail.com")
  cy.get(':nth-child(4) > :nth-child(3) > .field-wrap > .row > .col-xs-11 > .form-element').type("07123456789")
  cy.get(':nth-child(3) > .marketing-option > .marketing-option__content > .marketing-option__radios-wrapper > [style="margin-right: 0px;"] > .radio').click()
  cy.get(':nth-child(4) > .marketing-option > .marketing-option__content > .marketing-option__radios-wrapper > [style="margin-right: 0px;"] > .radio').click()
  cy.get(':nth-child(5) > .marketing-option > .marketing-option__content > .marketing-option__radios-wrapper > [style="margin-right: 0px;"] > .radio').click()
  cy.get(':nth-child(5) > :nth-child(1) > :nth-child(3) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-employment-option-0').click()
  cy.get(':nth-child(6) > :nth-child(1) > :nth-child(3) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-licence_type-option-1').click()
  cy.get(':nth-child(5) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-licence_issued_date-option-0').click()
  cy.get(':nth-child(2) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-ncd-option-0').click()
  cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get(':nth-child(3) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('[name="claims-compartment"] > :nth-child(1) > :nth-child(2) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('[name="convictions-compartment"] > :nth-child(1) > :nth-child(2) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('[name="convictions-compartment"] > :nth-child(1) > :nth-child(2) > .col-lg-4 > :nth-child(1) > .row > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('.button-section').click()
  cy.get(':nth-child(4) > :nth-child(2) > .col-xs-12 > .row > .col-xs-11 > .form-element').type("Water industry")
  cy.get(':nth-child(4) > .col-xs-12 > .row > .col-xs-11 > .form-element').type("Water diviner")
  cy.get(':nth-child(9) > :nth-child(3) > :nth-child(2) > .col-lg-4 > :nth-child(1) > :nth-child(1) > .col-xs-12 > :nth-child(2) > .radio').click()
  cy.get('.button-section').click()
  cy.get('.compartment > :nth-child(2) > .col-xs-12 > .row > .col-xs-11 > .form-element > .default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-inception_date-option-5').click()
  cy.get(':nth-child(2) > .radio').click()
  cy.get('.button-section').click()
  cy.get('.default-submit > .css-10nd86i > .css-ccpn36 > .css-1hwfws3').click()
  cy.get('#react-select-excess-option-0').click()
  cy.get('.button-text').click()

})

When('the final quote page should contain Sorry. We can't insure you just yet.', () => {
  cy.get('.heading__kickout--level-one').contains("Sorry. We can't insure you just yet.")
});
