class Megadrop {

    elements = {
        hamburguerMenu: ()=> cy.get('.bm-burger-button'),
        hamburguerMenuShown: ()=> cy.get('.bm-menu-wrap'),
        menuAllItems: ()=> cy.get('#inventory_sidebar_link'),
        menuAbout: ()=> cy.get('#about_sidebar_link'),
        menuLogout: ()=> cy.get('#logout_sidebar_link'),
        menuResetAppState: ()=> cy.get('#reset_sidebar_link'),
        crossButton: ()=> cy.get('.bm-cross-button')
    }

    hamburguerMenu(){
        return this.elements.hamburguerMenu()
    }    

    hamburguerMenuShown(){
        return this.elements.hamburguerMenuShown()
    }

    openHamburguerMenu(){
        this.elements.hamburguerMenu().click()
    }
    
    menuAllItems(){
        return this.elements.menuAllItems()
    }

    menuAbout(){
        return this.elements.menuAbout()
    }

    menuLogout(){
        return this.elements.menuLogout()
    }

    menuResetAppState(){
        return this.elements.menuResetAppState()
    }

    closeMegadrop(){
        this.elements.crossButton().click({force: true})
    }

}

module.exports = new Megadrop();