class LoginPage {

    elements = {
        usernameInput: ()=> cy.get('#user-name'),
        passwordInput: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('#login-button'),
        logoLogin: ()=> cy.get('.login_logo'),
        error: ()=> cy.get('[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }
    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    clickLogin(){
        this.elements.loginButton().click()
    }
    login(username, password){
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    logo(){
        return this.elements.logoLogin()
    }

    errorMessage(){
        return this.elements.error()
    }
}

module.exports = new LoginPage();
