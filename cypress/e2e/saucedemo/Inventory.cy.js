describe('Inventory', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user', {delay:0})
        cy.get('#password').type('secret_sauce', {delay:0})
        cy.get('#login-button').click()
    })
  
    it('Validate the results number', () => {
        cy.get('.inventory_item').should('have.length', 6)
    })

    it('Validate that a product is added to the cart', () => {
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
    })

    it('Validate that the button is displayed', () => {
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('#remove-sauce-labs-onesie').should('contain', 'Remove')
    })

    it('Validate that the user can delete one product', () => {
        cy.get('#add-to-cart-sauce-labs-onesie').click()        
        cy.get('#remove-sauce-labs-onesie').click()
        cy.get('#add-to-cart-sauce-labs-onesie').should('contain', 'Add to cart')
    })


})