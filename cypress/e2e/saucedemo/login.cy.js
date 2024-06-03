describe('login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
  
    it('Validate landing URL and page title is as expected', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('.login_logo').should('contain', 'Swag Labs')
        cy.title().should('eq', 'Swag Labs')
    })

    it('Validate landing URL and page title is as expected', () => {
        cy.get('#user-name').type('standard_user', {delay:0})
        cy.get('#password').type('secret_sauce', {delay:0})
        cy.get('#login-button').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Validate a user can not log into the page with invalid credentials', () => {
        cy.get('#user-name').type('error_user', {delay:0})
        cy.get('#password').type('secretuce', {delay:0})
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
})