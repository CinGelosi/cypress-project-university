const loginPage = require("../pages/login")
const megadrop = require("../pages/megadrop")

describe('megadrop', () => {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('saucedemoData').then(credentials =>{
            this.credentials=credentials;
            loginPage.login(this.credentials.userNameOk,this.credentials.passwordOk)
        })        
    })
  
    it('Validate the megadrop is hidden', () => {
        megadrop.hamburguerMenuShown().invoke('attr', 'aria-hidden').should('eq', 'true')       
    })

    it('Validate the megadrop is shown when the user clicks on the hamburguer menu', ()=>{
        megadrop.openHamburguerMenu()
        megadrop.hamburguerMenuShown().invoke('attr', 'aria-hidden').should('eq', 'false')
    })

    it('Validate the megadrop menu', ()=>{
        megadrop.openHamburguerMenu()
        megadrop.menuAllItems().should('be.visible');
        megadrop.menuAbout().should('be.visible');
        megadrop.menuLogout().should('be.visible');
        megadrop.menuResetAppState().should('be.visible');
        
    })

    it('Validate the user can close the megadrop', ()=>{
        megadrop.closeMegadrop()
        megadrop.hamburguerMenuShown().invoke('attr', 'aria-hidden').should('eq', 'true')
    })


})