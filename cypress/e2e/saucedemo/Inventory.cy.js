const loginPage = require("../pages/login")
const inventory = require("../pages/inventory")

describe('Inventory', () => {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('saucedemoData').then(credentials =>{
            this.credentials=credentials;
            loginPage.login(this.credentials.userNameOk,this.credentials.passwordOk)
        })        
    })

    it('Validate the url', () => {
        cy.url().should('include', '/inventory.html');
    })
  
    it('Validate the results number', () => {
        inventory.allElements().should('have.length', 6)
    })

    it('Validate that a product is added to the cart', () => {
        inventory.addToCartSauceLabsBoltTshirt()
        inventory.cartItem().should('contain', '1')
    })

    it('Validate that the button is displayed', () => {
        inventory.addToCartSauceLabsOnesie()
        inventory.returnRemoveSauceLabsOnesie().should('contain', 'Remove')
    })

    it('Validate that the user can delete one product', () => {
        inventory.addToCartSauceLabsOnesie()     
        inventory.removeSauceLabsOnesie()
        inventory.buttonAddCartSauceLabsOnesie().should('contain', 'Add to cart')
    })
})