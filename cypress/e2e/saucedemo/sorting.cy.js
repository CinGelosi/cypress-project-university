const loginPage = require("../pages/login")
const inventory = require("../pages/inventory")
const sorting = require("../pages/sorting")

describe('sorting', () => {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('saucedemoData').then(credentials =>{
            this.credentials=credentials;
            loginPage.login(this.credentials.userNameOk,this.credentials.passwordOk)
        })        
    })
  
    it('Validate the sort "Name (Z to A)" works', () => {
        sorting.sortingZa()
        inventory.allElements().first().find('a').should('have.id', 'item_3_img_link')
    })

    it('Validate the sort "Price (low to high)" works', () => {
        sorting.sortinglohi()
        inventory.allElements().first().find('a').should('have.id', 'item_2_img_link')
    })

    it('Validate the sort "Price (high to low)" works', () => {
        sorting.sortinghilo()
        inventory.allElements().first().find('a').should('have.id', 'item_5_img_link')
    })
})