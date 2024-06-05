describe('login', () => {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('saucedemoData').then(credentials =>{
            this.credentials=credentials;
        })
    })
  
    it('Validate landing URL and page title is as expected', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('.login_logo').should('contain', 'Swag Labs')
        cy.title().should('eq', 'Swag Labs')
    })

    it('Validate landing URL and page title is as expected', function(){
        cy.get('#user-name').type(this.credentials.userNameOk, {delay:0})
        cy.get('#password').type(this.credentials.passwordOk, {delay:0}, {sensitive:true})
        cy.clickLogin()
        //cy.get('#login-button').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Validate a user can not log into the page with invalid credentials', function(){
        cy.get('#user-name').type(this.credentials.userNameNotOk, {delay:0})
        cy.get('#password').type(this.credentials.passwordNotOk, {delay:0})
        cy.clickLogin()
        //cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Validate a user can not log into the page without complete the fields', function(){
        cy.clickLogin()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    })
})