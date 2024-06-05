const loginPage = require("../pages/login")

describe('login', () => {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('saucedemoData').then(credentials =>{
            this.credentials=credentials;
        })
    })
  
    it('Validate landing URL and page title is as expected', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        loginPage.logo().should('contain', 'Swag Labs')
        cy.title().should('eq', 'Swag Labs')
    })

    it('Validate landing URL and page title is as expected', function(){
        loginPage.login(this.credentials.userNameOk, this.credentials.passwordOk)
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Validate a user can not log into the page with invalid credentials', function(){
        loginPage.login(this.credentials.userNameNotOk, this.credentials.passwordNotOk)
        loginPage.errorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Validate a user can not log into the page without complete the fields', function(){
        loginPage.clickLogin()
        loginPage.errorMessage().should('have.text', 'Epic sadface: Username is required')
    })
})