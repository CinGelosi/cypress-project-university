describe('sorting', () => {
    beforeEach(() => {
        cy.Login()
    })
  
    it('Validate the sort "Name (Z to A)" works', () => {
        cy.get('.product_sort_container').select('za')
        cy.get('.inventory_item').first().find('a').should('have.id', 'item_3_img_link')
    })

    it('Validate the sort "Price (low to high)" works', () => {
        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item').first().find('a').should('have.id', 'item_2_img_link')
    })

    it('Validate the sort "Price (high to low)" works', () => {
        cy.get('.product_sort_container').select('hilo')
        cy.get('.inventory_item').first().find('a').should('have.id', 'item_5_img_link')
    })
})