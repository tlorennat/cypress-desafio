import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import Portal from "../pages/portal.page"
import Carrinho from "../pages/carrinho.page"


Given('que o usuário acessa o site', () =>{
    cy.visit('/')

});

And('seleciona três tipos diferentes de café', () => {
    Portal.selecionarTresCafes()
});

When('o usuário aceita a oferta promocional do Mocha', ()=>{
    Portal.aceitarOfertaMocha()
});

And('o carrinho contém 4 itens com os valores corretos para remover 1 item', ()=>{
    Carrinho.removerAmericano()
});

Then('preenche os dados como nome e email', ()=>{
    Carrinho.preencherDados()
});

And('deve ser exibida mensagem de sucesso', ()=>{
    Carrinho.mensagemSucesso()
});

