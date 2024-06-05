class Inventory {

    elements = {
        addSauceLabsBoltTshirt: ()=> cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        addSauceLabsOnesie: ()=> cy.get('#add-to-cart-sauce-labs-onesie'),
        inventoryElements: ()=> cy.get('.inventory_item'),
        cartItem: ()=> cy.get('.shopping_cart_badge'),
        removeSauceLabsOnesie: ()=> cy.get('#remove-sauce-labs-onesie')
    }

    addToCartSauceLabsBoltTshirt(){
        this.elements.addSauceLabsBoltTshirt().click()
    }

    addToCartSauceLabsOnesie(){
        this.elements.addSauceLabsOnesie().click()
    }

    buttonAddCartSauceLabsOnesie(){
        return this.elements.addSauceLabsOnesie()
    }
    
    allElements(){
        return this.elements.inventoryElements()
    }

    cartItem(){
        return this.elements.cartItem()
    }

    returnRemoveSauceLabsOnesie(){
        return this.elements.removeSauceLabsOnesie()
    }

    removeSauceLabsOnesie(){
        this.elements.removeSauceLabsOnesie().click()
    }

}

module.exports = new Inventory();