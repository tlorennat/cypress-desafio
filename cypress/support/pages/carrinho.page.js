const AMERICANO = ('button[aria-label="Remove one Americano"]')
const TOTAL = ('button[data-test="checkout"]')
const NOME = '#name'
const EMAIL = '#email'
const SUBMIT = '#submit-payment'
const SUCESSO = '.snackbar.success'


class CarrinhoPage{
    removerAmericano(){
        cy.get(AMERICANO).filter(':visible').first().click()
    }
    preencherDados(){
        cy.get(TOTAL).click()
        cy.get(NOME).type(Cypress.env('Name'))
        cy.get(EMAIL).type(Cypress.env('Email'))
        cy.get(SUBMIT).click()
    }
    mensagemSucesso(){
        cy.get(SUCESSO).should('be.visible').and('contain.text', 'Thanks for your purchase')

    }

}
export default new CarrinhoPage()