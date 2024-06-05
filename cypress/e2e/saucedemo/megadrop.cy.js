describe('megadrop', () => {
    beforeEach(() => {
        cy.Login()
    })
  
    it('Validate the megadrop is hidden', () => {
        cy.get('.bm-menu-wrap').invoke('attr', 'aria-hidden').should('eq', 'true')       
    })

    it('Validate the megadrop is shown when the user clicks on the hamburguer menu', ()=>{
        cy.get('.bm-burger-button').click()
        cy.get('.bm-menu-wrap').invoke('attr', 'aria-hidden').should('eq', 'false')
    })

    it('Validate the megadrop menu', ()=>{
        cy.get('.bm-burger-button').click()
        cy.get('#inventory_sidebar_link').should('be.visible');
        cy.get('#about_sidebar_link').should('be.visible');
        cy.get('#reset_sidebar_link').should('be.visible');
        cy.get('#logout_sidebar_link').should('be.visible');
    })

    it('Validate the user can close the megadrop', ()=>{
        cy.get('.bm-cross-button').click({force: true})
        cy.get('.bm-menu-wrap').invoke('attr', 'aria-hidden').should('eq', 'true')
    })


})