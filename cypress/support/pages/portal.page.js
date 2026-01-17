const CAPPUCCINO = ('[data-cy="Cappuccino"]')
const AMERICANO = ('[data-cy="Americano"]')
const ESPRESSO = ('[data-cy="Espresso"]')




class PortalPage{
    selecionarTresCafes(){
        cy.get(CAPPUCCINO).should('be.visible').click()
        cy.get(AMERICANO).should('be.visible').click()
        cy.get(ESPRESSO).should('be.visible').click()
    }
    
    aceitarOfertaMocha(){
       cy.get('.yes').click();
       cy.get('a[aria-label="Cart page"]').click();
    }
    
}

export default new PortalPage()
